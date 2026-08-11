import express from "express"
import { IsAuthenticated } from "../middlewares/isAuthenticated.js"
import { OnBoardingValidation, UpdateBusinessProfileValidation } from "../validations/user.validations.js"
import { GetBusinessProfile, OnBoardingUser, UpdateBusinessProfile } from "../controllers/user.Controller.js"
import upload from "../utils/helpers.js"
const router = express.Router()


// routes 
router.post("/onboarding",OnBoardingValidation,IsAuthenticated,OnBoardingUser)
router.get("/business-details",IsAuthenticated,GetBusinessProfile)
router.put("/update-business",IsAuthenticated,upload.single("logo"),UpdateBusinessProfileValidation,IsAuthenticated,UpdateBusinessProfile)

export default router 


