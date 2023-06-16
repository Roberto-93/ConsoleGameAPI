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
const ModelGame_1 = __importDefault(require("../models/ModelGame"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield ModelGame_1.default.find();
        res.json(games);
    }
    catch (error) {
        console.error('Error retrieving games', error);
        res.status(500).json({ error: 'Error retrieving games' });
    }
}));
router.get('/genre/:genre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { genre } = req.params;
        const games = yield ModelGame_1.default.find({ genre });
        res.json(games);
    }
    catch (error) {
        console.error('Error retrieving games', error);
        res.status(500).json({ error: 'Error retrieving games' });
    }
}));
router.get('/q', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, consoleName, genre, price, image, description } = req.query;
    try {
        let filter = {};
        if (title) {
            filter.title = title;
        }
        if (consoleName) {
            filter.consoleName = consoleName;
        }
        if (genre) {
            filter.genre = genre;
        }
        if (price) {
            filter.price = JSON.parse(price);
        }
        if (image) {
            filter.image = image;
        }
        if (description) {
            filter.description = description;
        }
        const games = yield ModelGame_1.default.find(filter);
        if (games.length === 0) {
            return res.status(404).json({ message: "Games not found" });
        }
        res.json(games);
    }
    catch (error) {
        console.error('Error fetching games', error);
        res.status(500).json({ error: error.message });
    }
}));
exports.default = router;
