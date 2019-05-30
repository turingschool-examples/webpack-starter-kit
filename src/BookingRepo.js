import Booking from "./Booking";

class BookingRepo {
  constructor(data) {
    this.data = data;
  }

  returnBooking(id) {
    const userBookingData = this.data.bookings.filter(booking => booking.userID === id);
    return new Booking(userBookingData);
  }

  returnModeBookingDate() {
    const dateTally = this.data.bookings.reduce((final, booking) => {
      !final[booking.date] ? final[booking.date] = 1 : final[booking.date]++;
      return final;
    }, {});
    return Object.keys(dateTally).find(date => dateTally[date] === Math.max(...Object.values(dateTally)));
  }
}

export default BookingRepo;