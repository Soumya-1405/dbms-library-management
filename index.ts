import { sequelize } from "./db_connection/config";
import router from "./Repository/author.repository";
import bookRouter from "./Repository/book.repository";
import loanRouter from "./Repository/loan.repository";
import { Book } from "./models/book";
import { Loan } from "./models/loan";
import { Member } from "./models/member";
import { Author } from "./models/author";
import { Reservation } from "./models/reservation";
// import { getAllBooks, insertBooksData } from "./Repository/book.repository";
// import { deleteAuthor, getAllAuthors, insertAuthorsData, updateAuthor } from "./Repository/author.repository";
import express from 'express';
const app = express();
// import { deleteMember, getAllMembers, insertMembersData, updateMember } from "./Repository/member.repository";
// import { deleteLoan, getAllLoans, insertLoansData, updateLoan } from "./Repository/loan.repository";
import { deleteReservation, getAllReservations, insertReservationData, updateReservation } from "./Repository/reservation.repository";
import memberRouter from "./Repository/member.repository";
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded requests
app.use(express.json()); // Middleware to parse JSON requests

async function initializeDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  
    await sequelize.sync({alter: true});
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database or sync models:', error);
  }
}

// To verify that the tables were created successfully
async function listTables() {
  try {
    const tables = await sequelize.getQueryInterface().showAllSchemas();
    console.log(tables);
  } catch (error) {
    console.error('Error listing tables:', error);
  }
}

initializeDatabase().then(() => { listTables(); });

// Ping route
app.use('/api/pong', ((req, res) => {  
  res.json({ message: 'pong' });
}));

app.use('/api/authors',router);
app.use('/api/books',bookRouter)
app.use('/api/loans',loanRouter)
app.use('/api/members',memberRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});