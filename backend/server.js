import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import Product from './models/product.models.js';
import productRoutes from './routes/product.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes)
app.use("/api/products",productRoutes) 
app.listen(PORT, ()=> {
    console.log("Server is running on port http://localhost:"+ PORT);

    connectDB();
})