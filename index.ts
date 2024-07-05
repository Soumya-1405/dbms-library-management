import { sequelize } from "./db_connection/config";
import { Book } from "./models/book";
import { Loan } from "./models/loan";
import { Member } from "./models/member";
import { Author } from "./models/author";
import { Reservation } from "./models/reservation";
import { getAllBooks, insertBooksData } from "./Repository/book.repository";
import { deleteAuthor, getAllAuthors, insertAuthorsData, updateAuthor } from "./Repository/author.repository";
import { deleteMember, getAllMembers, insertMembersData, updateMember } from "./Repository/member.repository";
import { deleteLoan, getAllLoans, insertLoansData, updateLoan } from "./Repository/loan.repository";
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
    getAllBooks();
    console.log("get all books")
    updateAuthor(2,{title:"book3", genre: "gen8", isbn: "isbn8", publication_year: 2007});
    console.log("updated")

    insertMembersData();
    console.log("memberdata inserted successfully");
    getAllMembers()
    console.log("get all member")
    updateMember(4,{name:"guru", address:"add8", phone_number: "08356782899", email:"guru@example.com"})
    console.log("updated")
    deleteMember(4);
    console.log("deleted");

    insertLoansData();
    console.log("loansdata inserted successfully");
    getAllLoans();
    console.log("get all loans");
    updateLoan(1,{book_id:1, member_id:2, loan_date: new Date(), due_date:new Date(new Date().setDate(new Date().getDate() + 14))});
    console.log("updated")
    deleteLoan(1)
    console.log("deleted");


    insertReservationData();
    console.log("rservationdata inserted successfully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

createTabless();
export { sequelize };
