import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    fullname:{type:String,required:true,maxlength:30,trim:true},
    email:{type:String,required:true,lowercase:true,trim:true},
    password:{type:String,required:true},
    isOnboarded:{type:Boolean,default:false},
    isActive:{type:Boolean,default:false},
    role:{type:String,default:"vendor"}
},{timestamps:true})

const User = mongoose.model("User",userSchema)
export default User 

