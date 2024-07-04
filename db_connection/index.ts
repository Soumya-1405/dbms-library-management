// const { Sequelize } = require("sequelize");
import { Book } from "../models/bookModel/book";
import { Loan } from "../models/loanModel/loan";
import { Member } from "../models/memberModel/member";
import { Author } from "../models/authorModel/author";
import { Reservation } from "../models/resevationModel/reservation";
import {sequelize} from './config'
import { insertBooksData } from "../models/bookModel/insertData";
import { insertAuthorsData } from "../models/authorModel/insertData";
import { insertLoansData } from "../models/loanModel/insertData";
import { insertMembersData } from "../models/memberModel/insertData";
import { insertReservationData } from "../models/resevationModel/insertData";

const Connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // await Author.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});
    await Book.sync().then(()=>{console.log("hii")}).catch((err:any)=>{console.log("bye")});;
    // await Member.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});;
    // await Loan.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});;
    // await Reservation.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});;
    // await Book.drop()
    console.log("sync succesfull");

    // await Book.truncate();

    // insertAuthorsData()
    // console.log("authorsdata inserted successfully");

    insertBooksData();
    console.log("booksdata inserted successfully");

    // insertMembersData()
    // console.log("memberdata inserted successfully");

    // insertLoansData()
    // console.log("loansdata inserted successfully");
    
    // insertReservationData()
    // console.log("rservationdata inserted successfully");

    

  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

Connection();
export {sequelize};


