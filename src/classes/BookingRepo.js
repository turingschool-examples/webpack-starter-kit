import Booking from "./Booking";

class BookingRepo {
  constructor(bookings) {
    this.bookings = bookings.map(booking => new Booking(booking));
  }

  getVacancies(date, rooms, type) {
    if (date.includes('-')) {
      date = date.replace(/\-/g, '/');
    }

    const dateBookings = this.bookings.filter(booking => {
      return booking.date === date;
    });

    let vacancies = [];
    rooms.forEach(room => {
      if (!dateBookings.some(booking => booking.roomNumber === room.number)) {
        vacancies.push(room);
      }
    });

    if (type === 'any') {
      return vacancies;
    } else {
      type = type.replace(/\-/, ' ');
      return vacancies.filter(room => room.roomType === type);
    }
  }
}

export default BookingRepo