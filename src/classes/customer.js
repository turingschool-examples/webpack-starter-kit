class Customer {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
  getMyBookings(bookings) {
    let myBookings = bookings.filter((booking) => booking.userID === this.id);
    if (myBookings.length > 0) {
      return myBookings;
    } else {
      return `You have not made any bookings.`;
    }
  }
}

export default Customer;
