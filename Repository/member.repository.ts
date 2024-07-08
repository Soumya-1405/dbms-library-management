import express from 'express';
const memberRouter = express.Router();
import { Member } from "../models/member";
import { Data } from "../staticData/data";
export const insertMembersData = async () => {
    const member = await Member.bulkCreate(Data.memberData);
    console.log("insert succesffullt");
  };

  memberRouter.get('/', async (req, res) => {
    try {
        // Fetch all members include books
        const members = await Member.findAll();
        if (members.length === 0) return res.status(404).json({ message: "No Authors Found" });
        res.json({Authors: members});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  // Get one member
  memberRouter.get('/:id', async (req, res) => {
    try {
        const member = await Member.findByPk(req.params.id);
        if (member === null) {
            return res.status(404).json({ message: "Member Not Found" });
        }
        res.json(member);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  
  // Create a new member
  memberRouter.post('/', async (req, res) => {
    try {
        const member = await Member.create(req.body);
        res.json(member);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
  });
  
  // Update an member
  memberRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Member.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await Member.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
  });
  // Delete an member
  memberRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Member.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Member Deleted" });
        } else {
            res.status(404).json({ message: "Member Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  
  export default memberRouter;