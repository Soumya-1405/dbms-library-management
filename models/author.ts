const sequelize = require("./index.js");
import { DataTypes } from "sequelize";
export const authorModel = (sequelize: any) => {
  return sequelize.define(
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
    }
  );
};
