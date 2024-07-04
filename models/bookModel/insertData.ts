import { title } from "process";
import { sequelize } from "../../db_connection";
import { Book } from "./book";

const booksData = [
  {
    title: "book1",
    authoId: 2,
    genre: "gen1",
    isbn: "isbn1",
    publication_year: 2000,
  },
  {
    title: "book2",
    authoId: 3,
    genre: "gen2",
    isbn: "isbn2",
    publication_year: 2001,
  },
  {
    title: "book3",
    authoId: 4,
    genre: "gen3",
    isbn: "isbn3",
    publication_year: 2002,
  },
  {
    title: "book4",
    authoId: 5,
    genre: "gen4",
    isbn: "isbn4",
    publication_year: 2003,
  },
  {
    title: "book5",
    authoId: 1,
    genre: "gen5",
    isbn: "isbn5",
    publication_year: 2004,
  },
];

export const insertBooksData = async () => {
  const books = await Book.bulkCreate(booksData);
  console.log("insert successfully");
};
