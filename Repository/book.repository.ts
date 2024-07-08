import { Book } from "../models/book";
import { Data } from "../staticData/data";
import express from 'express';
const bookRouter = express.Router();
export const insertBooksData = async () => {
    const books = await Book.bulkCreate(Data.booksData);
    console.log("insert successfully");
  };
  
  bookRouter.get('/', async (req, res) => {
    try {
        // Fetch all books include books
        const books = await Book.findAll();
        if (books.length === 0) return res.status(404).json({ message: "No Books Found" });
        res.json({Authors: books});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  // Get one book
  bookRouter.get('/:id', async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: "Book Not Found" });
        }
        res.json(book);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  
  // Create a new book
  bookRouter.post('/', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.json(book);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
  });
  
  // Update an book
  bookRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Book.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await Book.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
  });
  // Delete an book
  bookRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Book.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Book Deleted" });
        } else {
            res.status(404).json({ message: "Book Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  
  export default bookRouter;