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
    const { range = "today" } = req.query;
    // Check user
    const user = await User.findById(userId).select("isOnboarded");
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (!user.isOnboarded) {
      return Response(res, 400, "Please complete Onboarding");
    }

    let start;
    let end = moment().tz("Asia/Kolkata").endOf("day").toDate();

    switch (range) {
      case "today":
        start = moment().tz("Asia/Kolkata").startOf("day").toDate();
        break;

      case "week":
        start = moment().tz("Asia/Kolkata").startOf("isoWeek").toDate();
        break;

      case "month":
        start = moment().tz("Asia/Kolkata").startOf("month").toDate();
        break;

      default:
        return Response(res, 400, "Invalid range");
    }
    const last12Months = moment().tz("Asia/Kolkata").subtract(11, "months").startOf("month").toDate();
    // analytics aggregate pipeline 
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
                  $gte: start,
                  $lte: end,
                },
              },
            },
            {
              $group: {
                _id: null,
                totalSales: {
                  $sum: "$totalPrice",
                },
                totalOrders: {
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
          // payment split
          paymentSplit: [
            {
              $match: {
                createdAt: {
                  $gte: start,
                  $lte: end,
                },
              },
            },
            {
              $group: {
                _id: "$paymentMethod",
                totalSales: { $sum: "$totalPrice" },
                totalOrders: { $sum: 1 },
              },
            },
          ],
          // top products
          topProducts: [
            {
              $match: {
                createdAt: {
                  $gte: start,
                  $lte: end,
                },
              },
            },
            {
              $unwind: "$products",
            },
            {
              $group: {
                _id: "$products.product",

                productName: {
                  $first: "$products.productName",
                },
                quantitySold: {
                  $sum: "$products.quantity",
                },
                revenue: {
                  $sum: "$products.lineTotal",
                },
              },
            },
            {
              $sort: {
                quantitySold: -1,
              },
            },
            {
              $limit: 3,
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
    // payment split analytics
    const paymentStats = analytics[0].paymentSplit;
    const cashSales =
      paymentStats.find((item) => item._id === "cash")?.totalSales || 0;
    const upiSales =
      paymentStats.find((item) => item._id === "upi")?.totalSales || 0;
    const cashOrders =
      paymentStats.find((item) => item._id === "cash")?.totalOrders || 0;
    const upiOrders =
      paymentStats.find((item) => item._id === "upi")?.totalOrders || 0;
    // percentage
    const totalSales = cashSales + upiSales;
    const cashPercentage = totalSales === 0 ? 0 : Number(((cashSales / totalSales) * 100).toFixed(1));
    const upiPercentage =
      totalSales === 0 ? 0 : Number(((upiSales / totalSales) * 100).toFixed(1));
    return Response(res, 200, "Analytics fetched successfully", {
      range,
      stats: {
        totalSales: analytics[0].summary[0]?.totalSales || 0,
        totalOrders: analytics[0].summary[0]?.totalOrders || 0,
        averageOrderValue: Number((analytics[0].summary[0]?.averageOrderValue || 0).toFixed(2)),
        growth,
      },
      monthlyRevenue: formattedRevenue,
      paymentSplit: {
        cash: {
          sales: cashSales,
          orders: cashOrders,
          percentage: cashPercentage,
        },
        upi: {
          sales: upiSales,
          orders: upiOrders,
          percentage: upiPercentage,
        },
      },
      topProducts: analytics[0].topProducts,
    });
  } catch (error) {
    console.log("Failed to fetch analytics overview:", error);
    return Response(res, 500, "Internal server error");
  }
};

