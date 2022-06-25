const express = require("express");
const {
  getUsers,
  createUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("./users.service");
const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.post("/users", createUsers);
userRouter.get("/users/:userId", getUserById);
userRouter.put("/users/:userId", updateUser);
userRouter.delete("/users/:userId", deleteUser);

module.exports = { userRouter };
