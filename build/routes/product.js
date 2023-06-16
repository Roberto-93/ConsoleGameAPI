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
const express_validator_1 = require("express-validator");
const utils_1 = require("./utils");
const router = express_1.default.Router();
router.get("/", (0, express_validator_1.body)("category").optional().isString(), utils_1.checkErrors, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logica per ottenere tutti i prodotti
    res.send("GET /products");
}));
router.get("/:id", (0, express_validator_1.param)("id").isMongoId(), utils_1.checkErrors, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logica per ottenere un prodotto per ID
    const { id } = req.params;
    res.send(`GET /products/${id}`);
}));
router.get("/category/:category", (0, express_validator_1.param)("category").isString(), utils_1.checkErrors, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logica per ottenere prodotti per categoria
    const { category } = req.params;
    res.send(`GET /products/category/${category}`);
}));
router.post("/", (0, express_validator_1.body)("category").exists().isString(), (0, express_validator_1.body)("subcategory").exists().isString(), (0, express_validator_1.body)("cost").exists().isNumeric(), (0, express_validator_1.body)("reviews").exists().isString(), utils_1.checkErrors, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logica per creare un nuovo prodotto
    res.send("POST /products");
}));
router.get("/filter", (0, express_validator_1.query)("category").isString(), (0, express_validator_1.query)("subcategory").isString(), (0, express_validator_1.query)("cost").isNumeric(), (0, express_validator_1.query)("rank").isString(), utils_1.checkErrors, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logica per filtrare i prodotti
    res.send("GET /products/filter");
}));
exports.default = router;
