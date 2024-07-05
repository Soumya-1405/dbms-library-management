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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getAllBooks = exports.insertBooksData = void 0;
const book_1 = require("../models/book");
const data_1 = require("../staticData/data");
const insertBooksData = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield book_1.Book.bulkCreate(data_1.Data.booksData);
    console.log("insert successfully");
});
exports.insertBooksData = insertBooksData;
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield book_1.Book.findAll();
        console.table(authors.map((author) => author.toJSON()));
    }
    catch (error) {
        console.log("error fetchiing authors", error);
    }
});
exports.getAllBooks = getAllBooks;
const updateBook = (authorId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield book_1.Book.findByPk(authorId);
        if (author) {
            yield author.update(updatedData);
            const authors = yield book_1.Book.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        else {
            console.log("Book not Found");
        }
    }
    catch (error) {
        console.log("error updating data", error);
    }
});
exports.updateBook = updateBook;
const deleteBook = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield book_1.Book.findByPk(authorId);
        if (author) {
            yield author.destroy();
            const authors = yield book_1.Book.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        else {
            console.log("Book not Found");
        }
    }
    catch (error) {
        console.log("error deleteing data", error);
    }
});
exports.deleteBook = deleteBook;
