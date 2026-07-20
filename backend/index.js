import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" 
import dotenv from "dotenv"
import { configure } from "./config/db.js"
import AuthRoutes from "./routes/auth.Routes.js"
import userRoutes from "./routes/user.Routes.js"
import ProductRoute from "./routes/product.Routes.js"
import { errorHandler } from "./middlewares/errorMiddleware.js"

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser())





// routes  
app.use("/api/auth",AuthRoutes)
app.use("/api/user",userRoutes)
app.use("/api/products",ProductRoute)
// Global Error Handler
app.use(errorHandler)


// connect to db
configure()



// server running
app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`)
})

