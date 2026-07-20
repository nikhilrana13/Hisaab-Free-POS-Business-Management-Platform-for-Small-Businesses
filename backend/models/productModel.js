import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  ownerId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true,},
  productName:{type:String,required:true,trim:true,maxlength:30},
  image:{
    url:{type:String,required:true},
    fileId:{type:String}
  },
  priceOptions:[
    {
        unit:{type:String,enum:["half","full"],required:true},
        price:{type:Number,required:true,min:0}
    }
  ],  
},{timestamps:true})

const Product = mongoose.model("Product",productSchema)
export default Product