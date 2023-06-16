"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductSchema = new mongoose_1.default.Schema({
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    cost: { type: Number, required: true },
    rank: { type: String, required: true },
    reviews: { type: String, required: true }
});
const Product = mongoose_1.default.model("Product", ProductSchema);
exports.default = Product;
