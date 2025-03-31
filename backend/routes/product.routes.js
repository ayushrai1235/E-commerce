import express from "express";
import { getAllProducts } from "../controllers/products.controller";
import { adminRoute, protectRoute } from "../middleware/auth.middleware";

const router = express.Router();
router.get("/",protectRoute,adminRoute, getAllProducts);

export default router;