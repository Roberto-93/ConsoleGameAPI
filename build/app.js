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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const Game_1 = __importDefault(require("./routes/Game"));
const dbData_1 = __importDefault(require("./db/dbData"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)()); // Aggiungi il middleware cors
app.use('/v1/Games', Game_1.default);
const dbName = "ConsoleGamesAPI"; // Cambia il nome del database qui
app.listen(process.env.PORT || 3001, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Server is running port 3001");
    yield mongoose_1.default.connect(`mongodb://127.0.0.1:27017/${dbName}`);
    yield (0, dbData_1.default)(); // Chiamata per inizializzare i dati nel database
}));
exports.default = app;
