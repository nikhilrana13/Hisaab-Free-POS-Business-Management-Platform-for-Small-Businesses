import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser" 
import dotenv from "dotenv"
import { configure } from "./config/db.js"
import AuthRoutes from "./routes/auth.Routes.js"
import userRoutes from "./routes/user.Routes.js"
import ProductRoute from "./routes/product.Routes.js"
import OrderRoute from "./routes/order.Routes.js"
import AnalyticsRoute from "./routes/analytics.Routes.js"
import { errorHandler } from "./middlewares/errorMiddleware.js"

dotenv.config()

const PORT = process.env.PORT || 5000
const app = express()

// middlewares
app.use(cors({
    origin:process.env.NEXT_FRONTEND_URL,
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())


// routes  
app.use("/api/auth",AuthRoutes)
app.use("/api/user",userRoutes)
app.use("/api/products",ProductRoute)
app.use("/api/orders",OrderRoute)
app.use("/api/analytics",AnalyticsRoute)
// Global Error Handler
app.use(errorHandler)


// connect to db
configure()



// server running
app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`)
})

