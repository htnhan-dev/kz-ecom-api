import express, { Request, Response } from "express";

import { Product } from "./models/product.model";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const port = process.env.PORT || 9999;

app.use(express.json());

app.use(cors());

// - connect MongoDB
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  throw new Error("MONGODB_URI environment variable is not set");
}
mongoose
  .connect(mongoUri)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (_req, res) => {
  res.send("Hello from API 👋");
});

app.get("/api/products", async (req: Request, res: Response): Promise<any> => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      message: "Find Products successfully",
      data: products,
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
