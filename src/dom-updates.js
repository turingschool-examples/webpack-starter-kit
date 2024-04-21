import {
  getAllCustomerRoomBookings,
  getTotalCostForAllBookings,
} from "./user.js";
import { getAvailableRooms, filterAvailableRoomsByType } from "./booking.js";
import { getAllData, addBooking, cancelBooking } from "./api-calls.js";

//<><>query selectors<><>
const myBookingsButton = document.getElementById("my-bookings-button");
const bookARoomButton = document.getElementById("book-a-room-button");
const bookThisRoomButton = document.getElementById("book-room-button");
const cancelBookingButton = document.getElementById("cancel-room-button");
const dateInput = document.getElementById("date");
const roomTypeInput = document.getElementById("room-type");
const bookedText = document.getElementById("booked-text");
const canceledText = document.getElementById("canceled-text");
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
let filteredBookings;
let currentBooking;
let date;
const images = [
  "https://www.cvent.com/sites/default/files/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg",
  "https://www.rd.com/wp-content/uploads/2023/05/GettyImages-1445292736.jpg",
  "https://www.travelandleisure.com/thmb/OiDnPGo3k9QLRT9__TPhFZcr7PU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/rosewood-carlyle-presidential-suite-LUXESUITE0122-0046808a88924e57922d78c7f1d9ca60.jpg",
  "https://hoteldel.com/wp-content/uploads/2021/03/hotel-del-coronado-views-suite-K1TOS1-K1TOJ1-1600x1000-1.jpg",
];

//<><>event listeners<><>
myBookingsButton.addEventListener("click", () => {
  bookingDisplay.innerHTML = "";
  let bookings = allData[2].bookings;
  let rooms = allData[1].rooms;
  customer.bookings = getAllCustomerRoomBookings(customer, bookings, rooms);
  let bookingCards = createUserBookedRoomsCard(customer.bookings);
  populateContentDisplay(bookingCards);
  showElements([totalSpentDisplay]);
  hideElements([
    dateForm,
    filterByRoomTypeDisplay,
    bookThisRoomButton,
    cancelBookingButton,
    bookedText,
    canceledText,
  ]);
  let totalSpentByCustomer = getTotalCostForAllBookings(customer.bookings);
  totalSpentDisplay.innerText = `You have spent a total of $${totalSpentByCustomer} on ${customer.bookings.length} rooms`;
  console.log("cust", customer);
});

bookARoomButton.addEventListener("click", () => {
  showElements([dateForm]);
  hideElements([totalSpentDisplay, bookedText]);
});

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  bookingDisplay.innerHTML = "";
  showElements([filterByRoomTypeDisplay]);
  const dateInput = document.getElementById("date");
  date = dateInput.value.toString();
  let bookings = allData[2].bookings;
  let rooms = allData[1].rooms;
  bookingsByDate = getAvailableRooms(bookings, rooms, date);
  let bookingCards = createAvailableBookingsCard(bookingsByDate);
  //   let bookingCards = "We apologize, but unfortunately there are no rooms for your selected date";
  populateContentDisplay(bookingCards);
  dateForm.reset();
});

filterSearchButton.addEventListener("click", (event) => {
  event.preventDefault();
  bookingDisplay.innerHTML = "";
  const filteredType = document.getElementById("room-type");
  const roomType = filteredType.value;
  filteredBookings = filterAvailableRoomsByType(bookingsByDate, roomType);
  let bookingCards = createAvailableBookingsCard(filteredBookings);
  //   let bookingCards = 'We apologize, but unfortunately there are no rooms by that type available';
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
    const bookingToDisplay = renderSingleBooking(currentBooking);
    bookingDisplay.innerHTML = bookingToDisplay;
    bookThisRoomButton.innerText = "Book Room";
    showElements([cancelBookingButton]);
    hideElements([bookThisRoomButton]);
  } else if (event.target.classList.contains("available-booking-card")) {
    currentBooking = findBooking(event.target.id, bookingsByDate);
    const bookingToDisplay = renderSingleBooking(currentBooking);
    bookingDisplay.innerHTML = bookingToDisplay;
    bookThisRoomButton.innerText = "Book Room";
    showElements([bookThisRoomButton]);
    hideElements([cancelBookingButton]);
  }
});

bookThisRoomButton.addEventListener("click", () => {
  date = date.split("-").join("/");
  let bookingToAdd = {
    userID: customer.id,
    date: date,
    roomNumber: currentBooking.number,
  };
  addBooking(bookingToAdd)
    .then((response) => {
      console.log(response);
      const newBooking = response.newBooking;
      allData[2].bookings.push(newBooking);
      showElements([bookedText, cancelBookingButton]);
      hideElements([bookThisRoomButton]);
      return getAllData();
    })
    .then((apiData) => {
      allData = apiData;
      console.log("allagain", allData);
    });
});

cancelBookingButton.addEventListener("click", () => {
  cancelBooking(currentBooking.id)
    .then((response) => {
      let bookings = allData[2].bookings;
      let bookingToRemove = removeBooking(bookings, currentBooking);
      bookings.splice(bookingToRemove, 1);
      showElements([canceledText]);
      hideElements([cancelBookingButton]);
      return getAllData();
    })
    .then((apiData) => {
      allData = apiData;
    });
});

//<><>event handlers<><>
export const load = () => {
  document.addEventListener("DOMContentLoaded", function () {
    getAllData().then((apiData) => {
      allData = apiData;
      customer = getRandomUser(allData[0].customers);
      let bookings = allData[2].bookings;
      let rooms = allData[1].rooms;
      customer.bookings = getAllCustomerRoomBookings(customer, bookings, rooms);
      console.log('all data', allData)
    });
  });
};

function populateContentDisplay(bookings) {
  if (
    bookings ===
      "We apologize, but unfortunately there are no rooms by that type available" ||
    bookings ===
      "We apologize, but unfortunately there are no rooms for your selected date"
  ) {
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

function renderSingleBooking(booking) {
    console.log("thisbooking", booking);
    const singleBooking = `<div class="single-booking-display">
      <h2>${booking.roomType.toUpperCase()}</h2>
      <article>Number of Beds: ${booking.numBeds}</article>
              <article>Bed Size: ${booking.bedSize}</article>
              <article>Cost Per Night: ${booking.costPerNight}</article>
              <img src="${generateRandomImage(images)}" alt="hotel room with bed">
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
    return card;
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
    return card;
  });
  return availableBookingCards;
}

function findBooking(target, bookings) {
  let booking = bookings[target];
  return booking;
}

function generateRandomImage(images) {
  let randomIndex = Math.floor(Math.random() * images.length);
  let randomImage = images[randomIndex];
  return randomImage;
}

function removeBooking(bookings, currentBooking) {
  const bookingToRemove = bookings.findIndex((booking) => {
    return booking.id === currentBooking.id;
  });
  return bookingToRemove
}
