import express from "express"
import { body } from "express-validator"
import { Login, SignUp } from "../controllers/auth.Controller.js"
import { loginValidation, signUpValidation } from "../validations/auth.Validations.js"
const router = express.Router()



// routes 
router.post("/sign-up",signUpValidation,SignUp)
router.post("/login",loginValidation,Login)

export default router



