import Room from "./room";
import Booking from "./booking";
import Customer from "./customer";

class Hotel {
  constructor(roomData, bookingData) {
    this.allRooms = this.createRooms(roomData);
    this.allBookings = this.createBookings(bookingData);
    this.availableRooms = [];
  }
  createRooms(roomData) {
    this.allRooms = roomData.map((room) => new Room(room));
    return this.allRooms;
  }
  createBookings(bookingData) {
    this.allBookings = bookingData.map((details) => new Booking(details));
    return this.allBookings;
  }
  findCustomerBookings(currentUser) {
    return currentUser.getMyBookings(this.allBookings);
  }
  findCustomerBookingExpenses(currentUser) {
    let myRooms = currentUser.getMyBookings(this.allBookings);
    if (myRooms === "You have not made any bookings.") {
      return myRooms;
    }
    myRooms = myRooms.map((room) => room.roomNumber);
    return myRooms.reduce((acc, current) => {
      let room = this.filterByRoomNumber(current);
      acc = acc + room.costPerNight;
      return acc;
    }, 0);
  }

  findAvailableRooms(date) {
    this.availableRooms = [];
    const bookedRooms = this.findBookedRoomNumber(date);
    this.availableRooms = this.rooms.filter(
      (room) => !bookedRooms.includes(room.number)
    );
  }

  findAvailableRooms(currentUser, day, month, year, data = this.allBookings) {
    const dayChosen = currentUser.chooseADate(day, month, year);
    const bookedRooms = data
      .filter((booking) => dayChosen === booking.date)
      .map((room) => room.roomNumber);
    this.availableRooms = this.allRooms.filter(
      (room) => !bookedRooms.includes(room.number)
    );
    console.log(this.availableRooms);
    return this.availableRooms;
  }

  filterByRoomType(roomType) {
    const roomsFound = this.allRooms.filter(
      (room) => room.roomType === roomType.toLowerCase()
    );
    if (roomsFound.length === 0) {
      return `We apologize! No "${roomType}" rooms were found at the hotel.`;
    }
    return roomsFound;
  }
  filterByRoomNumber(number, dataSet = this.allRooms) {
    return dataSet.find((room) => room.number === number);
  }

  filterByBedNumber(number, dataSet = this.allRooms) {
    return dataSet.filter((room) => room.numBeds === number);
  }

  createNewBooking(currentUser, roomNumber, date) {
    const newBooking = new Object();
    newBooking.userID = currentUser.id;
    newBooking.date = date;
    newBooking.roomNumber = roomNumber;
    return newBooking;
  }
}

export default Hotel;
