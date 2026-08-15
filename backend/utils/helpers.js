import { toFile } from "@imagekit/nodejs";
import { imagekit } from "../config/imageKit.js";
import multer from "multer";

export const uploadToImageKit = async (file,folder) => {
  try {
    const fileName = `${Date.now()}-${file.originalname}`;
    const response = await imagekit.files.upload({
      file: await toFile(file.buffer,fileName), // multer buffer
      fileName,
      folder
    });
    return {
    url: response.url,
    fileId: response.fileId
  };
  } catch (error) {
    console.error("ImageKit Upload Error:", error)
    throw new Error("Images upload failed");
  }
};
export const deleteFromImageKit = async (fileId) => {
  try {
        await imagekit.files.delete(fileId);
    // console.log("File deleted successfully");
  } catch (error) {
    console.error("Error deleting files from ImageKit:", error);
  }
};
// multer upload config
const storage = multer.memoryStorage();
export const upload = multer({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024, // 2 MB
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
    ];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error("Only JPG, JPEG, PNG and WEBP images are allowed"));
    }
    cb(null, true);
  },
});

export default upload;