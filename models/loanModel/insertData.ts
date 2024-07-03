import { title } from "process";
import { sequelize } from "../../db_connection";
import { Loan } from "./loan";
import { DataTypes } from "sequelize";

const loansData = [
  {
    id: 1,
    member_id: 2,
    // loan_date: 2,
    // due_date: "gen1",
  },
  {
    id: 2,
    member_id: 3,
    // loan_date: Dat,
    // due_date: "gen2",
  },
  {
    id: 3,
    member_id: 4,
    // loan_date: 4,
    // due_date: "gen3",
  },
  {
    id: 4,
    member_id: 5,
    // loan_date: 5,
    // due_date: "gen4",
  },
  {
    id: 5,
    member_id: 1,
    // loan_date: 1,
    // due_date: "gen5"
  },
];

export const insertLoansData = async () => {
  const books = await Loan.bulkCreate(loansData);
};
