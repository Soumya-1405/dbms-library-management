const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("school_db", "postgres", "1405", {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
    logging:false
  });
  
export {sequelize}