import {
  getAllCustomerRoomBookings,
  getTotalCostForAllBookings,
} from "./user.js";
import {getAvailableRooms, filterAvailableRoomsByType} from './booking.js'
// import { allData } from './scripts.js';
import { getAllData } from "./api-calls.js";

//<><>query selectors<><>
const myBookingsButton = document.getElementById("my-bookings-button");
const bookRoomButton = document.getElementById("book-a-room-button");
const dateInput = document.getElementById('date');
const roomTypeInput = document.getElementById('room-type');

const bookingDisplay = document.querySelector(".content-display");
const totalSpentDisplay = document.querySelector('.total-spent');
const submitButton = document.querySelector('.submit-button');
const filterSubmitButton = document.querySelector('.filter-submit-button')
const dateForm = document.querySelector('.date-form');
const filterByRoomTypeDisplay = document.querySelector('.type-search-form');

//<><>data model<><>
let allData;
let customer;
let bookingsByDate;

//<><>event listeners<><>
myBookingsButton.addEventListener("click", () => {
  let bookings = allData[2].bookings;
  let rooms = allData[1].rooms;
  let userBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
  populateContentDisplay(userBookings, createUserBookedRoomsCard);
  showElements([totalSpentDisplay])
  hideElements([dateForm])
  let totalSpentByCustomer = getTotalCostForAllBookings(userBookings);
  totalSpentDisplay.innerText = `You have spent a total of $${totalSpentByCustomer} on ${userBookings.length} rooms`;
  console.log('cust', customer)
});

bookRoomButton.addEventListener('click', () => {
    showElements([dateForm]);
    hideElements([totalSpentDisplay]);
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    bookingDisplay.innerHTML = '';
    showElements([filterByRoomTypeDisplay]);
    const dateInput = document.getElementById('date');
    const date = dateInput.value.toString()
    let bookings = allData[2].bookings;
    let rooms = allData[1].rooms;
    bookingsByDate = getAvailableRooms(bookings, rooms, date);
    console.log('avail', bookingsByDate.length)
    populateContentDisplay(bookingsByDate, createAvailableBookingsCard);
})

filterSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    bookingDisplay.innerHTML = ''
    const filteredType = document.getElementById('room-type');
    const roomType = filteredType.value
    let filteredBookings = filterAvailableRoomsByType(bookingsByDate, roomType);
    console.log('filter', filteredBookings)
    populateContentDisplay(filteredBookings, createAvailableBookingsCard);
    filterByRoomTypeDisplay.reset();
});

dateInput.addEventListener('input', () => {
    disableButton(dateInput, submitButton)
})

roomTypeInput.addEventListener('input', () => {
    disableButton(roomTypeInput, filterSubmitButton)
})

//<><>event handlers<><>
export const load = () => {
    document.addEventListener("DOMContentLoaded", function () {
      getAllData().then((apiData) => {
        allData = apiData;
        customer = getRandomUser(allData[0].customers);
        console.log("all", allData);
      });
    });
  };

function populateContentDisplay(bookings, cardsToBeCreated) {
    console.log('books', bookings)
    if (bookings === 'We apologize, but unfortunately there are no rooms by that type available') {
        bookingDisplay.innerHTML = `<h2>${bookings}</h2>`
    } else {
    bookings.forEach((booking) => {
      let card = cardsToBeCreated(booking);
      bookingDisplay.innerHTML += card;
    });
}
  }
  
  function showElements(elements) {
      const shownElement = elements.forEach((element) => {
          element.classList.remove('hidden')
      })
      return shownElement
  }
  
  function hideElements(elements) {
      const hiddenElement = elements.forEach((element) => {
          element.classList.add('hidden')
      })
      return hiddenElement
  }
  

//<><>functions<><>
function getRandomUser(users) {
  let randomIndex = Math.floor(Math.random() * users.length);
  let randomUser = users[randomIndex];
  return randomUser;
}

function createUserBookedRoomsCard(booking) {
  return `<div class="booking-card">
            <h3>${booking.title.toUpperCase()} - ${booking.bedSize.toUpperCase()}BED</h3>
            <article>Number of Beds: ${booking.numBeds}</article>
            <article>You have booked this on ${
              booking.dateBooked
            } at a cost of $${booking.costPerNight} per night</article>
    </div>`;
}

function createAvailableBookingsCard(booking) {
    return `<div class="booking-card">
            <h3>${booking.roomType.toUpperCase()}</h3>
            <article>Number of Beds: ${booking.numBeds}</article>
            <article>Bed Size: ${booking.bedSize}</article>
            <article>Cost Per Night: ${booking.costPerNight}</article>
    </div>`
}

function disableButton(field, button) {
    if (field.value !== '') {
        button.disabled = false
    } else {
        button.disabled = true;
    }
}


