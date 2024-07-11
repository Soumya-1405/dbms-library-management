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
const loan_1 = require("../models/loan");
const member_1 = require("../models/member");
const getAllLoans = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield member_1.Member.findByPk(id);
    const loans = yield loan_1.Loan.findAll({ where: { member_id: member.id } });
    console.table("loans", loans);
});
getAllLoans(2);
