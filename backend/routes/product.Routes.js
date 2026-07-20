import express from "express"
import multer from "multer"
import upload from "../utils/helpers.js"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { AddProduct, GetAllProducts } from "../controllers/product.Controller.js"
const router = express.Router()


// routes 
router.post("/add-product",IsAuthenticated,upload.single("image"),AddProduct)
router.get("/all",IsAuthenticated,GetAllProducts)



export default router