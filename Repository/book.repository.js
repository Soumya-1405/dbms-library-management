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
exports.insertBooksData = void 0;
const book_1 = require("../models/book");
const data_1 = require("../staticData/data");
const express_1 = __importDefault(require("express"));
const bookRouter = express_1.default.Router();
const insertBooksData = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_1.Book.bulkCreate(data_1.Data.booksData);
    console.log("insert successfully");
});
exports.insertBooksData = insertBooksData;
bookRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all books include books
        const books = yield book_1.Book.findAll();
        if (books.length === 0)
            return res.status(404).json({ message: "No Books Found" });
        res.json({ Authors: books });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one book
bookRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_1.Book.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: "Book Not Found" });
        }
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new book
bookRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_1.Book.create(req.body);
        res.json(book);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update an book
bookRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield book_1.Book.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAuthor = yield book_1.Book.findByPk(req.params.id);
            res.json(updatedAuthor);
        }
        else {
            res.status(404).json({ message: "Book Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete an book
bookRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield book_1.Book.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Book Deleted" });
        }
        else {
            res.status(404).json({ message: "Book Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = bookRouter;
