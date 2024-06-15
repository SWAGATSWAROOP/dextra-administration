import mongoose from "mongoose";

export const School = new mongoose.Schema(
  {
    schoolname: {
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
