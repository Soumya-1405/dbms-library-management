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
exports.insertAuthorsData = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const data_1 = require("../staticData/data");
const author_1 = require("../models/author");
const insertAuthorsData = () => __awaiter(void 0, void 0, void 0, function* () {
    const authors = yield author_1.Author.bulkCreate(data_1.Data.authorsData);
});
exports.insertAuthorsData = insertAuthorsData;
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all authors include books
        const authors = yield author_1.Author.findAll();
        if (authors.length === 0)
            return res.status(404).json({ message: "No Authors Found" });
        res.json({ Authors: authors });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one author
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield author_1.Author.findByPk(req.params.id);
        if (author === null) {
            return res.status(404).json({ message: "Author Not Found" });
        }
        res.json(author);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new author
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield author_1.Author.create(req.body);
        res.json(author);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update an author
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield author_1.Author.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAuthor = yield author_1.Author.findByPk(req.params.id);
            res.json(updatedAuthor);
        }
        else {
            res.status(404).json({ message: "Author Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete an author
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield author_1.Author.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Author Deleted" });
        }
        else {
            res.status(404).json({ message: "Author Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = router;
