import jwt from "jsonwebtoken"
import { Response } from "../utils/responseHandler.js"


export const IsAuthenticated = async(req,res,next)=>{
    const authHeader = req.headers.authorization 
    if( !authHeader || !authHeader.startsWith("Bearer ")){
        return Response(res,401,"Unauthorized token missing")
    }
    try {
        const token = authHeader.split(" ")[1]
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.user = decoded.id 
        next()        
    } catch (error) {
        console.log("error in authMiddleware",error)
        return Response(res,500,"Internal server error")
    }
}

