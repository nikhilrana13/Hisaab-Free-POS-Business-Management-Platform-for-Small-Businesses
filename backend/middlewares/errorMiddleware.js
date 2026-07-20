import multer from "multer";
import { Response } from "../utils/responseHandler.js";

export const errorHandler = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return Response(res, 400, "Image size must be less than 2 MB");
    }

    return Response(res, 400, err.message);
  }

  if (err) {
    return Response(res, 400, err.message);
  }

  next();
};
