import bookingsSample from "../data/bookings-sample";

class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
  }

  getCustomerBookings(bookings) {
    return bookings.filter(booking => booking.userID === this.id);
  }

  getRoomToBook(date, roomNumber) {
    if (date.includes('-')) {
      date = date.replace(/\-/g, '/');
    }
    
    return {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    }
  }
}

export default Customer;