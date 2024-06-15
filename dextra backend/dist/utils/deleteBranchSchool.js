"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModelIfExists = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const returnNormalizedName_1 = require("./returnNormalizedName");
const staffSchema_1 = require("../models/staffSchema");
const deleteModelIfExists = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const modelName = (0, returnNormalizedName_1.normalizedName)(name);
        if (mongoose_1.default.models[modelName]) {
            // Retrieve the model
            const BranchModel = mongoose_1.default.models[modelName];
            // Find the branch by name
            const deletedBranch = yield BranchModel.findOne({ branchname: name });
            if (!deletedBranch) {
                throw new Error("Branch not found");
            }
            // Find all users who are associated with the deleted branch
            const usersToUpdate = yield staffSchema_1.UserModel.find({
                branches: deletedBranch._id,
            });
            // Remove the reference to the deleted branch from each user document
            for (const user of usersToUpdate) {
                user.branches = user.branches.filter((branchId) => branchId.toString() !==
                    deletedBranch._id.toString());
                yield user.save();
            }
        }
    }
    catch (error) {
        console.error("Error in deleting the model:", error);
    }
});
exports.deleteModelIfExists = deleteModelIfExists;
