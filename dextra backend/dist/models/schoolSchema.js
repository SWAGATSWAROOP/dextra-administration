"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.School = new mongoose_1.default.Schema({
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
}, {
    timestamps: true,
});
