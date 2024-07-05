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
exports.deleteReservation = exports.updateReservation = exports.getAllReservations = exports.insertReservationData = void 0;
const reservation_1 = require("../models/reservation");
const data_1 = require("../staticData/data");
const insertReservationData = () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield reservation_1.Reservation.bulkCreate(data_1.Data.reservationData);
    console.log("insert successfully");
});
exports.insertReservationData = insertReservationData;
const getAllReservations = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const authors = yield reservation_1.Reservation.findAll();
        console.table(authors.map((author) => author.toJSON()));
    }
    catch (error) {
        console.log("error fetchiing authors", error);
    }
});
exports.getAllReservations = getAllReservations;
const updateReservation = (authorId, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield reservation_1.Reservation.findByPk(authorId);
        if (author) {
            yield author.update(updatedData);
            const authors = yield reservation_1.Reservation.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        else {
            console.log("Reservation not Found");
        }
    }
    catch (error) {
        console.log("error updating data", error);
    }
});
exports.updateReservation = updateReservation;
const deleteReservation = (authorId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const author = yield reservation_1.Reservation.findByPk(authorId);
        if (author) {
            yield author.destroy();
            const authors = yield reservation_1.Reservation.findAll();
            console.table(authors.map((author) => author.toJSON()));
        }
        else {
            console.log("Author not Found");
        }
    }
    catch (error) {
        console.log("error deleteing data", error);
    }
});
exports.deleteReservation = deleteReservation;
