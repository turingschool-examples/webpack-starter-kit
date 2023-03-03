// IMPORTS
import './css/styles.css';
import './images/junior-suite.jpeg';
import './images/residential-suite.jpeg';
import './images/single-room.jpeg';
import './images/suite.jpeg';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';
import Booking from '../src/classes/Booking';
import BookingRepo from './classes/BookingRepo';
import {fetchAPI, fetchAllData, postBooking} from './apiCalls';

// GLOBAL VARIABLES

let bookingRepo, customer;
let customers = [];
let rooms = [];
let bookings = [];

// QUERY SELECTORS

const totalBookings = document.getElementById('totalBookings');
const roomsDisplayTitle = document.getElementById('roomsDisplayTitle');
const roomsDisplay = document.getElementById('roomsDisplay');
const dateInput = document.getElementById('dateInput');
const typeSelection = document.getElementById('typeSelection');
const searchButton = document.getElementById('searchButton');
const bookingsButton = document.getElementById('bookingsButton');


// EVENT LISTENERS

window.addEventListener('load', () => {
  fetchAllData().then(
    data => {
      data[0].customers.forEach(customer => customers.push(new Customer(customer)));
      data[1].rooms.forEach(room => rooms.push(new Room(room)));
      data[2].bookings.forEach(booking => bookings.push(new Booking(booking)));
      bookingRepo = new BookingRepo(bookings);
      // Will need to move to event listener for login button
      loginCustomer();
      resetDateInput();
      showBookingTotal();
      showCustomerBookings();
    }
  );
});

roomsDisplay.addEventListener('click', (event) => {
  if (event.target.id.includes('bookButton')) {
    const roomNumber = parseInt(event.target.id.substring(10));
    const bookingData = customer.getRoomToBook(dateInput.value, roomNumber);
    postBooking(bookingData);
    replaceBookingButton(event.target, dateInput.value);
    updateBookings();
  }
});

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  updateBookings();
  showVacancies(dateInput.value, rooms, typeSelection.value);
});

bookingsButton.addEventListener('click', () => {
  updateBookings();
  clearRoomsDisplay();
  resetSearchBar();
  showBookingTotal();
  showCustomerBookings();
})

// FUNCTIONS

const showVacancies = (date, rooms, type) => {
  clearRoomsDisplay();
  show(bookingsButton);
  const vacancies = bookingRepo.getVacancies(date, rooms, type);
  if (vacancies.length === 0) {
    roomsDisplayTitle.innerHTML = `<h2>No Rooms Available`;
    roomsDisplay.innerHTML = `
      <p>We are so very sorry! Try selecting a different date or search for a different room type.</p>
    `;
  } else {
      vacancies.forEach(room => {
        const imageEndPath = room.getImageEndPath();
        const roomName = room.getRoomName();
        const bedSize = room.getBedSize();
        let bidetStatus;

        if (room.bidet) {
          bidetStatus = 'Includes Bidet'
        } else {
          bidetStatus = 'Does not Include Bidet'
          roomsDisplayTitle.innerHTML = `<h2>Rooms Available</h2>`;
          roomsDisplay.innerHTML += `
          <figure>
            <img src="./images/${imageEndPath}" alt="image of ${room.roomType}">
            <figcaption>
              <div>
                <h4>Room #${room.number} - ${roomName}</h4>
                <h5>$${room.costPerNight}</h5>
              </div>
              <div class="room-description">
                <p>Bed Size: ${bedSize}</p>
                <p>Number of Beds: 2</p>
                <p>${bidetStatus}</p>
              </div>
              <div>  
               <button id="bookButton${room.number}">Click to Book</button>
              </div>
            </figcaption>
          </figure>
        `;
      }
    });
  }
}
    
const showBookingTotal = () => {
  const customerBookings = customer.getCustomerBookings(bookings);
  let total = customer.getTotalCost(bookings, rooms);  
  total = total.toFixed(2);
  
  return `You have ${customerBookings.length} bookings for a total of $${total}`
}

const showCustomerBookings = () => {
  hide(bookingsButton);
  const customerBookings = customer.getCustomerBookings(bookings);
  customerBookings.forEach(booking => {
    const bookingDate = arrangeDate(booking.date);
    const room = booking.getRoom(rooms);
    const imageEndPath = room.getImageEndPath();
    const roomName = room.getRoomName();
    const bedSize = room.getBedSize();
    let bidetStatus;
    if (room.bidet) {
      bidetStatus = 'Includes Bidet'
    } else {
      bidetStatus = 'Does not Include Bidet'
    }
    
    roomsDisplayTitle.innerHTML = `
      <h2>Your Bookings</h2>
      <h3 id="totalBookings">${showBookingTotal()}</h3>
    `;

    showBookingTotal();

    roomsDisplay.innerHTML += `
      <figure>
        <img src="./images/${imageEndPath}" alt="image of ${room.roomType}">
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

const replaceBookingButton = (button, bookingDate) => {
  button.parentElement.innerHTML = `<p class="booked">Booked for ${bookingDate}</p>`
}

// Will need to adjust to accept customer login
const loginCustomer = () => customer = customers[10];

const updateBookings = () => {
  fetchAPI('bookings').then(
    data => {
      bookings = [];
      data.bookings.forEach(booking => bookings.push(new Booking(booking)));
      bookingRepo = new BookingRepo(bookings);
    }
  );
}

const resetSearchBar = () => {
  resetDateInput();
  typeSelection.value = 'any';
}

const clearRoomsDisplay = () => roomsDisplay.innerHTML = '';

const resetDateInput = () => {
  let todaysDate = new Date();
  const year = String(todaysDate.getFullYear());
  let month = String(todaysDate.getMonth() + 1);
  if (month.length === 1) {
    month = '0' + month;
  }

  let day = String(todaysDate.getDate());
  if (day.length === 1) {
    day = '0' + day
  }

  todaysDate = year + '-' + month + '-' + day
  dateInput.value = todaysDate;
  dateInput.min = todaysDate;
}

function arrangeDate(date) {
  const monthAndDay = date.substring(5);
  const year = date.substring(0, 4);
  return monthAndDay + '/' + year
}

const hyphenateDate = date => date.replace(/\//g, '-');

const hide = (element) => element.classList.add('hidden');
const show = (element) => element.classList.remove('hidden');

const handleError = (error) => roomsDisplay.innerText = `${error}, sorry!`;

export default handleError;