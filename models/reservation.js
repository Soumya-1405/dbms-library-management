"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
var sequelize_1 = require("sequelize");
var db_connection_1 = require("../db_connection");
var book_1 = require("./book");
var member_1 = require("./member");
// import sequelize from "../Configuration/dbConfig"
// import {Books} from './BookModel';
// import { Members } from "./MembersModel";
exports.Reservation = db_connection_1.default.define('Reservation', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    book_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: book_1.Book,
            key: 'id'
        }
    },
    member_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: member_1.Member,
            key: 'id'
        }
    },
    reservation_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Reservation'
});
