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
exports.insertMembersData = void 0;
const express_1 = __importDefault(require("express"));
const memberRouter = express_1.default.Router();
const member_1 = require("../models/member");
const data_1 = require("../staticData/data");
const insertMembersData = () => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield member_1.Member.bulkCreate(data_1.Data.memberData);
    console.log("insert succesffullt");
});
exports.insertMembersData = insertMembersData;
memberRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all members include books
        const members = yield member_1.Member.findAll();
        if (members.length === 0)
            return res.status(404).json({ message: "No Authors Found" });
        res.json({ Authors: members });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one member
memberRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield member_1.Member.findByPk(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json(member);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new member
memberRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield member_1.Member.create(req.body);
        res.json(member);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update an member
memberRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield member_1.Member.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAuthor = yield member_1.Member.findByPk(req.params.id);
            res.json(updatedAuthor);
        }
        else {
            res.status(404).json({ message: "Member Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete an member
memberRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield member_1.Member.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Member Deleted" });
        }
        else {
            res.status(404).json({ message: "Member Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = memberRouter;
