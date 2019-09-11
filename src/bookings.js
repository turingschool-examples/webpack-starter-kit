// Fucks with bookings 
class Bookings {
  constructor(customers, bookings, roomService, rooms, today) {
    this.customers = customers;
    this.bookings = bookings;
    this.roomService = roomService;
    this.rooms = rooms;
    this.today = today;
  }

  module.exports = Bookings;