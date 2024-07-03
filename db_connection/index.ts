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
    // await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await Author.drop();
    // await sequelize.sync({ force: true });
    // await Book.drop();
    // await Loan.sync({force:true})
    console.log("sync succesfull");
    // await authorModel(sequelize).sync({ force: true });
    // console.log("hellooo");
    // await Loan.sync({ force: true });

    // const users = await bookModel(sequelize).bulkCreate(data);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

Connection();
module.exports = Sequelize;
export default sequelize;

export function define(arg0: string, arg1: {
  id: { type: import("sequelize").IntegerDataTypeConstructor; allowNull: boolean; autoIncrement: boolean; primaryKey: boolean; }; title: { type: import("sequelize").StringDataTypeConstructor; }; authorId: { type: import("sequelize").IntegerDataTypeConstructor; }; genre: { type: import("sequelize").StringDataTypeConstructor; }; isbn: { // await authorModel(sequelize).sync({ force: true });
    // console.log("hellooo");
    // await Loan.sync({ force: true });
    // const users = await bookModel(sequelize).bulkCreate(data);
    type: import("sequelize").StringDataTypeConstructor;
  }; publication_year: { type: import("sequelize").IntegerDataTypeConstructor; };
}, arg2: { timestamps: boolean; }, arg3: { tableName: string; }) {
  throw new Error("Function not implemented.");
}
// export {};
