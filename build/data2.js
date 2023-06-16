"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicles = void 0;
const Auto_1 = __importDefault(require("./Auto"));
const Moto_1 = __importDefault(require("./Moto"));
exports.Vehicles = [
    ...Auto_1.default,
    ...Moto_1.default
];
