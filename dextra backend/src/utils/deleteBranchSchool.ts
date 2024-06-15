import mongoose, { Model, Document } from "mongoose";
import { normalizedName } from "./returnNormalizedName";
import { UserModel } from "../models/staffSchema";

export const deleteModelIfExists = async (name: string) => {
  try {
    const modelName = normalizedName(name);
    if (mongoose.models[modelName]) {
      // Retrieve the model
      const BranchModel = mongoose.models[modelName] as Model<Document>;

      // Find the branch by name
      const deletedBranch = await BranchModel.findOne({ branchname: name });
      if (!deletedBranch) {
        throw new Error("Branch not found");
      }

      // Find all users who are associated with the deleted branch
      const usersToUpdate = await UserModel.find({
        branches: deletedBranch._id,
      });

      // Remove the reference to the deleted branch from each user document
      for (const user of usersToUpdate) {
        user.branches = user.branches.filter(
          (branchId: mongoose.Types.ObjectId) =>
            branchId.toString() !==
            (deletedBranch._id as mongoose.Types.ObjectId).toString()
        );
        await user.save();
      }
    }
  } catch (error) {
    console.error("Error in deleting the model:", error);
  }
};
