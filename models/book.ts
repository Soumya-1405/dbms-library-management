const sequelize = require('./index.js');
import { DataTypes } from "sequelize";
export const bookModel = (sequelize:any) => {
    return sequelize.define(
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
        },
      );
}