import express from "express"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { OnBoardingValidation, UpdateBusinessProfileValidation } from "../validations/user.validations.js"
import { OnBoardingUser, UpdateBusinessProfile } from "../controllers/user.Controller.js"
import upload from "../utils/helpers.js"
const router = express.Router()


// routes 
router.post("/onboarding",OnBoardingValidation,IsAuthenticated,OnBoardingUser)
router.put("/update-business",IsAuthenticated,upload.single("logo"),UpdateBusinessProfileValidation,IsAuthenticated,UpdateBusinessProfile)

export default router 


