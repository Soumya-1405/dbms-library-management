import express from 'express';
const router = express.Router();
import { Data } from "../staticData/data";
import { Author } from "../models/author";
import { sequelize } from "../db_connection/config";
export const insertAuthorsData = async () => {
  const authors = await Author.bulkCreate(Data.authorsData);
};

router.get('/', async (req, res) => {
  try {
      // Fetch all authors include books
      const authors = await Author.findAll();
      if (authors.length === 0) return res.status(404).json({ message: "No Authors Found" });
      res.json({Authors: authors});
  } catch (err:any) {
      res.status(500).json({message: err.message});
  }
});
// Get one author
router.get('/:id', async (req, res) => {
  try {
      const author = await Author.findByPk(req.params.id);
      if (author === null) {
          return res.status(404).json({ message: "Author Not Found" });
      }
      res.json(author);
  } catch (err:any) {
      res.status(500).json({message: err.message});
  }
});

// Create a new author
router.post('/', async (req, res) => {
  try {
      const author = await Author.create(req.body);
      res.json(author);
  } catch (err:any) {
      res.status(400).json({message: err.message});
  }
});

// Update an author
router.put('/:id', async (req, res) => {
  try {
      const [updated] = await Author.update(req.body, {where: {id: req.params.id}});
      if (updated) {
          const updatedAuthor = await Author.findByPk(req.params.id);
          res.json(updatedAuthor);
      } else {
          res.status(404).json({ message: "Author Not Found" });
      }
  } catch (err:any) {
      res.status(400).json({message: err.message});
  }
});
// Delete an author
router.delete('/:id', async (req, res) => {
  try {
      const deleted = await Author.destroy({where: {id: req.params.id}});
      if (deleted) {
          res.json({ message: "Author Deleted" });
      } else {
          res.status(404).json({ message: "Author Not Found" });
      }
  } catch (err:any) {
      res.status(500).json({message: err.message});
  }
});

export default router;