import Product from "../models/productModel.js";
import User from "../models/userModel.js";
import Order from "../models/orderModel.js";
import { Response } from "../utils/responseHandler.js";
import { OrderProductValidation } from "../validations/order.Validations.js";
import { safeParse } from "../validations/product.Validations.js";

// create order
export const CreateOrder = async (req, res) => {
  try {
    const userId = req.user;
    const { products, paymentMethod } = req.body;
    //validation
    const allowedFields = ["products", "paymentMethod"];
    for (let field of allowedFields) {
      if (!req.body[field]) {
        return Response(res, 400, `${field} is Required`);
      }
    }
    const parseProducts = safeParse(products);
    if (!parseProducts) {
      return Response(res, 400, "products must be a valid JSON array");
    }
    const validateProduct = OrderProductValidation(parseProducts);
    if (validateProduct) {
      return Response(res, 400, validateProduct);
    }
    const allowedPaymentMethods = ["cash", "upi"];
    if (!allowedPaymentMethods.includes(paymentMethod)) {
      return Response(res, 400, "Enter valid payment method");
    }
    // check user exists or not
    const user = await User.findById(userId).select("isOnboarded");
    if (!user) {
      return Response(res, 404, "User not found");
    }
    if (!user.isOnboarded) {
      return Response(res, 400, "Please complete Onboarding");
    }
    // product validation
    const productIds = parseProducts.map((item) => item.product);
    const existingProducts = await Product.find({
      _id: { $in: productIds },
      ownerId: userId,
    }).select("_id productName priceOptions");
    const foundProductIds = new Set(
      existingProducts.map((product) => product._id.toString()),
    );
    const missingProducts = productIds.filter(
      (id) => !foundProductIds.has(String(id)),
    );
    if (missingProducts.length) {
      return Response(res, 400, "One or more products do not exist");
    }
    // calculate price
    const productMap = new Map(
      existingProducts.map((product) => [product._id.toString(), product]),
    );
    for (const item of parseProducts) {
      const dbProduct = productMap.get(item.product.toString());
      const selectedOption = dbProduct.priceOptions.find(
        (option) => option._id.toString() === item.selectedPriceOptionId,
      );
      if (!selectedOption) {
        return Response(res, 400, "Invalid price option");
      }
      item.productName = dbProduct.productName;
      item.priceOptionName = selectedOption.unit;
      item.price = selectedOption.price;
      item.lineTotal = selectedOption.price * item.quantity;
    }
    const totalPrice = parseProducts.reduce(
      (sum, item) => sum + item.lineTotal,
      0,
    );
    // create order
    const order = await Order.create({
      ownerId: userId,
      products: parseProducts,
      paymentMethod,
      totalPrice,
    });
    return Response(res, 201, "Order created successfully", { order });
  } catch (error) {
    console.error(error);
    return Response(res, 500, "Something went wrong while creating order");
  }
};

