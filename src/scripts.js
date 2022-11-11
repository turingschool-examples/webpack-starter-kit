// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/styles.scss";
import roomData from "./sampleData/room_sample_data";
import bookingData from "./sampleData/booking_sample_data";
import Hotel from "./classes/hotel";

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
]).then((data) => {
  overlookHotel = new Hotel(data[1].rooms, data[2].bookings);
  console.log(overlookHotel);
  currentUser = data[0].customers[3];
  console.log(currentUser);
});

// fetch("http://localhost:3001/api/v1/customers")
//   .then((res) => res.json())
//   .then((data) => console.log("CUSTOMERS", data));

// fetch("http://localhost:3001/api/v1/rooms").then((resp) =>
//   resp.json().then((data) => console.log("ROOMS", data))
// );

// fetch("http://localhost:3001/api/v1/bookings")
//   .then((resp) => resp.json())
//   .then((data) => console.log("BOOKINGS", data));

//VARIABLES

//QUERY SELECTORS
const navigationBar = document.querySelector(".first-navigation");
const manageBookingsSection = document.querySelector(".manage-bookings");
const addBookingsSection = document.querySelector(".add-booking");
const exploreHotelSection = document.querySelector(".explore-hotel");

let availableRooms = document.querySelector(".room-thumbnails");
let myBookings = document.querySelector(".manage-bookings");

//even listeners

navigationBar.addEventListener("click", changePageDisplay);

//Starting functions

function loadData(URL) {
  return fetch(URL).then((res) => res.json());
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

function hide(element) {
  element.classList.add("hide");
}

function show(element) {
  element.classList.remove("hide");
}

displayAvailableRooms(roomData);
displayRoomBookings(bookingData);
