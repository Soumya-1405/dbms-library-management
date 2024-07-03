import { title } from "process";
import { sequelize } from "../../db_connection";
import { Author } from "./author";

const authorsData = [
  {
    id: 1,
    name: "author1",
    authoId: 2,
    birth_year: "2001",
    nationality: "india",
  },
  {
    id: 2,
    name: "author2",
    authoId: 3,
    birth_year: "2002",
    nationality: "china",
  },
  {
    id: 3,
    name: "author3",
    authoId: 4,
    birth_year: "2003",
    nationality: "USA",
  },
  {
    id: 4,
    name: "author4",
    authoId: 5,
    birth_year: "2004",
    nationality: "austrelia",
  },
  {
    id: 5,
    name: "author5",
    authoId: 1,
    birth_year: "2005",
    nationality: "japan",
  },
];

export const insertAuthorsData = async () => {
  const books = await Author.bulkCreate(authorsData);
};
