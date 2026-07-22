import express from "express"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { CreateOrder } from "../controllers/order.Controller.js"
const router = express.Router()


// routes 
router.post("/create",IsAuthenticated,CreateOrder)

export default router