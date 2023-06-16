"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiclesSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.VehiclesSchema = new mongoose_1.default.Schema({
    image: { type: String, required: true },
    category: { type: String, required: true },
    subcategory: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: String, required: true },
    price: { type: Number, numeric: true },
    reviews: { type: String, required: true },
});
const Vehicle = mongoose_1.default.model("Vehicle", exports.VehiclesSchema);
exports.default = Vehicle;
