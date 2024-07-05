import { Loan } from "../models/loan";
import { Data } from "../staticData/data";
export const insertLoansData = async () => {
    const loans = await Loan.bulkCreate(Data.loansData);
    console.log('insert succesfully')
  };
  
  export const getAllLoans = async () => {
    try {
      const authors = await Loan.findAll();
      console.table(authors.map((author: any) => author.toJSON()));
    } catch (error) {
      console.log("error fetchiing authors", error);
    }
  };
  
  export const updateLoan = async (authorId: Number, updatedData: Object) => {
    try {
      const author = await Loan.findByPk(authorId);
      if (author) {
        await author.update(updatedData);
        const authors = await Loan.findAll();
        console.table(authors.map((author: any) => author.toJSON()));
      } else {
        console.log("Loan not Found");
      }
    } catch (error) {
      console.log("error updating data", error);
    }
  };
  
  export const deleteLoan = async (authorId: Number) => {
    try {
      const author = await Loan.findByPk(authorId);
      if (author) {
        await author.destroy();
        const authors = await Loan.findAll();
        console.table(authors.map((author: any) => author.toJSON()));
      } else {
        console.log("Loan not Found");
      }
    } catch (error) {
      console.log("error deleteing data", error);
    }
  };
  