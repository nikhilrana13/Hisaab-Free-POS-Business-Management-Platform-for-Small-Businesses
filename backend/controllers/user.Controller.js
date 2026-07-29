import { validationResult } from "express-validator";
import User from "../models/userModel.js";
import Business from "../models/businessModel.js";
import { Response } from "../utils/responseHandler.js";
import { deleteFromImageKit, uploadToImageKit } from "../utils/helpers.js";

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
    return Response(res, 201, "Onboarding successfully", {
      businessDetails: business,
    });
  } catch (error) {
    console.error("failed to onboarding user", error);
    return Response(res, 500, "Internal server error");
  }
};
// update business profile
export const UpdateBusinessProfile = async (req, res) => {
  try {
    const userId = req.user;
    const { businessName, businessAddress, contactno } = req.body;
    let file = req.file;
    // validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return Response(res, 400, "Validation error", errors.array());
    }
    // check user exists or not
    const user = await User.findById(userId).select("isOnboarded");
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (!user.isOnboarded) {
      return Response(res, 400, "Please complete Onboarding");
    }
    const filter = {
      ownerId: user._id,
    };
    // check business exists or not
    const business = await Business.findOne(filter);
    if (!business) {
      return Response(res, 400, "Business not found");
    }
    let uploadedimg = null;
    try {
      if (file) {
        uploadedimg = await uploadToImageKit(file, "/hisaab/vendors/profile");
      }
      const updateData = {};
      if (businessName !== undefined) {
        updateData.businessName = businessName;
      }
      if (businessAddress !== undefined) {
        updateData.businessAddress = businessAddress;
      }
      if (contactno !== undefined) {
        updateData.contactno = contactno;
      }
      if (uploadedimg) {
        updateData.logo = uploadedimg;
      }
      if (Object.keys(updateData).length === 0) {
        return Response(res, 400, "No fields provided to update");
      }
      const updatedbusiness = await Business.findOneAndUpdate(
        filter,
        updateData,
        {
          new: true,
          runValidators: true,
        },
      );

      if (uploadedimg && business.logo?.fileId) {
        try {
          await deleteFromImageKit(business.logo.fileId);
        } catch (err) {
          console.error("Failed to delete old image:", err);
        }
      }
      return Response(res, 200, "Business profile updated successfully", {
        business: updatedbusiness,
      });
    } catch (error) {
      // Rollback uploaded image if DB update fails
      if (uploadedimg?.fileId) {
        try {
          await deleteFromImageKit(uploadedimg.fileId);
        } catch (err) {
          console.error("Failed to rollback uploaded image:", err);
        }
      }
      console.error("Failed to update business profile:", error);
      return Response(res, 500, "Internal server error");
    }
  } catch (error) {
    console.error("failed to Update business profile", error);
    return Response(res, 500, "Internal server error");
  }
};
