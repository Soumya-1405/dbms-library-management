// const sequelize = require("./index.js");
import { Sequelize,Model,DataTypes } from "sequelize";
import { Member } from "../memberModel/member";
import { Book } from "../bookModel/book";

import {sequelize} from '../../db_connection/config'
export const Loan = sequelize.define(
  "Loan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    }, 
    member_id: {
      type: DataTypes.INTEGER,
      references: {
          model: Member,
          key: 'id'
      }
    },
    loan_date: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    due_date: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
  },
  {
    tableName:'Loan'
  },
);
