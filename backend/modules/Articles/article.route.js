import express from "express";
import {createArticle, getAllArticles } from "./articles.controller.js";
import upload from "../middleware.js/multer.middleware.js";
const router = express.Router();

router.post("/",upload.single("image"),createArticle);
router.get("/",getAllArticles);

export default router;
