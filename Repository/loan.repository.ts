import { Loan } from "../models/loan";
import { Data } from "../staticData/data";
export const insertLoansData = async () => {
    const loans = await Loan.bulkCreate(Data.loansData);
    console.log('insert succesfully')
  };
  