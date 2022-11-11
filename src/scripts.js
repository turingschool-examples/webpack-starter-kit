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

console.log("This is the JavaScript entry file - your code begins here.");

//GLOBAL VAR

let currentUser;
let overlookHotel;

Promise.all([
  loadData("http://localhost:3001/api/v1/customers"),
  loadData("http://localhost:3001/api/v1/rooms"),
  loadData("http://localhost:3001/api/v1/bookings"),
])
  .then((data) => {
    overlookHotel = new Hotel(data[1].rooms, data[2].bookings);
    console.log(overlookHotel);
    currentUser = new Customer(data[0].customers[3]);
    console.log(currentUser);
    let myBookings = generateCustomerBookings();
    displayRoomBookings(myBookings);
  })
  .catch((error) => console.log("EOROROROROROOROR", "Failed to load"));

//VARIABLES

//QUERY SELECTORS
const navigationBar = document.querySelector(".first-navigation");
const manageBookingsSection = document.querySelector(".manage-bookings");
const addBookingsSection = document.querySelector(".add-booking");
const exploreHotelSection = document.querySelector(".explore-hotel");

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
  hide(exploreHotelSection);
  if (event.target.classList.contains("manage-bookings-button")) {
    show(manageBookingsSection);
  } else if (event.target.classList.contains("create-bookings-button")) {
    show(addBookingsSection);
  } else if (event.target.classList.contains("explore-hotel-button")) {
    show(exploreHotelSection);
  }
}

function generateCustomerBookings() {
  return currentUser.getMyBookings(overlookHotel.allBookings);
}

function displayRoomBookings(data) {
  data.forEach((booking) => {
    myBookings.innerHTML += `
    <section class="user-booking" id="${booking.id}">
      <p>Date: ${booking.date}</p>
      <p>Room: ${booking.roomNumber}</p>
    </section>
    `;
  });
}

function searchForBookableRooms() {
  event.preventDefault();
  availableRooms.innerHTML = "";
  const day = wantedDay.value;
  const month = wantedMonth.value;
  const year = wantedYear.value;
  const room = wantedRoomType.value;
  const foundRooms = overlookHotel.findAvailableRooms(
    currentUser,
    day,
    month,
    year
  );
  if (foundRooms === "Please choose a valid date") {
    availableRooms.innerHTML = `
    <h3 class='try-again'>We cannot create a booking for a past date! Please try another date.</h3>
    `;
    console.log("Cannot create a booking for a passed date");
  } else {
    if (room === "no-preference") {
      displayAvailableRooms(foundRooms);
    } else if (room != "no-preference") {
      const withRoom = overlookHotel.filterByRoomType(room, foundRooms);
      displayAvailableRooms(withRoom);
    }
  }
}

function displayAvailableRooms(data) {
  data.forEach((room) => {
    availableRooms.innerHTML += `
    <section class="single-room-thumbnail" id ="${room.number}"> 
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

function hide(element) {
  element.classList.add("hide");
}

function show(element) {
  element.classList.remove("hide");
}
