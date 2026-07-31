import {validationResult} from "express-validator"
import bcrypt from "bcrypt"
import { Response } from "../utils/responseHandler.js"
import User from "../models/userModel.js"
import jwt from "jsonwebtoken"
import {UserMapper} from "../mappers/userMapper.js"


// sign up user 

export const SignUp = async (req,res)=>{
    try {
        const {fullname,email,password} = req.body 
        // validation 
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return Response(res,400,"Validation error",errors.array())
        }
        // check users already exists or not 
        let user = await User.findOne({email})
        
        if(!user){
              // hash password 
              const hashpassword = await bcrypt.hash(password,10)
              user = await User.create({
                fullname,
                email,
                password:hashpassword
              })
        }else{
            return Response(res,409,"User Already exists")
        }
        return Response(res,201,"Sign up sucessfully")
    } catch (error) {
        console.error("failed to signup user",error)
        return Response(res,500,"Internal server error")
    }
}
// login  
export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body 
         // validation 
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return Response(res,400,"Validation error",errors.array())
        }
        // check user exits or not 
        let user = await User.findOne({email})
        if(user){
             const isMatch = await bcrypt.compare(password,user.password)
             if(!isMatch){
                return Response(res,409,"Invalid credentails")
             }
             user.isActive = true,
             await user.save()
             // generate jwt 
             const token = await jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"1day"})
             res.cookie("token",token,{httpOnly:true,secure:true,sameSite:"none"})
            return Response(res,200,"Login successfully",{user:UserMapper(user),token})
        }else{
             return Response(res,400,"User not found ! Please register first")
        }
    } catch (error) {
        console.error("failed to login",error)
        return Response(res,500,"Internal server error")
    }
}
// logout 
export const Logout = async(req,res)=>{
    try {
        res.clearCookie("token",{httpOnly:true,secure:true,sameSite:"none"})
        return Response(res,200,"Logout successfully")
    } catch (error) {
        console.error("Failed to Logout",error)
        return Response(res,500,"Internal server error")
    }
}





