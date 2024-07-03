// const { Sequelize } = require("sequelize");
import { Book } from "../models/book";
import { Loan } from "../models/loan";
import { Member } from "../models/member";
import { Author } from "../models/author";
import { Reservation } from "../models/reservation";
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
    await sequelize.sync({ force: true });
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


