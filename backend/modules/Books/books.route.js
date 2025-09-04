import express from "express";
import {createBook, getAllBooks } from "./books.controller.js";
import upload from "../middleware.js/multer.middleware.js";
const router = express.Router();

router.post("/",upload.single("image"),createBook);
router.get("/",getAllBooks);

export default router;
