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
const bookingDisplay = document.querySelector(".content-display");
const totalSpentDisplay = document.querySelector('.total-spent');
const submitButton = document.querySelector('.submit-button');

//<><>data model<><>
let allData;
let customer;
let bookingsByDate;

//<><>event listeners<><>
export const load = () => {
    document.addEventListener("DOMContentLoaded", function () {
      getAllData().then((apiData) => {
        allData = apiData;
        customer = getRandomUser(allData[0].customers);
        console.log("all", allData);
      });
    });
  };

myBookingsButton.addEventListener("click", () => {
  let bookings = allData[2].bookings;
  let rooms = allData[1].rooms;
  let userBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
  populateContentDisplay(userBookings, createUserBookedRoomsCard);
  showElements([totalSpentDisplay])
  let totalSpentByCustomer = getTotalCostForAllBookings(userBookings);
  totalSpentDisplay.innerText = `You have spent a total of $${totalSpentByCustomer} on ${userBookings.length} rooms`;
  console.log('cust', customer)
});

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    bookingDisplay.innerHTML = ''
    const dateInput = document.getElementById('date');
    const date = dateInput.value.toString()
    let bookings = allData[2].bookings;
    let rooms = allData[1].rooms;
    bookingsByDate = getAvailableRooms(bookings, rooms, date);
    console.log('avail', bookingsByDate.length)
    populateContentDisplay(bookingsByDate, createAvailableBookingsCard);
})

//<><>event handlers<><>
function populateContentDisplay(bookings, cardsToBeCreated) {
    bookings.forEach((booking) => {
      let card = cardsToBeCreated(booking);
      bookingDisplay.innerHTML += card;
    });
  }
  
  function showElements(elements) {
      const showElement = elements.forEach((element) => {
          element.classList.remove('hidden')
      })
  }
  
  function hideElements(elements) {
      const hideElement = elements.forEach((element) => {
          element.classList.add('hidden')
      })
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
            <article>Bidet in Room: ${booking.bidet}</article>
            <article>Cost Per Night: ${booking.costPerNight}</article>
    </div>`
}


