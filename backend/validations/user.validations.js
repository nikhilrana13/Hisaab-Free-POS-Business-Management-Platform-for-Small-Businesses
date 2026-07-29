import { body } from "express-validator";




export const OnBoardingValidation = [
    body("businessName").trim().toLowerCase().notEmpty().withMessage("businessName is Required").isLength({min:5,max:30}).withMessage("Businessname must be between 2 and 30 characters"),
    body("businessAddress").trim().toLowerCase().notEmpty().withMessage("Address is Required").isLength({min:20,max:80}).withMessage("Addess must be between 20 and 80 characters"),
    body("businessType").toLowerCase().isIn(["teastall","foodcart","restaurant","cafe","bakery","juiceshop","fastfood", "other",]).withMessage("Invalid business type"),
    body("contactno").trim().notEmpty().isMobilePhone("en-IN").withMessage("Contact number is invalid")
]
export const UpdateBusinessProfileValidation = [
    body("businessName").optional().trim().toLowerCase().isLength({min:5,max:30}).withMessage("Businessname must be between 2 and 30 characters"),
    body("businessAddress").optional().trim().toLowerCase().isLength({min:20,max:80}).withMessage("Addess must be between 20 and 80 characters"),
    body("contactno").optional().trim().isMobilePhone("en-IN").withMessage("Contact number is invalid")
]


