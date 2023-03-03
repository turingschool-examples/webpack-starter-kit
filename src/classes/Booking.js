class Booking {
  constructor(booking) {
    this.id = booking.id;
    this.userID = booking.userID;
    this.date = booking.date;
    this.roomNumber = booking.roomNumber;
  }

  getRoom(rooms) {
    return rooms.find(room => room.number === this.roomNumber);
  }
}

export default Booking;