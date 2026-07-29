import mongoose from "mongoose"
const businessSchema = new mongoose.Schema({
    ownerId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    businessName:{type:String,required:true,trim:true,lowercase:true,maxlength:30},
    logo:{
        url:{type:String},
        fileId:{type:String}
    },
    businessType:{type:String,enum:[ "teastall","foodcart","restaurant","cafe","bakery","juiceshop","fastfood","other",]},
    businessAddress:{type:String,default:"",maxlength:80,trime:true,required:true},
    contactno:{type:String,required:true,trim:true,maxlength:10},
},{timestamps:true})

const Business = mongoose.model("Business",businessSchema)
export default Business


