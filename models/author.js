"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorModel = void 0;
var sequelize = require("./index.js");
var sequelize_1 = require("sequelize");
var authorModel = function (sequelize) {
    return sequelize.define("Author", {
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
};
exports.authorModel = authorModel;
