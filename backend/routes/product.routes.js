import express from "express";
import { getAllProducts } from "../controllers/products.controller";

const router = express.Router();
router.get("/",getAllProducts);

export default router;