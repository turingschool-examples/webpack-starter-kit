// Fucks with the customer
class Customer {
  constructor(id, name, userBookings = [], userRoomServices = [], userRooms = [], menu, date) {
    this.id = id;
    this.name = name;
    this.bookings = userBookings;
    this.roomService = userRoomServices;
    this.rooms = userRooms;
    this.menu = menu;
    this.date = date;
    this.currentDish;
    this.currentPrice;
  }
}

  module.exports = Customer;