import { Data } from "../staticData/data";
import { Author } from "../models/author";
import { sequelize } from "../db_connection/config";

export const insertAuthorsData = async () => {
  const authors = await Author.bulkCreate(Data.authorsData);
};

export const getAllAuthors = async () => {
  try {
    const authors = await Author.findAll();
    console.table(authors.map((author: any) => author.toJSON()));
  } catch (error) {
    console.log("error fetchiing authors", error);
  }
};

export const updateAuthor = async (authorId: Number, updatedData: Object) => {
  try {
    const author = await Author.findByPk(authorId);
    if (author) {
      await author.update(updatedData);
      const authors = await Author.findAll();
      console.table(authors.map((author: any) => author.toJSON()));
    } else {
      console.log("Author not Found");
    }
  } catch (error) {
    console.log("error updating data", error);
  }
};

export const deleteAuthor = async (authorId: Number) => {
  try {
    const author = await Author.findByPk(authorId);
    if (author) {
      await author.destroy();
      const authors = await Author.findAll();
      console.table(authors.map((author: any) => author.toJSON()));
    } else {
      console.log("Author not Found");
    }
  } catch (error) {
    console.log("error deleteing data", error);
  }
};
