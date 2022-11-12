import Room from "./room";
import Booking from "./booking";
import Customer from "./customer";

class Hotel {
  constructor(roomData, bookingData) {
    this.allRooms = this.createRooms(roomData);
    this.allBookings = this.createBookings(bookingData);
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
  findAvailableRooms(currentUser, day, month, year) {
    const dayChosen = currentUser.chooseADate(day, month, year);
    if (dayChosen != `Please choose a valid date`) {
      const unavailableRooms = this.allBookings
        .filter((booking) => {
          if (booking.date === dayChosen) {
            return booking;
          }
        })
        .map((booking) => booking.roomNumber);
      const rooms = this.allRooms.filter((room) => {
        let bookedRoom;
        unavailableRooms.forEach((booking) => {
          bookedRoom = booking;
        });
        if (bookedRoom != room.number) {
          return room;
        }
      });
      return rooms;
    } else {
      return dayChosen;
    }
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
