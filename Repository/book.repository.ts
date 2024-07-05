import { Book } from "../models/book";
import { Data } from "../staticData/data";

export const insertBooksData = async () => {
    const books = await Book.bulkCreate(Data.booksData);
    console.log("insert successfully");
  };
  
  export const getAllBooks = async () => {
    try {
      const authors = await Book.findAll();
      console.table(authors.map((author: any) => author.toJSON()));
    } catch (error) {
      console.log("error fetchiing authors", error);
    }
  };
  
  export const updateBook = async (authorId: Number, updatedData: Object) => {
    try {
      const author = await Book.findByPk(authorId);
      if (author) {
        await author.update(updatedData);
        const authors = await Book.findAll();
        console.table(authors.map((author: any) => author.toJSON()));
      } else {
        console.log( "Book not Found");
      }
    } catch (error) {
      console.log("error updating data", error);
    }
  };
  
  export const deleteBook = async (authorId: Number) => {
    try {
      const author = await Book.findByPk(authorId);
      if (author) {
        await author.destroy();
        const authors = await Book.findAll();
        console.table(authors.map((author: any) => author.toJSON()));
      } else {
        console.log("Book not Found");
      }
    } catch (error) {
      console.log("error deleteing data", error);
    }
  };
  