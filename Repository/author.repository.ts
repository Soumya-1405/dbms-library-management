import { Data } from "../staticData/data";
import { Author } from "../models/author";
import { sequelize} from "../db_connection/config";
export const insertAuthorsData = async () => {
  const books = await Author.bulkCreate(Data.authorsData);
};