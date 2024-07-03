// import sequelize from "../db_connection/index";
import { Sequelize, DataTypes } from "sequelize";


import {sequelize} from '../db_connection/config'

export const Book = sequelize.define(
        'Book',
        {
          id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
          },
          title: {
            type: DataTypes.STRING,
          },
          authorId:{
            type: DataTypes.INTEGER,
            // references: 'Authors',
            // referencesKey: 'id'
          },
          genre:{
            type: DataTypes.STRING,
          },
          isbn:{
            type: DataTypes.STRING,
          },
          publication_year:{
            type: DataTypes.INTEGER,
          }
        },
        {
          timestamps: false,
          tableName:'Books'
        }
      );
