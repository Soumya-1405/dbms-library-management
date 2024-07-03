"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
//import sequelize from "../db_connection";
const sequelize_1 = require("sequelize");
const config_1 = require("../db_connection/config");
exports.Author = config_1.sequelize.define("Author", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    birth_year: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    timestamps: false,
});
