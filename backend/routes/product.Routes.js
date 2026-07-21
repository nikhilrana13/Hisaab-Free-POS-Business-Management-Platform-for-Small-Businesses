import express from "express"
import multer from "multer"
import upload from "../utils/helpers.js"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { AddProduct, DeleteProduct, GetAllProducts, UpdateProduct } from "../controllers/product.Controller.js"
const router = express.Router()


// routes 
router.post("/add-product",IsAuthenticated,upload.single("image"),AddProduct)
router.get("/all",IsAuthenticated,GetAllProducts)
router.put("/update/:id",IsAuthenticated,upload.single("image"),UpdateProduct)
router.delete("/delete/:id",IsAuthenticated,DeleteProduct)



export default router