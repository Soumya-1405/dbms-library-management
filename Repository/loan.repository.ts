import { Loan } from "../models/loan";
import { Data } from "../staticData/data";
import express from 'express';
const loanRouter = express.Router();
export const insertLoansData = async () => {
    const loans = await Loan.bulkCreate(Data.loansData);
    console.log('insert succesfully')
  };
  insertLoansData()
  
  loanRouter.get('/', async (req, res) => {
    try {
        // Fetch all loans include books
        const loans = await Loan.findAll();
        if (loans.length === 0) return res.status(404).json({ message: "No loans Found" });
        res.json({Loans: loans});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  // Get one loan
  loanRouter.get('/:id', async (req, res) => {
    try {
        const loan = await Loan.findByPk(req.params.id);
        if (loan === null) {
            return res.status(404).json({ message: "Loan Not Found" });
        }
        res.json(loan);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  
  // Create a new loan
  loanRouter.post('/', async (req, res) => {
    try {
        const loan = await Loan.create(req.body);
        res.json(loan);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
  });
  
  // Update an loan
  loanRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Loan.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await Loan.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
  });
  // Delete an loan
  loanRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Loan.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Loan Deleted" });
        } else {
            res.status(404).json({ message: "Loan Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  
  export default loanRouter;