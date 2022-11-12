// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/styles.scss";
import Hotel from "./classes/hotel";
import Customer from "./classes/customer";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/HotelRoom1.png";
import "./images/HotelRoom2.png";
import "./images/HotelRoom3.png";
import "./images/HotelRoom4.png";

//GLOBAL VAR

let currentUser;
let overlookHotel;
let day;
let month;
let year;

Promise.all([
  loadData("http://localhost:3001/api/v1/customers"),
  loadData("http://localhost:3001/api/v1/rooms"),
  loadData("http://localhost:3001/api/v1/bookings"),
])
  .then((data) => {
    overlookHotel = new Hotel(data[1].rooms, data[2].bookings);
    currentUser = new Customer(data[0].customers[3]);
    updateCustomerBookings();
  })
  .catch((error) => {
    welcome.innerText = "Sorry! There was a problem loading the data!";
    welcome.classList.remove("welcome-styling");
    welcome.classList.add("welcome-normal");
  });

//VARIABLES

//QUERY SELECTORS
const navigationBar = document.querySelector(".first-navigation");
const manageBookingsSection = document.querySelector(".manage-bookings");
const addBookingsSection = document.querySelector(".add-booking");
const welcome = document.querySelector(".welcome");

let availableRooms = document.querySelector(".room-thumbnails");
let myBookings = document.querySelector(".manage-bookings");

let wantedDay = document.querySelector("#select-day");
let wantedMonth = document.querySelector("#select-month");
let wantedYear = document.querySelector("#select-year");
let wantedRoomType = document.querySelector("#select-room");
let wantedNumBeds = document.querySelector("#select-beds");
let submitBookingButton = document.querySelector("#submit-booking");

//even listeners

navigationBar.addEventListener("click", changePageDisplay);
submitBookingButton.addEventListener("click", searchForBookableRooms);
availableRooms.addEventListener("dblclick", bookRoom);
availableRooms.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    bookRoom(e);
  }
});

//Starting functions

function loadData(URL) {
  return fetch(URL).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch at loadData");
    }
    return res.json();
  });
}

function changePageDisplay(event) {
  hide(manageBookingsSection);
  hide(addBookingsSection);
  hide(welcome);
  if (event.target.classList.contains("manage-bookings-button")) {
    show(manageBookingsSection);
    getUpdatedBookings();
  } else if (event.target.classList.contains("create-bookings-button")) {
    show(addBookingsSection);
  }
}

function updateCustomerBookings() {
  displayRoomBookings(generateCustomerBookings());
}

function generateCustomerBookings() {
  const booking = currentUser.getMyBookings(overlookHotel.allBookings);
  return booking;
}

function displayRoomBookings(data) {
  let cost = overlookHotel.findCustomerBookingExpenses(currentUser);
  cost = cost.toFixed(2);
  myBookings.innerHTML = "";
  data.forEach((booking) => {
    myBookings.innerHTML += `
    <section class="user-booking" id="${booking.id}" tabindex='0'>
      <p>Date: ${booking.date}</p>
      <p>Room: ${booking.roomNumber}</p>
    </section>
    `;
  });
  myBookings.innerHTML += `<h2>Total Spent: $${cost}</h2>`;
}

function searchForBookableRooms() {
  event.preventDefault();
  availableRooms.innerHTML = "";
  day = wantedDay.value;
  month = wantedMonth.value;
  year = wantedYear.value;
  const room = wantedRoomType.value;
  const foundRooms = overlookHotel.findAvailableRooms(
    currentUser,
    day,
    month,
    year
  );
  if (foundRooms === "Please choose a valid date") {
    availableRooms.innerHTML = `
    <h3 class='try-again'>We cannot search for bookings with past or missing data! Please try again.</h3>
    `;
  } else if (room === "") {
    availableRooms.innerHTML = `
    <h3 class='try-again'>Please select a room prefrence!</h3>
    `;
  } else if (foundRooms.length === 0) {
    availableRooms.innerHTML = `<h3 class="try-again">We are so sorry, there are no bookings available with your specifications!
    Please modify your search!</h3>`;
  } else {
    if (room === "no-preference") {
      displayAvailableRooms(foundRooms);
    } else if (room != "no-preference") {
      const withRoom = overlookHotel.filterByRoomType(room, foundRooms);
      if (withRoom.length === 0) {
        availableRooms.innerHTML = `<h3 class="try-again">We are so sorry, there are no bookings available with your specifications!
    Please modify your search!</h3>`;
      }
      displayAvailableRooms(withRoom);
    }
  }
}

function displayAvailableRooms(data) {
  data.forEach((room) => {
    availableRooms.innerHTML += `
    <section class="single-room-thumbnail" id ="${room.number}" tabindex='0'> 
      <img class="single-room-img" src="./images/HotelRoom4.png" alt="Image of room ${room.number}"> 
        <div class="room-info"> 
          <p>Room number: ${room.number}</p>
          <p>Room type: ${room.roomType}</p>
          <p>Bidet: ${room.bidet}</p>
          <p>Bed size: ${room.bedSize}</p>
          <p>Number of beds: ${room.numBeds}</p>
          <p>Cost per night: ${room.costPerNight}</p>
        </div> 
    </section>`;
  });
}

function bookRoom(event) {
  const id = +event.target.parentElement.id;
  console.log("ID", event.target.parentElement.id);
  const date = `${year}/${month}/${day}`;
  const booking = overlookHotel.createNewBooking(currentUser, id, date);
  console.log("POST BOOKING", booking);
  postNewBooking(booking);
}

function postNewBooking(bookingToSend) {
  fetch("http://localhost:3001/api/v1/bookings", {
    method: "POST",
    body: JSON.stringify(bookingToSend),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      getUpdatedBookings();
      availableRooms.innerHTML = `
      <h3>Saved Booking</h3>`;
    })
    .catch((err) => {
      availableRooms.innerHTML = `
    <h3 class='try-again'>There was a problem saving your booking!</h3>
    `;
    });
}

function getUpdatedBookings() {
  fetch("http://localhost:3001/api/v1/bookings")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return res.json();
    })
    .then((data) => {
      overlookHotel.createBookings(data.bookings);
      updateCustomerBookings();
    })
    .catch((error) => {
      myBookings.innerHTML = `
    <h3 class='try-again'>There was a problem retrieving your bookings data!</h3>
    `;
    });
}

function hide(element) {
  element.classList.add("hide");
}

function show(element) {
  element.classList.remove("hide");
}
