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
exports.insertLoansData = void 0;
const loan_1 = require("../models/loan");
const data_1 = require("../staticData/data");
const express_1 = __importDefault(require("express"));
const loanRouter = express_1.default.Router();
const insertLoansData = () => __awaiter(void 0, void 0, void 0, function* () {
    const loans = yield loan_1.Loan.bulkCreate(data_1.Data.loansData);
    console.log('insert succesfully');
});
exports.insertLoansData = insertLoansData;
(0, exports.insertLoansData)();
loanRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all loans include books
        const loans = yield loan_1.Loan.findAll();
        if (loans.length === 0)
            return res.status(404).json({ message: "No loans Found" });
        res.json({ Loans: loans });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one loan
loanRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = yield loan_1.Loan.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "Loan Not Found" });
        }
        res.json(loan);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new loan
loanRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loan = yield loan_1.Loan.create(req.body);
        res.json(loan);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update an loan
loanRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield loan_1.Loan.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAuthor = yield loan_1.Loan.findByPk(req.params.id);
            res.json(updatedAuthor);
        }
        else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete an loan
loanRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield loan_1.Loan.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Loan Deleted" });
        }
        else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = loanRouter;
