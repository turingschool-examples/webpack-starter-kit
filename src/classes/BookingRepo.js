import Booking from "./Booking";

class BookingRepo {
  constructor(bookings) {
    this.bookings = bookings.map(booking => new Booking(booking));
  }

  getVacancies(date, rooms) {
    const dateBookings = this.bookings.filter(booking => {
      return booking.date === date;
    });

    let vacancies = [];
    rooms.forEach(room => {
      if (!dateBookings.some(booking => booking.roomNumber === room.number)) {
        vacancies.push(room);
      }
    });

    return vacancies;
  }
}

export default BookingRepo