import { Reservation } from "./reservation";

const reservationData = [
  { book_id: 3, member_id: 2, reservation_date: new Date() },
  { book_id: 4, member_id: 1, reservation_date: new Date() },
  { book_id: 5, member_id: 3, reservation_date: new Date() },
  { book_id: 1, member_id: 5, reservation_date: new Date() },
  { book_id: 2, member_id: 4, reservation_date: new Date() },
];

export const insertReservationData = async () => {
  const books = await Reservation.bulkCreate(reservationData);
  console.log("insert successfully");
};

insertReservationData();
