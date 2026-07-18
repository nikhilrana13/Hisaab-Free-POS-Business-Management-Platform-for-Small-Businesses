import { body } from "express-validator";



export const signUpValidation = [
    body("fullname").trim().notEmpty().withMessage("fullname is Required").isLength({min:4,max:30}).withMessage("Fullname must be between 2 and 30 characters"),
    body("email").notEmpty().withMessage("Email is Required").isEmail().withMessage("please provide a valid email").normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required").isLength({min:6}).withMessage("password must be at least 6 characters long").isString(),
];

export const loginValidation = [
    body("email").notEmpty().withMessage("Email is Required").isEmail().withMessage("please provide a valid email").normalizeEmail(),
    body("password").notEmpty().withMessage("Password is required").isLength({min:6}).withMessage("password must be at least 6 characters long").isString(),
];