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
    } else {
      let total;
      myRooms = myRooms.map((booking) => booking.roomNumber);
      myRooms.forEach((number) => {
        const roomCosts = this.allRooms.filter((room) => {
          if (room.number === number) {
            return room;
          }
        });
        total = roomCosts.reduce((acc, current) => {
          acc = acc + current.costPerNight;
          return acc;
        }, 0);
      });
      return total;
    }
  }
  findAvailableRooms(currentUser, day, month, year) {
    const dayChosen = currentUser.chooseADate(day, month, year);
    if (dayChosen != `Please choose a valid date`) {
      const unavailableRooms = this.allBookings.filter((booking) => {
        console.log(dayChosen);
        if (booking.date === dayChosen) {
          return booking;
        }
      });
      // .map((booking) => booking.roomNumber);
      console.log(unavailableRooms);
    }
  }
}

export default Hotel;
