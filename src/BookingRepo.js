class BookingRepo {
  constructor(data) {
    this.data = data;
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