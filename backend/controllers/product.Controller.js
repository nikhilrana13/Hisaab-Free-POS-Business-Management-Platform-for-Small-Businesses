import Product from "../models/productModel.js"
import User from "../models/userModel.js"
import { uploadToImageKit } from "../utils/helpers.js"
import { Response } from "../utils/responseHandler.js"
import { safeParse, ValidateProductPriceOptions } from "../validations/product.Validations.js"





// Add product
export const AddProduct = async(req,res)=>{
    try {
        const userId = req.user 
        const {productName,priceOptions} = req.body 
        const file = req.file 
        // validation
        const normalizedName = productName.trim().toLowerCase();
        if(!normalizedName){
            return Response(res,400,"Product Name is required")
        }
        // safe parsing String to object
        const parsedPriceOptions = safeParse(priceOptions)
        // price validation 
        const validatePrice = ValidateProductPriceOptions(parsedPriceOptions)
        if(validatePrice){
            return Response(res,400,validatePrice)
        }
         // check user exists or not 
        const user = await User.findById(userId).select("isOnboarded");
        if(!user){
            return Response(res,404,"User not found")
        }
        if(!user.isOnboarded){
            return Response(res,400,"Please complete Onboarding")
        }
         // check product already exists or not
        const existingproduct = await Product.findOne({
            ownerId:user._id,
            productName:normalizedName
        })
        if(existingproduct){
            return Response(res,409,"Product Already exists",)
        }
        // image validation 
        if(!file){
            return Response(res,400,"Product Image is required")
        }
        // upload image to imagekit
        let productimage;
        try {
            productimage = await uploadToImageKit(file,"/hisaab/vendors/products")
        } catch (error) {
             console.error("Upload failed:", error);
            return Response(res, 500, "Upload failed, please try again");
        }
       
        // create product 
        const product =  await Product.create({
            ownerId:user._id,
            productName:normalizedName,
            priceOptions:parsedPriceOptions,
            image:productimage
        })
        return Response(res,201,"Product Added Successfully",{product})
    } catch (error) {
        console.error("failed to add product",error)
        return Response(res,500,"Internal server error")
    }
}
// get user all products 
export const GetAllProducts = async(req,res)=>{
    try {
        const userId = req.user 
        let {page = 1,limit=6,productname} = req.query 
        page = parseInt(page)
        limit = parseInt(limit)
        const skip = (page - 1) * limit;
        // filter
        let filter = {ownerId:userId}
        if(productname){
            filter.productName = {
                $regex:productname.trim().toLowerCase(),
                $options:"i"
            }}
        const [products,totalProducts] = await Promise.all([
            Product.find(filter),
            Product.countDocuments(filter)
        ])
        const totalPages = Math.ceil(totalProducts / limit)
        return Response(res,200,"Products found successfully",{products,pagination:{
            totalProducts,
            totalPages,
            currentPage:page,
            limit
        }})
    } catch (error) {
      console.error("failed to get all products",error)
      return Response(res,500,"Internal server error")
    }
}
