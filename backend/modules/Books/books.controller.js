import bookModel from "./books.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import generateUniqueSlug from "../../utils/GenerateSlug.js";
import { v2 as cloudinary } from "cloudinary";
import { ApiError } from "../../utils/ApiError.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Create Book
const createBook = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const imageFile = req.file;
  if (!title) {
    throw new ApiError(400, "Book title is required");
  }
  if (!imageFile) {
    throw new ApiError(400, "Category image is required");
  }
  const slug = await generateUniqueSlug(title, bookModel);

  const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
    resource_type: "image",
    folder: "books",
  });

  const book = await bookModel.create({
    ...req.body,
    slug,
    image: imageUpload.secure_url,
  });

  res.status(201).json(new ApiResponse(201, book, "Book created successfully"));
});

//get all books
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await bookModel
    .find()
    .populate("author", "name")
    .populate("category", "title")
    .exec();
  res.status(200).json(new ApiResponse(200, books, "Found All Books"));
});

export { createBook, getAllBooks };
