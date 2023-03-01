// IMPORTS
import './css/styles.css';
import './images/junior-suite.jpeg';
import './images/presidential-suite.jpeg';
import './images/single-room.jpeg';
import './images/suite.jpeg';
import Customer from '../src/classes/Customer';
import {fetchAPI, fetchAllData} from './apiCalls';

// GLOBAL VARIABLES

let customer, customers, rooms, bookings

// QUERY SELECTORS

const roomsDisplay = document.getElementById('roomsDisplay');

// EVENT LISTENERS

window.addEventListener('load', () => {
  fetchAllData().then(
    data => {
      customers = data[0];
      rooms = data[1];
      bookings = data[2];

      // Will need to move to event listener for login button
      loginCustomer();
    }
  );
});

// FUNCTIONS

// Will need to adjust to accept customer login
const loginCustomer = () => customer = new Customer(customers.customers[0]);

const handleError = (error) => roomsDisplay.innerText = `${error}, sorry!`;

export default handleError;