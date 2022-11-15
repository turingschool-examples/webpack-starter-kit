import Room from "./room";
import Booking from "./booking";
import Customer from "./customer";

class Hotel {
  constructor(roomData, bookingData) {
    this.allRooms = this.createRooms(roomData);
    this.allBookings = this.createBookings(bookingData);
    this.allCustomers = [];
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
    const user = this.allCustomers.find((customer) => {
      if (customer.username === username && customer.password === password) {
        return customer;
      }
    });
    if (username === "manager" && password === "overlook2021") {
      return "manager";
    } else {
      return user;
    }
  }

  findCustomerBookings(currentUser) {
    return currentUser.getMyBookings(this.allBookings);
  }

  findCustomerBookingExpenses(currentUser) {
    let myRooms = this.findCustomerBookings(currentUser);
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

  chooseADate(date) {
    const today = this.getToday();
    let chosenDate = new Date(date);
    if (chosenDate >= today) {
      chosenDate = chosenDate.toISOString();
      chosenDate = chosenDate.split("T");
      let newChosenDate = chosenDate[0].split("-").join("/");
      return newChosenDate;
    } else {
      return `Please choose a valid date`;
    }
  }

  getToday() {
    const today = Date.now();
    const date = new Date(today);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  createNewBooking(currentUser, roomNumber, date) {
    const newBooking = new Object();
    newBooking.userID = currentUser.id;
    newBooking.date = date;
    newBooking.roomNumber = roomNumber;
    return newBooking;
  }

  totalRevenue(date) {
    const todaysBookings = this.findBookedRoomNumber(date);
    console.log(todaysBookings);
    return todaysBookings.reduce((acc, current) => {
      let room = this.filterByRoomNumber(current);
      acc = acc + room.costPerNight;
      return acc;
    }, 0);
  }
  findACustomer(name) {
    return this.allCustomers.find(
      (customer) => customer.name.toLowerCase() == name.toLowerCase()
    );
  }
  deleteABooking(id) {
    const booking = this.allBookings.find((booking) => booking.id === id);
    const index = this.allBookings.indexOf(booking);
    this.allBookings.splice(index, 1);
    return this.allBookings;
  }
}

export default Hotel;
