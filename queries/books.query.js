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
const author_1 = require("../models/author");
const book_1 = require("../models/book");
const returnBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(book_1.Book);
    const author = yield author_1.Author.findByPk(id);
    console.log('authr if', author.authorId);
    const books = yield book_1.Book.findAll({ where: { authorId: author.id } });
    // console.log("books",Book);
    console.table(books.map((book) => book.toJSON()));
    // return books;
});
// returnBook(1)
const combinedTable = () => __awaiter(void 0, void 0, void 0, function* () {
    const authBooks = yield author_1.Author.findAll({ include: book_1.Book });
    console.log(authBooks);
    const formattedAuthors = authBooks.map((author) => {
        const authorJSON = author.toJSON();
        return {
            id: authorJSON.id,
            name: authorJSON.name,
            birth_year: authorJSON.birth_year,
            nationality: authorJSON.nationality,
            Books: authorJSON.Books.map((book) => `${book.title} (ID: ${book.id})`).join(', '),
        };
    });
    console.table(formattedAuthors);
    return formattedAuthors;
});
combinedTable();
