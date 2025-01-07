import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/route";

import errorHandler from "./middleware/errorHandler";
import notFoundHandler from "./middleware/notFoundHandler";

// Load the appropriate .env file based on NODE_ENV
dotenv.config({
  path: process.env.NODE_ENV === "production" ? ".env.prod" : ".env.dev",
});

// Log the current environment for debugging
console.log(`Running in ${process.env.NODE_ENV} mode`);

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all origins

// Default route - sends a welcome message
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Use the router for API routes
app.use("/api", router);

// app.use(errorHandler);
// app.use(notFoundHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
