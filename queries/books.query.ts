import { where } from "sequelize";
import { Author } from "../models/author";
import { Book } from "../models/book";
import { Data } from "../staticData/data";

const returnBook = async(id:number) =>{
    console.log(Book)
    const author = await Author.findByPk(id);
    console.log('authr if', author.authorId);
    const books = await Book.findAll({ where: { authorId: author.id }})
    // console.log("books",Book);
    console.table(books.map((book:any)=> book.toJSON()));

}
returnBook(1)


const combinedTable = async() => {
    const authBooks = await Author.findAll({include:Book})
    console.log(authBooks)
    const formattedAuthors = authBooks.map((author:any) => {
        const authorJSON = author.toJSON();
        return {
          id: authorJSON.id,
          name: authorJSON.name,
          birth_year: authorJSON.birth_year,
          nationality: authorJSON.nationality,
          Books: authorJSON.Books.map((book:any) => `${book.title} (ID: ${book.id})`).join(', '),
        };
      });
    console.table(formattedAuthors)
    return formattedAuthors;
}
 combinedTable();