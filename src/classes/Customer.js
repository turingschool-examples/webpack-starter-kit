import bookingsSample from "../data/bookings-sample";

class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
  }

  getCustomerBookings(bookings) {
    return bookings.filter(booking => booking.userID === this.id);
  }
}

export default Customer;