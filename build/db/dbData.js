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
const mongoose_1 = __importDefault(require("mongoose"));
const ModelGame_1 = __importDefault(require("../models/ModelGame"));
const data_1 = require("./data");
const dbName = "ConsoleGamesAPI"; // Cambia il nome del database qui
const dbData = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect(`mongodb://127.0.0.1:27017/${dbName}`);
    yield ModelGame_1.default.deleteMany(); // Rimuove tutti i documenti esistenti
    // Inserisci i dati nel database
    yield ModelGame_1.default.insertMany(data_1.Games);
    console.log('Dati iniziali inseriti nel database');
});
exports.default = dbData;
