import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    ownerId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    products:[
        {
            product:{type:mongoose.Schema.Types.ObjectId,ref:"Product",required:true},
            productName:{type:String,required:true},
            quantity:{type:Number,required:true,min:1},
            priceOptionName:{type:String},
            selectedPriceOptionId:{type: mongoose.Types.ObjectId,required: true},
            lineTotal: { type: Number, required: true,min:0},
        }
    ],
    paymentMethod:{type:String,enum:["cash","upi"],required:true},
    totalPrice:{type:Number,required:true,min:0}
},{timestamps:true}); 

const Order = mongoose.model("Order",orderSchema)
export default Order 



