"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var sequelize = require("../db_connection");
var sequelize_1 = require("sequelize");
exports.Book = sequelize.define('Book', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    authorId: {
        type: sequelize_1.DataTypes.INTEGER,
        // references: 'Authors',
        // referencesKey: 'id'
    },
    genre: {
        type: sequelize_1.DataTypes.STRING,
    },
    isbn: {
        type: sequelize_1.DataTypes.STRING,
    },
    publication_year: {
        type: sequelize_1.DataTypes.INTEGER,
    }
}, {
    timestamps: false,
}, {
    tableName: 'Books'
});
