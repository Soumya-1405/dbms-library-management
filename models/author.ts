import sequelize from "../db_connection";
import { DataTypes } from "sequelize";
export const Author = sequelize.define(
    "Author",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      birth_year: {
        type: DataTypes.INTEGER,
      },
      nationality: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    },
    {
      tableName:'Authors'
    }
  
  );
