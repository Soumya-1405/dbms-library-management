import { Book } from "../models/book";
import { Data } from "../staticData/data";
export const insertBooksData = async () => {
    const books = await Book.bulkCreate(Data.booksData);
    console.log("insert successfully");
  };
  