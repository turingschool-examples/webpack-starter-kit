// IMPORTS
import './css/styles.css';
import './images/junior-suite.jpeg';
import './images/presidential-suite.jpeg';
import './images/single-room.jpeg';
import './images/suite.jpeg';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';
import Booking from '../src/classes/Booking';
import {fetchAPI, fetchAllData} from './apiCalls';

// GLOBAL VARIABLES

let customer;
let customers = [];
let rooms = [];
let bookings = [];

// QUERY SELECTORS

const roomsDisplay = document.getElementById('roomsDisplay');

// EVENT LISTENERS

window.addEventListener('load', () => {
  fetchAllData().then(
    data => {
      data[0].customers.forEach(customer => customers.push(new Customer(customer)));
      data[1].rooms.forEach(room => rooms.push(new Room(room)));
      data[2].bookings.forEach(booking => bookings.push(new Booking(booking)));

      // Will need to move to event listener for login button
      loginCustomer();
    }
  );
});

// FUNCTIONS

// Will need to adjust to accept customer login
const loginCustomer = () => customer = customers[0];

const handleError = (error) => roomsDisplay.innerText = `${error}, sorry!`;

export default handleError;