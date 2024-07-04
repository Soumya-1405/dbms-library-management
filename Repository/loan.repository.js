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
exports.insertLoansData = void 0;
const loan_1 = require("../models/loan");
const data_1 = require("../staticData/data");
const insertLoansData = () => __awaiter(void 0, void 0, void 0, function* () {
    const loans = yield loan_1.Loan.bulkCreate(data_1.Data.loansData);
    console.log('insert succesfully');
});
exports.insertLoansData = insertLoansData;
