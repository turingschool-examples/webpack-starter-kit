// IMPORTS
import './css/styles.css';
import './images/junior-suite.jpeg';
import './images/residential-suite.jpeg';
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
      showCustomerBookings();
    }
  );
});

// FUNCTIONS

const showCustomerBookings = () => {
  const customerBookings = bookings.filter(booking => booking.userID === customer.id);
  customerBookings.forEach(booking => {
    const room = rooms.find(room => room.number === booking.roomNumber);
    const image = room.roomType.replace(' ', '-');
    const roomName = room.roomType.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    const bedSize = room.bedSize[0].toUpperCase() + room.bedSize.substring(1)
    let bidetStatus
    if (room.bidet) {
      bidetStatus = 'Includes Bidet'
    } else {
      bidetStatus = 'Does not Include Bidet'
    }

    roomsDisplay.innerHTML += `
      <figure>
        <img src="./images/${image}.jpeg" alt="image of ${room.roomType}">
        <figcaption>
          <div>
            <h4>Room #${booking.roomNumber} - ${roomName}</h4>
            <h5>$${room.costPerNight}</h5>
          </div>
          <div class="room-description">
            <p>Bed Size: ${bedSize}</p>
            <p>Number of Beds: 2</p>
            <p>${bidetStatus}</p>
          </div>
          <div>  
            <p class="booked">Booked for ${booking.date}</p>
          </div>
        </figcaption>
      </figure>
    `;
  });
}

// Will need to adjust to accept customer login
const loginCustomer = () => customer = customers[0];

const handleError = (error) => roomsDisplay.innerText = `${error}, sorry!`;

export default handleError;