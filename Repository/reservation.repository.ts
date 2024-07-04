import { Reservation } from "../models/reservation";
import { Data } from "../staticData/data";
export const insertReservationData = async () => {
    const books = await Reservation.bulkCreate(Data.reservationData);
    console.log("insert successfully");
  };
  