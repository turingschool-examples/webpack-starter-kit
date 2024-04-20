import {
  getAllCustomerRoomBookings,
  getTotalCostForAllBookings,
} from "./user.js";
import { getAvailableRooms, filterAvailableRoomsByType } from "./booking.js";
// import { allData } from './scripts.js';
import { getAllData } from "./api-calls.js";

//<><>query selectors<><>
const myBookingsButton = document.getElementById("my-bookings-button");
const bookRoomButton = document.getElementById("book-a-room-button");
const dateInput = document.getElementById("date");
const roomTypeInput = document.getElementById("room-type");

const bookingDisplay = document.querySelector(".content-display");
const totalSpentDisplay = document.querySelector(".total-spent");
const submitButton = document.querySelector(".submit-button");
const filterSearchButton = document.querySelector(".filter-submit-button");
const dateForm = document.querySelector(".date-form");
const filterByRoomTypeDisplay = document.querySelector(".type-search-form");

//<><>data model<><>
let allData;
let customer;
let bookingsByDate;
let currentBooking;

//<><>event listeners<><>
myBookingsButton.addEventListener("click", () => {
    bookingDisplay.innerHTML = '';
  let bookings = allData[2].bookings;
  let rooms = allData[1].rooms;
  //   let userBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
  customer.bookings = getAllCustomerRoomBookings(customer, bookings, rooms);
  console.log("userbooks", customer.bookings);
  //   populateContentDisplay(userBookings, createUserBookedRoomsCard);
  let bookingCards = createUserBookedRoomsCard(customer.bookings);
  populateContentDisplay(bookingCards);
  showElements([totalSpentDisplay]);
  hideElements([dateForm]);
  let totalSpentByCustomer = getTotalCostForAllBookings(customer.bookings);
  totalSpentDisplay.innerText = `You have spent a total of $${totalSpentByCustomer} on ${customer.bookings.length} rooms`;
  console.log("cust", customer);
});

bookRoomButton.addEventListener("click", () => {
  showElements([dateForm]);
  hideElements([totalSpentDisplay]);
  console.log('cur', currentBooking)
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  bookingDisplay.innerHTML = "";
  showElements([filterByRoomTypeDisplay]);
  const dateInput = document.getElementById("date");
  const date = dateInput.value.toString();
  let bookings = allData[2].bookings;
  let rooms = allData[1].rooms;
  bookingsByDate = getAvailableRooms(bookings, rooms, date);
  let bookingCards = createAvailableBookingsCard(bookingsByDate);
  console.log("avail", bookingsByDate.length);
  populateContentDisplay(bookingCards);
//   dateForm.reset();
});

filterSearchButton.addEventListener("click", (event) => {
  event.preventDefault();
  bookingDisplay.innerHTML = "";
  const filteredType = document.getElementById("room-type");
  const roomType = filteredType.value;
  let filteredBookings = filterAvailableRoomsByType(bookingsByDate, roomType);
  console.log("filter", filteredBookings);
  bookingsByDate = filteredBookings
  let bookingCards = createAvailableBookingsCard(bookingsByDate);
  populateContentDisplay(bookingCards);
  filterByRoomTypeDisplay.reset();
});

dateInput.addEventListener("input", () => {
  disableButton(dateInput, submitButton);
});

roomTypeInput.addEventListener("input", () => {
  disableButton(roomTypeInput, filterSearchButton);
});

bookingDisplay.addEventListener("click", (event) => {
  if (event.target.classList.contains("user-booked-card")) {
    currentBooking = findBooking(event.target.id, customer.bookings);
    // console.log('cur', currentBooking)
    const bookingToDisplay = renderSingleBooking(currentBooking);
    bookingDisplay.innerHTML = bookingToDisplay;
  } else if (event.target.classList.contains("available-booking-card")) {
    currentBooking = findBooking(event.target.id, bookingsByDate);    
    const bookingToDisplay = renderSingleBooking(currentBooking);
    bookingDisplay.innerHTML = bookingToDisplay;
  }
});
//the event.target.id is accesses the index of the element clicked on in the array it cam from
//how do I find it in the array?

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

function populateContentDisplay(bookings) {
  if (bookings === "We apologize, but unfortunately there are no rooms by that type available" ||
    bookings === "We apologize, but unfortunately there are no rooms for your selected date") {
    bookingDisplay.innerHTML = `<h2>${bookings}</h2>`;
  } else {
    bookings.forEach((booking) => {
      bookingDisplay.innerHTML += booking;
    });
  }
}

function showElements(elements) {
  const shownElement = elements.forEach((element) => {
    element.classList.remove("hidden");
  });
  return shownElement;
}

function hideElements(elements) {
  const hiddenElement = elements.forEach((element) => {
    element.classList.add("hidden");
  });
  return hiddenElement;
}

//<><>functions<><>
function getRandomUser(users) {
  let randomIndex = Math.floor(Math.random() * users.length);
  let randomUser = users[randomIndex];
  return randomUser;
}

function createUserBookedRoomsCard(bookings) {
  const userBookingsCards = bookings.map((booking, i) => {
    let card = `<div class="user-booked-card" id=${i}>
        <h3>${booking.roomType.toUpperCase()} - ${booking.bedSize.toUpperCase()} BED</h3>
        <article>Number of Beds: ${booking.numBeds}</article>
        <article>You have booked this on ${booking.dateBooked} at a cost of $${
      booking.costPerNight
    } per night</article>
</div>`;
return card
  });
  return userBookingsCards;
}

function createAvailableBookingsCard(bookings) {
  const availableBookingCards = bookings.map((booking, i) => {
    let card = `<div class="available-booking-card" id=${i}>
            <h3>${booking.roomType.toUpperCase()}</h3>
            <article>Number of Beds: ${booking.numBeds}</article>
            <article>Bed Size: ${booking.bedSize}</article>
            <article>Cost Per Night: ${booking.costPerNight}</article>
    </div>`;
    return card
  });
  return availableBookingCards;
}

function renderSingleBooking(booking) {
    console.log('thisbooking', booking)
  const singleBooking = `<div class="single-booking-display">
    <h2>${booking.roomType.toUpperCase()}</h2>
    <article>Number of Beds: ${booking.numBeds}</article>
            <article>Bed Size: ${booking.bedSize}</article>
            <article>Cost Per Night: ${booking.costPerNight}</article>
    </div>`;
  return singleBooking;
}

function disableButton(field, button) {
  if (field.value !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

function findBooking(target, bookings) {
  let booking = bookings[target];
  return booking;
}
