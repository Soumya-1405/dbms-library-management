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
exports.deleteMember = exports.updateMember = exports.getAllMembers = exports.insertMembersData = void 0;
const member_1 = require("../models/member");
const data_1 = require("../staticData/data");
const insertMembersData = () => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield member_1.Member.bulkCreate(data_1.Data.memberData);
    console.log("insert succesffullt");
});
exports.insertMembersData = insertMembersData;
const getAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield member_1.Member.findAll();
        console.table(authors.map((author) => author.toJSON()));
    }
    catch (error) {
        console.log("error fetchiing authors", error);
    }
});
exports.getAllMembers = getAllMembers;
const updateMember = (authorId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield member_1.Member.findByPk(authorId);
        if (author) {
            yield author.update(updatedData);
            const authors = yield member_1.Member.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        else {
            console.log("Member not Found");
        }
    }
    catch (error) {
        console.log("error updating data", error);
    }
});
exports.updateMember = updateMember;
const deleteMember = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield member_1.Member.findByPk(authorId);
        if (author) {
            yield author.destroy();
            const authors = yield member_1.Member.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        else {
            console.log("Member not Found");
        }
    }
    catch (error) {
        console.log("error deleteing data", error);
    }
});
exports.deleteMember = deleteMember;
