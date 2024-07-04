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
    book_id:{
      type: DataTypes.INTEGER,
      references: {
          model: Book,
          key: 'id'
      }
    },
    member_id: {
      type: DataTypes.INTEGER,
      references: {
          model: Member,
          key: 'id'
      }
    },
    loan_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
);

Book.hasMany(Loan,{foreignKey:"book_id"});
Loan.belongsTo(Book,{foreignKey:"book_id"})

Member.hasMany(Loan,{foreignKey:"member_id"});
Loan.belongsTo(Member,{foreignKey:"member_id"});
