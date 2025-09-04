import articleModel from "./article.model.js";
import "../Authors/author.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import generateUniqueSlug from "../../utils/GenerateSlug.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Create Article
const createArticle = asyncHandler(async (req, res) => {
  const {
    title,
    abstract,
    content,
    category,
    author,
    image,
    tags,
    tableOfContents,
  } = req.body;
  const imageFile = req.file;
  if (!title) {
    throw new ApiError(400, "Article title is required");
  }
  if (!imageFile) {
    throw new ApiError(400, "Category image is required");
  }
  
  const slug = await generateUniqueSlug(title, articleModel);
  const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
    resource_type: "image",
    folder: "articles",
  });
  const article = await articleModel.create({
    title,
    abstract,
    content,
    category,
    author,
    tags,
    tableOfContents,
    slug,
    image: imageUpload.secure_url,
  });
  res
    .status(201)
    .json(new ApiResponse(201, article, "Article created successfully"));
});

// Get All Articles
const getAllArticles = asyncHandler(async (req, res) => {
  const articles = await articleModel
    .find()
    .populate({ path: "author", select: "name" })
    .populate({ path: "category", select: "title" });
  res
    .status(200)
    .json(new ApiResponse(200, articles, "Articles found successfully"));
});

export { createArticle, getAllArticles };
