import mongoose from "mongoose";

export const Branch = new mongoose.Schema(
  {
    branchname: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    admin: {
      type: String,
    },
    attendincharge: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
