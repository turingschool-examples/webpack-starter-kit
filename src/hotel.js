// Big Daddy Class
// Takes in all Data

import Customer from '../src/Customer.js';
import Bookings from './Bookings.js';
import DOMupdates from './DOMupdates.js';

class Hotel {
  constructor(users, rooms, bookings, roomService) {
    this.userData = users;
    this.roomData = rooms;
    this.bookingData = bookings;
    this.roomServiceData = roomService;
    this.currentCustomer;
    this.currentRoom;
    this.currentDate;
    this.bookings;
    this.customers = [];
    this.today;
    this.menu;
  }