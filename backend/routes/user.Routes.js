import express from "express"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { OnBoardingValidation } from "../validations/user.validations.js"
import { OnBoardingUser } from "../controllers/user.Controller.js"
const router = express.Router()


// routes 
router.post("/onboarding",OnBoardingValidation,IsAuthenticated,OnBoardingUser)

export default router 


