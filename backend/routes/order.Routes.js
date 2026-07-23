import express from "express"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { CreateOrder, GetAllOrders } from "../controllers/order.Controller.js"
const router = express.Router()


// routes 
router.post("/create",IsAuthenticated,CreateOrder)
router.get("/all",IsAuthenticated,GetAllOrders)

export default router