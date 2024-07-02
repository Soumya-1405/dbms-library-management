const { Sequelize } = require("sequelize");
import { authorModel } from "./author";
import { bookModel } from "./book";
import { userModel } from "./user";
const data = [
  { firstName: "soumya", lastName: "katta" },
  { firstName: "sakshi", lastName: "katta" },
  { firstName: "tej", lastName: "lalugani" },
  { firstName: "kiya", lastName: "bejjarapu" },
  { firstName: "sumith", lastName: "bejjarapu" },
];
const Connection = async () => {
  const sequelize = new Sequelize("school_db", "postgres", "1405", {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await bookModel(sequelize).sync({ force: true });
    console.log("The table for the User model was just (re)created!");
    await authorModel(sequelize).sync({ force: true });
    console.log("hellooo");
    
    // const users = await bookModel(sequelize).bulkCreate(data);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

Connection();
module.exports = Sequelize;
export {};
