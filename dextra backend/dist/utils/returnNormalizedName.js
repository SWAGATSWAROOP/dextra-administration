"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizedName = void 0;
const normalizedName = (name) => name.replace(/\s+/g, "_").toLowerCase();
exports.normalizedName = normalizedName;
