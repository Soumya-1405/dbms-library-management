import express from 'express';
const reservationRouter = express.Router();
import { Reservation } from "../models/reservation";
import { Data } from "../staticData/data";
export const insertReservationData = async () => {
    const books = await Reservation.bulkCreate(Data.reservationData);
    console.log("insert successfully");
  };
  
  reservationRouter.get('/', async (req, res) => {
    try {
        // Fetch all reservations include books
        const reservations = await Reservation.findAll();
        if (reservations.length === 0) return res.status(404).json({ message: "No Reservations Found" });
        res.json({Reservations: reservations});
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  // Get one reservation
  reservationRouter.get('/:id', async (req, res) => {
    try {
        const reservation = await Reservation.findByPk(req.params.id);
        if (reservation === null) {
            return res.status(404).json({ message: "Reservation Not Found" });
        }
        res.json(reservation);
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  
  // Create a new reservation
  reservationRouter.post('/', async (req, res) => {
    try {
        const reservation = await Reservation.create(req.body);
        res.json(reservation);
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
  });
  
  // Update an reservation
  reservationRouter.put('/:id', async (req, res) => {
    try {
        const [updated] = await Reservation.update(req.body, {where: {id: req.params.id}});
        if (updated) {
            const updatedAuthor = await Reservation.findByPk(req.params.id);
            res.json(updatedAuthor);
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err:any) {
        res.status(400).json({message: err.message});
    }
  });
  // Delete an reservation
  reservationRouter.delete('/:id', async (req, res) => {
    try {
        const deleted = await Reservation.destroy({where: {id: req.params.id}});
        if (deleted) {
            res.json({ message: "Reservation Deleted" });
        } else {
            res.status(404).json({ message: "Reservation Not Found" });
        }
    } catch (err:any) {
        res.status(500).json({message: err.message});
    }
  });
  
  export default reservationRouter;