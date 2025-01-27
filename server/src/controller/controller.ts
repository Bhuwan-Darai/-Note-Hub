import expressAsyncHandler from "express-async-handler";
import prisma from "../lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "../lib/mailer";
import { NextFunction } from "express";
import { Request, Response } from "express";

// @desc    Add a new user
// @route   POST /api/users
// @access  Public
// const addUser = expressAsyncHandler(async (req, res) => {
//   console.log(req.body);
//   const { name, email } = req.body;

//   console.log(name, "name");
//   console.log(email, "email");

//   console.log("hello");

//   const newUser = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//     },
//   });
//   console.log("hello");

//   console.log(newUser, "user");

//   if (!newUser) {
//     res.json({
//       error: "User not created",
//     });
//   }

//   res.json({
//     message: "User created successfully",
//   });
// });

// const authUser = expressAsyncHandler(async (req, res) => {
//   try {
//     console.log(req.body);
//     const { email, name } = req.body;

//     if (!email || !name) {
//       res.status(400);
//       throw new Error("Email and name are required");
//     }

//     const user = await prisma.auth.create({
//       data: {
//         email,
//         name,
//       },
//     });

//     console.log(user, "user");
//     res.status(201).json(user);
//   } catch (error) {
//     console.error("Error creating user:", error);
//     res.status(500).json({ message: "Internal Server Error", error: error });
//   }
// });

const registerUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, "email");
  console.log(password, "password");
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    const token = jwt.sign({ userId: user.userId }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    await sendVerificationEmail(email, token);

    res.json({ message: "Verification email sent" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

const verifyEmail = async (req: Request, res: Response, next: NextFunction) => {
  const { token } = req.body;

  try {
    if (!token || typeof token !== "string") {
      return res.status(400).json({ message: "Invalid token" });
    }

    const { userId } = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    await prisma.user.update({
      where: { userId: userId },
      data: { verified: true },
    });

    res.json({ message: "Email verified successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid or expired token" });
  }
};
export { registerUser, verifyEmail };
