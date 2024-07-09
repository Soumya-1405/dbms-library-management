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
exports.insertReservationData = void 0;
const express_1 = __importDefault(require("express"));
const reservationRouter = express_1.default.Router();
const reservation_1 = require("../models/reservation");
const data_1 = require("../staticData/data");
const insertReservationData = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield reservation_1.Reservation.bulkCreate(data_1.Data.reservationData);
    console.log("insert successfully");
});
exports.insertReservationData = insertReservationData;
reservationRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all reservations include books
        const reservations = yield reservation_1.Reservation.findAll();
        if (reservations.length === 0)
            return res.status(404).json({ message: "No Reservations Found" });
        res.json({ Reservations: reservations });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Get one reservation
reservationRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservation = yield reservation_1.Reservation.findByPk(req.params.id);
        if (reservation === null) {
            return res.status(404).json({ message: "Reservation Not Found" });
        }
        res.json(reservation);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Create a new reservation
reservationRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reservation = yield reservation_1.Reservation.create(req.body);
        res.json(reservation);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Update an reservation
reservationRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [updated] = yield reservation_1.Reservation.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedAuthor = yield reservation_1.Reservation.findByPk(req.params.id);
            res.json(updatedAuthor);
        }
        else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// Delete an reservation
reservationRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield reservation_1.Reservation.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.json({ message: "Reservation Deleted" });
        }
        else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
exports.default = reservationRouter;
