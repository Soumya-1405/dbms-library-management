"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
var db_connection_1 = require("../db_connection");
var sequelize_1 = require("sequelize");
exports.Author = db_connection_1.default.define("Author", {
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
}, {
    tableName: 'Authors'
});
