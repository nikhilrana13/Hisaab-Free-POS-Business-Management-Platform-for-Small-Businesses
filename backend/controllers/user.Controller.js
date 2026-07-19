import { validationResult } from "express-validator";
import User from "../models/userModel.js";
import Business from "../models/businessModel.js";
import { Response } from "../utils/responseHandler.js";

// onboarding user
export const OnBoardingUser = async (req, res) => {
  try {
    const userId = req.user;
    const { businessName, businessType, businessAddress, contactno } = req.body;
    // validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return Response(res, 400, "Validation error", errors.array());
    }
    // check user exists or not
    const user = await User.findById(userId);
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (user.isOnboarded) {
      return Response(res, 400, "User already onboarded");
    }
    // check business already exists or not
    const existingbusiness = await Business.findOne({
      ownerId: user._id,
    });
    if (existingbusiness) {
      return Response(res, 409, "Business already exists");
    }
    // create business model
    const business = await Business.create({
      ownerId: user._id,
      businessName,
      businessAddress,
      businessType,
      contactno,
    });
    user.isOnboarded = true;
    await user.save();
    return Response(res, 201, "Onboarding successfully",{businessDetails:business});
  } catch (error) {
    console.error("failed to onboarding user", error);
    return Response(res, 500, "Internal server error");
  }
};
