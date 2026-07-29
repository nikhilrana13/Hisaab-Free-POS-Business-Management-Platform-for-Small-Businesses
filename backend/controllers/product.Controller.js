import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import { deleteFromImageKit, uploadToImageKit } from "../utils/helpers.js";
import { Response } from "../utils/responseHandler.js";
import {safeParse,ValidateProductPriceOptions,} from "../validations/product.Validations.js";

// Add product
export const AddProduct = async (req, res) => {
  try {
    const userId = req.user;
    const { productName, priceOptions } = req.body;
    const file = req.file;
    // validation
    const normalizedName = productName.trim().toLowerCase();
    if (!normalizedName) {
      return Response(res, 400, "Product Name is required");
    }
    // safe parsing String to object
    const parsedPriceOptions = safeParse(priceOptions);
    // price validation
    const validatePrice = ValidateProductPriceOptions(parsedPriceOptions);
    if (validatePrice) {
      return Response(res, 400, validatePrice);
    }
    // check user exists or not
    const user = await User.findById(userId).select("isOnboarded");
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (!user.isOnboarded) {
      return Response(res, 400, "Please complete Onboarding");
    }
    // check product already exists or not
    const existingproduct = await Product.findOne({
      ownerId: user._id,
      productName: normalizedName,
    });
    if (existingproduct) {
      return Response(res, 409, "Product Already exists");
    }
    // image validation
    if (!file) {
      return Response(res, 400, "Product Image is required");
    }
    // upload image to imagekit
    let productimage;
    try {
      productimage = await uploadToImageKit(file, "/hisaab/vendors/products");
    } catch (error) {
      console.error("Upload failed:", error);
      return Response(res, 500, "Upload failed, please try again");
    }

    // create product
    const product = await Product.create({
      ownerId: user._id,
      productName: normalizedName,
      priceOptions: parsedPriceOptions,
      image: productimage,
    });
    return Response(res, 201, "Product Added Successfully", { product });
  } catch (error) {
    console.error("failed to add product", error);
    return Response(res, 500, "Internal server error");
  }
};
// get user all products
export const GetAllProducts = async (req, res) => {
  try {
    const userId = req.user;
    let { page = 1, limit = 6, productname } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);
    const skip = (page - 1) * limit;
    // filter
    let filter = { ownerId: userId };
    if (productname) {
      filter.productName = {
        $regex: productname.trim().toLowerCase(),
        $options: "i",
      };
    }
    const [products, totalProducts] = await Promise.all([
      Product.find(filter).skip(skip).sort({createdAt:-1}).limit(limit),
      Product.countDocuments(filter),
    ]);
    const totalPages = Math.ceil(totalProducts / limit);
    return Response(res, 200, "Products found successfully", {
      products,
      pagination: {
        totalProducts,
        totalPages,
        currentPage: page,
        limit,
      },
    });
  } catch (error) {
    console.error("failed to get all products", error);
    return Response(res, 500, "Internal server error");
  }
};
// Update Product
export const UpdateProduct = async (req, res) => {
  try {
    const userId = req.user;
    const productId = req.params.id;
    const { productName, priceOptions } = req.body;
    const file = req.file;

    let normalizedName;
    if (productName) {
      normalizedName = productName.trim().toLowerCase();
    }
    // safe parsing String to object
    const parsedPriceOptions = safeParse(priceOptions);
    if (parsedPriceOptions) {
      // price validation
      const validatePrice = ValidateProductPriceOptions(parsedPriceOptions);
      if (validatePrice) {
        return Response(res, 400, validatePrice);
      }
    }
    // check user exists or not
    const user = await User.findById(userId).select("isOnboarded");
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (!user.isOnboarded) {
      return Response(res, 400, "Please complete Onboarding");
    }
    // check product exists or not
    const product = await Product.findOne({
      _id: productId,
      ownerId: user._id,
    });
    if (!product) {
      return Response(res, 404, "Product not found");
    }
    // check product name already exists or not
    const existingProduct = await Product.findOne({
      ownerId: userId,
      productName: normalizedName,
      _id: { $ne: productId }, // ignore current product
    });

    if (existingProduct) {
      return Response(res, 409, "Product already exists");
    }
    // update image
    let uploadedImage = null;
    try {
      if (file) {
        uploadedImage = await uploadToImageKit(
          file,
          "/hisaab/vendors/products",
        );
      }
      const updatedProduct = await Product.findOneAndUpdate(
        {
          _id: product._id,
          ownerId: user._id,
        },
        {
          productName: normalizedName,
          priceOptions: parsedPriceOptions,
          image: uploadedImage || product.image,
        },
        { new: true },
      );
      if (uploadedImage) {
        try {
          await deleteFromImageKit(business.image.fileId);
        } catch (err) {
          console.error("Failed to delete old image:", err);
        }
      }
      return Response(res, 200, "Updated Successfully", {
        product: updatedProduct,
      });
    } catch (error) {
      // if upload but db fail
      if (uploadedImage?.fileId) {
        await deleteFromImageKit(uploadedImage.fileId);
      }
      console.error("Failed to update product:", error);
      return Response(res, 500, "Internal server error");
    }
  } catch (error) {
    console.error("failed to Update product", error);
    return Response(res, 500, "Internal server error");
  }
};
// delete product
export const DeleteProduct = async (req, res) => {
  try {
    const userId = req.user;
    const productId = req.params.id;
    // check user exists or not
    const user = await User.findById(userId).select("isOnboarded");
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (!user.isOnboarded) {
      return Response(res, 400, "Please complete Onboarding");
    }
    // check product exists or not
    const product = await Product.findOne({
      _id: productId,
      ownerId: user._id,
    });
    if (!product) {
      return Response(res, 404, "Product not found");
    }
    await product.deleteOne();
    if (product?.image?.fileId) {
      try {
        await deleteFromImageKit(product.image.fileId);
      } catch (error) {
        console.error("Failed to delete product image:", error);
      }
    }
    return Response(res, 200, "Product deleted successfully");
  } catch (error) {
    console.error("failed to deleted product", error);
    return Response(res, 500, "Internal server error");
  }
}; 
