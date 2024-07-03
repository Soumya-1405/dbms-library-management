"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
const sequelize_1 = require("sequelize");
// import sequelize from "../db_connection/index";
const book_1 = require("./book");
const config_1 = require("../db_connection/config");
exports.Reservation = config_1.sequelize.define('Reservation', {
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
        // references: {
        //     model: Member,
        //     key: 'id'
        // }
    },
    reservation_date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: 'Reservation'
});
