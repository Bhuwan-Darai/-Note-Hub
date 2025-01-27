/**
 * Express router configuration
 */
import express from "express";
import { registerUser } from "../controller/controller";

const authRouter = express.Router();

/**
 * GET /hello
 * Returns a simple hello world message
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 * @returns {Object} JSON response with hello message
 */
authRouter.get("/hello", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

// router.post("/addUser", addUser);
authRouter.post("/registerUser", registerUser);

export default authRouter;
