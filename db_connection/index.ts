// const { Sequelize } = require("sequelize");
import { Book } from "../models/bookModel/book";
import { Loan } from "../models/loanModel/loan";
import { Member } from "../models/memberModel/member";
import { Author } from "../models/authorModel/author";
import { Reservation } from "../models/resevationModel/reservation";
import {sequelize} from './config'
// const sequelize = new Sequelize("school_db", "postgres", "1405", {
//   host: "localhost",
//   dialect: "postgres",
//   port: 5433,
// });

const Connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await Author.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});
    await Book.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});;
    await Member.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});;
    await Loan.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});;
    await Reservation.sync().then(()=>{console.log("hiii")}).catch((err:any)=>{console.log("bye")});;
    console.log("sync succesfull");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

Connection();
export {sequelize};


