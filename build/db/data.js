"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Games = void 0;
const Avventura_1 = __importDefault(require("./dati/Avventura"));
const Azione_1 = __importDefault(require("./dati/Azione"));
const GDR_1 = __importDefault(require("./dati/GDR"));
const Sparatutto_1 = __importDefault(require("./dati/Sparatutto"));
exports.Games = [
    ...Azione_1.default,
    ...Avventura_1.default,
    ...GDR_1.default,
    ...Sparatutto_1.default,
];
