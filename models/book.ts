// import sequelize from "../db_connection/index";
import { Sequelize, DataTypes } from "sequelize";
import { Author } from "./author";

import {sequelize} from '../db_connection/config'
import { table } from "console";

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
            references: {
              model: Author,
              key: 'id'
          }
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
          tableName: 'Books',
          indexes: [
            // Create a unique index on title feild
            {
              unique: true,
              fields: ['title'],
            },
          ]
        }
      );

      Author.hasMany(Book,{foreignKey:'authorId'});
      Book.belongsTo(Author,{foreignKey:'authorId'});

