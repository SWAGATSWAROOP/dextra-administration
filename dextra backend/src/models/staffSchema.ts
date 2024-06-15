import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      index: true,
      unique: true,
    },
    name: {
      type: String,
    },
    phoneno: {
      type: String,
    },
    email: {
      type: String,
    },
    role: {
      type: String,
    },
    branches: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Branch", index: true },
    ], // Array of branch ObjectIds
    schools: [{ type: mongoose.Types.ObjectId, ref: "School", index: true }],
  },
  {
    timestamps: true,
  }
);

export const UserModel = new mongoose.Model("UserModel", userSchema);
