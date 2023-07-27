class Customer {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.username = `customer${data.id}`;
    this.password = "overlook2021";
  }
  getMyBookings(bookings) {
    let myBookings = bookings
      .filter((booking) => booking.userID === this.id)
      .sort((a, b) => {
        if (a.date >= b.date) {
          return -1;
        }
      });

    console.log(myBookings);
    if (myBookings.length > 0) {
      return myBookings;
    } else {
      return `You have not made any bookings.`;
    }
  }
}

export default Customer;
