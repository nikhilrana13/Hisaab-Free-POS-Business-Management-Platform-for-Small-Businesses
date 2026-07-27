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
    const orderData = await Order.aggregate([
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
    const cashSales =
      paymentStats.find((item) => item._id === "cash")?.total || 0;
    const upiSales =
      paymentStats.find((item) => item._id === "upi")?.total || 0;

    return Response(res, 200, "Dashboard Stats", {
      stats: {
        todaySales: orderData[0].todaySales[0]?.total || 0,
        todayOrders: orderData[0].todayOrders[0]?.count || 0,
        todayCashOrders: cashSales,
        todayupiOrders: upiSales,
      },
    });
  } catch (error) {
    console.log("failed to find Dashboard stats", error);
    return Response(res, 500, "Internal server error");
  }
};
// analytics overview
export const AnalyticsOverview = async (req, res) => {
  try {
    const userId = req.user;
    // Check user
    const user = await User.findById(userId).select("isOnboarded");
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (!user.isOnboarded) {
      return Response(res, 400, "Please complete Onboarding");
    }
    const todayStart = moment().tz("Asia/Kolkata").startOf("day").toDate();
    const todayEnd = moment().tz("Asia/Kolkata").endOf("day").toDate();
    const last12Months = moment()
      .tz("Asia/Kolkata")
      .subtract(11, "months")
      .startOf("month")
      .toDate();

    const analytics = await Order.aggregate([
      {
        $match: {
          ownerId: user._id,
        },
      },
      {
        $facet: {
          // Today's Summary
          summary: [
            {
              $match: {
                createdAt: {
                  $gte: todayStart,
                  $lte: todayEnd,
                },
              },
            },
            {
              $group: {
                _id: null,
                todaySales: {
                  $sum: "$totalPrice",
                },
                todayOrders: {
                  $sum: 1,
                },
                averageOrderValue: {
                  $avg: "$totalPrice",
                },
              },
            },
          ],
          // Last 12 Months Revenue
          monthlySales: [
            {
              $match: {
                createdAt: {
                  $gte: last12Months,
                },
              },
            },
            {
              $group: {
                _id: {
                  year: {
                    $year: "$createdAt",
                  },
                  month: {
                    $month: "$createdAt",
                  },
                },
                sales: {
                  $sum: "$totalPrice",
                },
              },
            },
            {
              $sort: {
                "_id.year": 1,
                "_id.month": 1,
              },
            },
          ],
        },
      },
    ]);

    const monthNames = [
      "",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // Create map from aggregation result
    const revenueMap = new Map();
    analytics[0].monthlySales.forEach((item) => {
      const key = `${item._id.year}-${item._id.month}`;
      revenueMap.set(key, item.sales);
    });
    // Fill missing months
    const formattedRevenue = [];
    for (let i = 11; i >= 0; i--) {
      const date = moment().tz("Asia/Kolkata").subtract(i, "months");
      const year = date.year();
      const month = date.month() + 1;
      const key = `${year}-${month}`;

      formattedRevenue.push({
        month: `${monthNames[month]} ${year}`,
        sales: revenueMap.get(key) || 0,
      });
    }
    // Revenue Growth %
    const currentMonth = formattedRevenue.at(-1)?.sales || 0;
    const previousMonth = formattedRevenue.at(-2)?.sales || 0;

    const growth =
      previousMonth === 0
        ? 0
        : Number(
            (((currentMonth - previousMonth) / previousMonth) * 100).toFixed(1),
          );
    return Response(res, 200, "Analytics fetched successfully", {
      stats: {
        todaySales: analytics[0].summary[0]?.todaySales || 0,
        todayOrders: analytics[0].summary[0]?.todayOrders || 0,
        averageOrderValue: Number((analytics[0].summary[0]?.averageOrderValue || 0)),
        growth,
      },
      monthlyRevenue: formattedRevenue,
    });
  } catch (error) {
    console.log("Failed to fetch analytics overview:", error);
    return Response(res, 500, "Internal server error");
  }
};
