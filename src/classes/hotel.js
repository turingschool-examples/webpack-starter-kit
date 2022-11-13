import Room from "./room";
import Booking from "./booking";
import Customer from "./customer";

class Hotel {
  constructor(roomData, bookingData, customerData) {
    this.allRooms = this.createRooms(roomData);
    this.allBookings = this.createBookings(bookingData);
    this.allCustomers = this.createCustomers(customerData);
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

  createCustomers(customerData) {
    this.allCustomers = customerData.map((details) => new Customer(details));
    return this.allCustomers;
  }

  login(username, password) {
    return this.allCustomers.find((customer) => {
      if (customer.username === username && customer.password === password) {
        return customer;
      }
    });
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

  findBookedRoomNumber(date) {
    const bookedRoom = this.allBookings.filter(
      (booking) => date === booking.date
    );
    return bookedRoom.map((room) => room.roomNumber);
  }

  findAvailableRooms(date) {
    this.availableRooms = [];
    const bookedRooms = this.findBookedRoomNumber(date);
    this.availableRooms = this.allRooms.filter(
      (room) => !bookedRooms.includes(room.number)
    );
    console.log(this.availableRooms);
    return this.availableRooms;
  }

  filterRoomsByType(type, data = this.availableRooms) {
    if (type === "no-preference") {
      return data;
    } else {
      return data.filter((room) => room.roomType === type);
    }
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
