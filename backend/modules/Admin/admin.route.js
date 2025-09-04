import express from "express";
import { adminLogin, adminDashboard, logoutAdmin } from "./admin.controller.js";
import { adminAuth,verifyAdmin } from "./admin.auth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/verify", adminAuth, verifyAdmin);
router.get("/dashboard", adminDashboard);
// router.get("/dashboard", adminAuth, adminDashboard);
router.post("/logout", logoutAdmin);
export default router;
