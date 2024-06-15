import mongoose, { Schema, Model, Document } from "mongoose";
import { normalizedName } from "./returnNormalizedName";

export const createNewBS = async (
  name: string,
  schema: Schema
): Promise<void | Model<Document>> => {
  try {
    const modelName = normalizedName(name);
    if (mongoose.models[modelName]) {
      return mongoose.model<Document>(modelName);
    }
    return mongoose.model<Document>(modelName, schema);
  } catch (error) {
    console.error("Error creating or retrieving model:", error);
  }
};
