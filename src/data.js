import Booking from "./bookings";

class Data {
  constructor(booking, service, room, customer) {
    this.bookingData = booking;
    this.serviceData = service;
    this.roomData = room;
    this.customerData = customer;
  }

  addCustomer(name) {
    let id = this.customerData.length + 1
    this.customerData.push({id, name})
  }
}

export default Data;