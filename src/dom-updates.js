import {
  getAllCustomerRoomBookings,
  getTotalCostForAllBookings,
} from "./user.js";
// import { allData } from './scripts.js';
import { getAllData } from "./api-calls.js";

//<><>query selectors<><>
const myBookingsButton = document.getElementById("my-bookings-button");
const bookRoomButton = document.getElementById("book-a-room-button");
const bookingDisplay = document.querySelector(".content-display");
const totalSpentDisplay = document.querySelector('.total-spent')

//<><>data model<><>
let allData;
let customer;

//<><>event listeners<><>
myBookingsButton.addEventListener("click", () => {
//   let customer = getRandomUser(allData[0].customers);
  let bookings = allData[2].bookings;
  let rooms = allData[1].rooms;
  let userBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
  populateContentDisplay(userBookings);
  showElements([totalSpentDisplay])
  let totalSpentByCustomer = getTotalCostForAllBookings(userBookings);
  totalSpentDisplay.innerText = `You have spent a total of $${totalSpentByCustomer} on ${userBookings.length} rooms`;
  console.log('cust', customer)
});

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

//<><>functions<><>
function getRandomUser(users) {
  let randomIndex = Math.floor(Math.random() * users.length);
  let randomUser = users[randomIndex];
  return randomUser;
}

function createBookingCard(booking) {
  return `<div class="booking-card">
            <h3>${booking.title.toUpperCase()} - ${booking.bedSize.toUpperCase()}BED</h3>
            <article>Number of Beds: ${booking.numBeds}</article>
            <article>You have booked this on ${
              booking.dateBooked
            } at a cost of $${booking.costPerNight} per night</article>
    </div>`;
}

function populateContentDisplay(bookings) {
  bookings.forEach((booking) => {
    let book = createBookingCard(booking);
    bookingDisplay.innerHTML += book;
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
