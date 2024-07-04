const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("school_db", "postgres", "1405", {
  host: "localhost",
  dialect: "postgres",
  port: 5433,
  logging: false,
});

const Connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
Connection();
export { sequelize };
