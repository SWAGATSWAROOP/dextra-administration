"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.userSchema = new mongoose_1.default.Schema({
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
        { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Branch", index: true },
    ], // Array of branch ObjectIds
    schools: [{ type: mongoose_1.default.Types.ObjectId, ref: "School", index: true }],
}, {
    timestamps: true,
});
exports.UserModel = new mongoose_1.default.Model("UserModel", exports.userSchema);
