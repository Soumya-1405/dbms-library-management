const { Sequelize } = require("sequelize");
// import { authorModel } from "../models/author";
import { Book } from "../models/book";
import { Loan } from "../models/loan";
import { Member } from "../models/member";
import { Author } from "../models/author";
// import { userModel } from "../models/user";

const sequelize = new Sequelize("school_db", "postgres", "1405", {
  host: "localhost",
  dialect: "postgres",
  port: 5433,
});

const Connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    // await Author.drop();
    // await Book.drop();
    // await Book.sync({force:true})
    console.log("sync succesfull");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

Connection();
module.exports = Sequelize;
export default sequelize;


