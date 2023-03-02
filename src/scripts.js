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

const totalBookings = document.getElementById('totalBookings');
const roomsDisplay = document.getElementById('roomsDisplay');
const dateInput = document.getElementById('dateInput');
const searchButton = document.getElementById('searchButton');


// EVENT LISTENERS

window.addEventListener('load', () => {
  fetchAllData().then(
    data => {
      data[0].customers.forEach(customer => customers.push(new Customer(customer)));
      data[1].rooms.forEach(room => rooms.push(new Room(room)));
      data[2].bookings.forEach(booking => bookings.push(new Booking(booking)));

      // Will need to move to event listener for login button
      loginCustomer();
      showBookingTotal();
      showCustomerBookings();
      console.log(getVacancies('2023/01/11'))
    }
  );
});

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const date = dateInput.value;
  // console.log(getVacancies(date));
  getVacancies(date);
});

// FUNCTIONS

const getVacancies = date => {
  date = date.replace(/\-/g, '/');
  const daysBookings = bookings.filter(booking => booking.date === date);
  // console.log(daysBookings)
  const vacancies = rooms.filter(room => daysBookings.find(booking => {
    console.log('booking', booking.roomNumber);
    console.log('room', room.number);
    return booking.roomNumber !== room.number
  }));
  // Working on weird issue where some days work but others don't
  return vacancies;
}


const showBookingTotal = () => {
  const customerBookings = bookings.filter(booking => booking.userID === customer.id);
  let total = customerBookings.reduce((acc, booking) => {
    const cost = rooms.find(room => room.number === booking.roomNumber).costPerNight;
    acc += cost;
    return acc;
  }, 0)
  
  total = total.toFixed(2);
  
  totalBookings.innerText = `You have ${customerBookings.length} bookings for a total of $${total}`
}

const showCustomerBookings = () => {
  const customerBookings = bookings.filter(booking => booking.userID === customer.id);
  customerBookings.forEach(booking => {
    const bookingDate = arrangeDate(booking.date);
    const room = rooms.find(room => room.number === booking.roomNumber);
    const image = room.roomType.replace(' ', '-');
    const roomName = room.roomType.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
    const bedSize = room.bedSize[0].toUpperCase() + room.bedSize.substring(1);
    let bidetStatus;
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
    <p class="booked">Booked for ${bookingDate}</p>
    </div>
    </figcaption>
    </figure>
    `;
  });
}

// Will need to adjust to accept customer login
const loginCustomer = () => customer = customers[0];

function arrangeDate(date) {
  const monthAndDay = date.substring(5);
  const year = date.substring(0, 4);
  return monthAndDay + '/' + year
}

// function arrangeYearToDay(date) {
//   const monthAndDay = date.substring(0, 5);
//   const year = date.substring(6);
//   return year + '/' + monthAndDay;
// }

const handleError = (error) => roomsDisplay.innerText = `${error}, sorry!`;

export default handleError;