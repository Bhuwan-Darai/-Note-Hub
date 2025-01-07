import expressAsyncHandler from "express-async-handler";
import prisma from "../lib/db";

// @desc    Add a new user
// @route   POST /api/users
// @access  Public
const addUser = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;

  console.log(name, "name");
  console.log(email, "email");

  console.log("hello");

  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  console.log("hello");

  console.log(newUser, "user");

  if (!newUser) {
    res.json({
      error: "User not created",
    });
  }

  res.json({
    message: "User created successfully",
  });
});

const authUser = expressAsyncHandler(async (req, res) => {
  try {
    console.log(req.body);
    const { email, name } = req.body;

    if (!email || !name) {
      res.status(400);
      throw new Error("Email and name are required");
    }

    const user = await prisma.auth.create({
      data: {
        email,
        name,
      },
    });

    console.log(user, "user");
    res.status(201).json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
});

export { addUser, authUser };
