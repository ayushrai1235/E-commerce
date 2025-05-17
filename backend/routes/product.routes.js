import express from "express";
import { createProduct, getAllProducts, getFeaturedProducts } from "../controllers/products.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();
router.get("/",protectRoute,adminRoute, getAllProducts)
router.get("/featured", getFeaturedProducts);
router.post("/create",protectRoute,adminRoute,createProduct)

export default router;