import { sequelize } from "./db_connection/config";
import { Book } from "./models/book";
import { Loan } from "./models/loan";
import { Member } from "./models/member";
import { Author } from "./models/author";
import { Reservation } from "./models/reservation";
import { insertBooksData } from "./Repository/book.repository";
import { deleteAuthor, getAllAuthors, insertAuthorsData, updateAuthor } from "./Repository/author.repository";
import { insertMembersData } from "./Repository/member.repository";
import { insertLoansData } from "./Repository/loan.repository";
import { insertReservationData } from "./Repository/reservation.repository";

const createTabless = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await Author.sync({ force: true })
      .then(() => {
        console.log("hiii");
      })
      .catch((err: any) => {
        console.log("bye");
      });
    await Book.sync({ force: true })
      .then(() => {
        console.log("hii");
      })
      .catch((err: any) => {
        console.log("bye");
      });
    await Member.sync({ force: true })
      .then(() => {
        console.log("hiii");
      })
      .catch((err: any) => {
        console.log("bye");
      });
    await Loan.sync({ force: true })
      .then(() => {
        console.log("hiii");
      })
      .catch((err: any) => {
        console.log("bye");
      });
    await Reservation.sync({ force: true })
      .then(() => {
        console.log("hiii");
      })
      .catch((err: any) => {
        console.log("bye");
      });
    // await Reservation.drop()
    console.log("sync succesfull");

    insertAuthorsData();
    console.log("authorsdata inserted successfully");
    getAllAuthors();
    console.log("get all authors ")
    updateAuthor(1, {name:"author8",birth_year:2001, nationality:"india"})
    console.log("updated")
    deleteAuthor(1)
    console.log("deleted");

    insertBooksData();
    console.log("booksdata inserted successfully");

    insertMembersData();
    console.log("memberdata inserted successfully");

    insertLoansData();
    console.log("loansdata inserted successfully");

    insertReservationData();
    console.log("rservationdata inserted successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

createTabless();
export { sequelize };
