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
exports.deleteLoan = exports.updateLoan = exports.getAllLoans = exports.insertLoansData = void 0;
const loan_1 = require("../models/loan");
const data_1 = require("../staticData/data");
const insertLoansData = () => __awaiter(void 0, void 0, void 0, function* () {
    const loans = yield loan_1.Loan.bulkCreate(data_1.Data.loansData);
    console.log('insert succesfully');
});
exports.insertLoansData = insertLoansData;
const getAllLoans = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield loan_1.Loan.findAll();
        console.table(authors.map((author) => author.toJSON()));
    }
    catch (error) {
        console.log("error fetchiing authors", error);
    }
});
exports.getAllLoans = getAllLoans;
const updateLoan = (authorId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield loan_1.Loan.findByPk(authorId);
        if (author) {
            yield author.update(updatedData);
            const authors = yield loan_1.Loan.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        else {
            console.log("Loan not Found");
        }
    }
    catch (error) {
        console.log("error updating data", error);
    }
});
exports.updateLoan = updateLoan;
const deleteLoan = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield loan_1.Loan.findByPk(authorId);
        if (author) {
            yield author.destroy();
            const authors = yield loan_1.Loan.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        else {
            console.log("Loan not Found");
        }
    }
    catch (error) {
        console.log("error deleteing data", error);
    }
});
exports.deleteLoan = deleteLoan;
