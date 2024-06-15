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
exports.createNewBS = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const returnNormalizedName_1 = require("./returnNormalizedName");
const createNewBS = (name, schema) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const modelName = (0, returnNormalizedName_1.normalizedName)(name);
        if (mongoose_1.default.models[modelName]) {
            return mongoose_1.default.model(modelName);
        }
        return mongoose_1.default.model(modelName, schema);
    }
    catch (error) {
        console.error("Error creating or retrieving model:", error);
    }
});
exports.createNewBS = createNewBS;
