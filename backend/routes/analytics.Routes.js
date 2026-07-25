import express from "express"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { AnalyticsOverview, DashboardStats } from "../controllers/analytics.Controller.js"
const router = express.Router()


// routes 
router.get("/dashboard",IsAuthenticated,DashboardStats)
router.get("/overview",IsAuthenticated,AnalyticsOverview)


export default router