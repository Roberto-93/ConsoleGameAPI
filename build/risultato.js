"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const risultatoSchema = new mongoose_1.default.Schema({
    titolo: String,
    categoria: String,
    // Aggiungi altri campi dati necessari
});
exports.default = mongoose_1.default.model('Risultato', risultatoSchema);
