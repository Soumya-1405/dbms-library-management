const { Sequelize } = require('sequelize');
// import { userModel } from "./user";
import { User } from "./user";
const Connection = async () => {
  const sequelize = new Sequelize("school_db", "postgres", "1405", {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // User = userModel(sequelize);
    await User.sync({ force: true });
    console.log("The table for the User model was just (re)created!");
    // console.log("The table for the User model was just (re)created!");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

Connection();
module.exports = Sequelize;
export {};
