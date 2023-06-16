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
const Vehicle_1 = __importDefault(require("../models/Vehicle"));
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const vehicles = yield Vehicle_1.default.find();
        res.json(vehicles);
    }
    catch (error) {
        console.error('Error retrieving vehicles', error);
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}));
router.get('/category/:category', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.params;
        const vehicles = yield Vehicle_1.default.find({ category });
        res.json(vehicles);
    }
    catch (error) {
        console.error('Error retrieving vehicles', error);
        res.status(500).json({ error: 'Error retrieving vehicles' });
    }
}));
router.get('/q', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { category, subcategory, brand, year, price, reviews } = req.query;
    try {
        let filter = {};
        if (category) {
            filter.category = category;
        }
        if (subcategory) {
            filter.subcategory = subcategory;
        }
        if (brand) {
            filter.brand = brand;
        }
        if (year) {
            filter.year = year;
        }
        if (price) {
            const { min, max } = JSON.parse(price);
            filter.price = { $gte: min, $lte: max };
        }
        if (reviews) {
            filter.reviews = reviews;
        }
        const vehicles = yield Vehicle_1.default.find(filter);
        if (vehicles.length === 0) {
            return res.status(404).json({ message: "Vehicles not found" });
        }
        res.json(vehicles);
    }
    catch (error) {
        console.error('Error fetching vehicles', error);
        res.status(500).json({ error: 'Error fetching vehicles' });
    }
}));
exports.default = router;
