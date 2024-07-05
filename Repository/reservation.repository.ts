import { Reservation } from "../models/reservation";
import { Data } from "../staticData/data";
export const insertReservationData = async () => {
    const books = await Reservation.bulkCreate(Data.reservationData);
    console.log("insert successfully");
  };
  
  export const getAllReservations = async () => {
    try {
      const authors = await Reservation.findAll();
      console.table(authors.map((author: any) => author.toJSON()));
    } catch (error) {
      console.log("error fetchiing authors", error);
    }
  };
  
  export const updateReservation = async (authorId: Number, updatedData: Object) => {
    try {
      const author = await Reservation.findByPk(authorId);
      if (author) {
        await author.update(updatedData);
        const authors = await Reservation.findAll();
        console.table(authors.map((author: any) => author.toJSON()));
      } else {
        console.log("Reservation not Found");
      }
    } catch (error) {
      console.log("error updating data", error);
    }
  };
  
  export const deleteReservation = async (authorId: Number) => {
    try {
      const author = await Reservation.findByPk(authorId);
      if (author) {
        await author.destroy();
        const authors = await Reservation.findAll();
        console.table(authors.map((author: any) => author.toJSON()));
      } else {
        console.log("Author not Found");
      }
    } catch (error) {
      console.log("error deleteing data", error);
    }
  };
  