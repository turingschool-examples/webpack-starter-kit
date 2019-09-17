import Customer from './customer.js';
import Bookings from './bookings.js';
import domUpdates from './domUpdates.js';

class Hotel {
  constructor(users, rooms, bookings, roomService) {
    this.today;
    this.userData = users;
    this.customers = [];
    this.currentCustomer;
    this.roomServiceData = roomService;
    this.roomData = rooms;
    this.currentRoom;
    this.currentDate;
    this.bookingData = bookings;
    this.bookings;
    this.menu;
  };

  createMenu() {
    this.menu = this.roomServiceData.reduce((foodOptions, order) => {
      if(!foodOptions.includes(order.food)) {
        foodOptions.push({
          food: order.food,
          totalCost: order.totalCost
        })
      }
      return foodOptions;
    }, [])
  }

  roomsAvailable(date) {
  let availableRooms = this.bookingData.filter(room => {
     if(date === room['date']) {
       return room
     }
   });
   return this.roomData.length - availableRooms.length 
  };

  percentOccupied(date) {
    let percentRooms = this.bookingData.filter(room => {
      if(date === room['date']) {
        return room
      }
    }); 
    let num = ((percentRooms.length / this.roomData.length) * 100)
		return Math.floor(num);
  }

  createCustomers() {
    this.userData.forEach(user => {
      let userBookings = this.findUserBookings(user.id);
      let userRoomServices = this.findUserRoomService(user.id);
      let userRooms = this.findUserRooms(user.id);
      let userMenu = this.menu;
      let customer = new Customer(user.id, user.name, userBookings, userRoomServices, userRooms, userMenu, this.today);
      this.customers.push(customer);
    });
  };

  findCustomerName(name) {
    return this.customers.find(customer => customer.name === name);
  };

  findCustomerId(id) {
    return this.customers.find(customer => customer.id === id);
  };

  createBookings() {
    this.bookings = new Bookings(this.customers, this.bookingData, this.roomServiceData, this.roomData, this.today)
    console.log(this.today)
  };

  findUserBookings(id) {
    return this.bookingData.filter(booking => {
      return id === booking.userID
    });
  };

  findUserRoomService(id) {
    return this.roomServiceData.filter(roomService => {
      return id === roomService.userID
    });
  };

  findUserRooms(id) {
    let bookings = this.findUserBookings(id);
    return this.roomData.filter(room => {
      let roomNumbers = bookings.map(bookings => {
        return bookings.roomNumber
        })
      return roomNumbers.includes(room.number)
    });
  };

  createBookings() {
    this.bookings = new Bookings(this.customers, this.bookingData, this.roomServiceData, this.roomData, this.today)
  };

  displayNewDay() {
    let availableRooms = this.bookings.findAvailableRooms(this.today);
    let currentRoomService = this.bookings.findDailyRoomServiceOrders(this.today)
    let bookedRooms = this.bookings.findBookedRooms(this.today);
    domUpdates.dailyBookings(availableRooms, this.menu, currentRoomService, bookedRooms);
  }
};

export default Hotel;