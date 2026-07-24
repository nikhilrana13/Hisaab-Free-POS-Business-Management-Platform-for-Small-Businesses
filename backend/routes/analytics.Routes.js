import express from "express"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { DashboardStats } from "../controllers/analytics.Controller.js"
const router = express.Router()


// routes 
router.get("/dashboard",IsAuthenticated,DashboardStats)


export default router