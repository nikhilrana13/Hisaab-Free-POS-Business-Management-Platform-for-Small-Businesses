import mongoose from "mongoose";
import Order from "../models/orderModel.js";
import User from "../models/userModel.js";
import { Response } from "../utils/responseHandler.js";
import moment from "moment-timezone";

// Dashboard stats analytics
export const DashboardStats = async (req, res) => {
  try {
    const userId = req.user;
    // check user exists or not
    const user = await User.findById(userId).select("isOnboarded");
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (!user.isOnboarded) {
      return Response(res, 400, "Please complete Onboarding");
    }
    const start = moment().tz("Asia/Kolkata").startOf("day").toDate();
    const end = moment().tz("Asia/Kolkata").endOf("day").toDate();
    // aggregrate pipeline
    const orderData = await  Order.aggregate([
      {
        $match: {
          ownerId: user._id,
          createdAt: { $gte: start, $lte: end },
        },
      },
      {
        $facet: {
          todaySales: [
            {
              $group: {
                _id: null,
                total: { $sum: "$totalPrice" },
              },
            },
          ],
          todayOrders: [
            {
              $count: "count",
            },
          ],
          paymentStats: [
            {
              $group: {
                _id: "$paymentMethod",
                total: { $sum: "$totalPrice" },
              },
            },
          ],
        },
      },
    ]);
    const paymentStats = orderData[0].paymentStats;
    const cashSales = paymentStats.find(item => item._id === "cash")?.total || 0;
    const upiSales = paymentStats.find(item => item._id === "upi")?.total || 0;

    return Response(res, 200, "Dashboard Stats", {
      stats: {
        todaySales:orderData[0].todaySales[0]?.total || 0,
        todayOrders:orderData[0].todayOrders[0]?.count || 0,
        todayCashOrders: cashSales,
        todayupiOrders: upiSales,
      },
    });
  } catch (error) {
    console.log("failed to find Dashboard stats", error);
    return Response(res, 500, "Internal server error");
  }
};
