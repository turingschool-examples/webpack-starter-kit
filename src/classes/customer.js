class Customer {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
  }
  getMyBookings(bookings) {
    let myBookings = bookings.filter((booking) => booking.userID === this.id);
    if (myBookings.length === 0) {
      return `You have not made any bookings.`;
    }
    return myBookings;
  }
}

export default Customer;
