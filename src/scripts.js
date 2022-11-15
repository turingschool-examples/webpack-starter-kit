// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import "./css/styles.scss";
import Hotel from "./classes/hotel";
import Customer from "./classes/customer";
import loadData from "./apiCalls";

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import "./images/HotelRoom1.png";
import "./images/HotelRoom2.png";
import "./images/HotelRoom3.png";
import "./images/HotelRoom4.png";
import "./images/lock.png";
import "./images/user.png";

//GLOBAL VAR

let currentUser;
let overlookHotel;
let chosenDate;
let manager = false;

//VARIABLES

//QUERY SELECTORS
const loginSection = document.querySelector(".log-in");
const loginButton = document.getElementById("login-btn");
const username = document.getElementById("name");
const password = document.getElementById("password");
const loginError = document.querySelector(".bad-login");
const signIn = document.querySelector(".sign-in");

const navigationBar = document.querySelector(".first-navigation");
const manageBookingsSection = document.querySelector(".manage-bookings");
const addBookingsSection = document.querySelector(".add-booking");
const welcome = document.querySelector(".welcome");

let availableRooms = document.querySelector(".room-thumbnails");
let myBookings = document.querySelector(".manage-bookings");

let wantedRoomType = document.querySelector("#select-room");
let submitBookingButton = document.querySelector("#submit-booking");
const calendar = document.getElementById("calendar");
const managerFormSection = document.querySelector(".managers-form-section");

const roomsAvailableInfo = document.querySelector("#rooms-available");
const totalRevenueInfo = document.querySelector("#total-revenue");
const occupiedRoomsInfo = document.querySelector("#percentage-occupied");
const currentSearchedCustomer = document.querySelector(
  "#current-searched-customer"
);

const chooseCustomerButton = document.querySelector("#search-customers");
const findCustomerInput = document.querySelector("#find-customer");

//even listeners
window.addEventListener("load", loadAllData);
loginButton.addEventListener("click", loginCustomer);
navigationBar.addEventListener("click", changePageDisplay);
signIn.addEventListener("click", backToLogin);
submitBookingButton.addEventListener("click", searchForBookableRooms);
availableRooms.addEventListener("dblclick", bookRoom);
availableRooms.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    bookRoomKeyDown(e);
  }
});
chooseCustomerButton.addEventListener("click", managerCustomerSearch);
myBookings.addEventListener("dblclick", function (e) {
  if (manager) {
    deleteBooking(e);
  }
});
myBookings.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && manager) {
    deleteBooking(e);
  }
});

function loadAllData() {
  Promise.all([
    loadData("http://localhost:3001/api/v1/customers"),
    loadData("http://localhost:3001/api/v1/rooms"),
    loadData("http://localhost:3001/api/v1/bookings"),
  ])
    .then((data) => {
      overlookHotel = new Hotel(data[1].rooms, data[2].bookings);
      overlookHotel.createCustomers(data[0].customers);
    })
    .catch((error) => {
      loginError.innerText =
        "We are so sorry! There was a problem loading the data!";
      show(loginError);
    });
}

//Starting functions

function loginCustomer() {
  currentUser = overlookHotel.login(username.value, password.value);
  if (currentUser === undefined) {
    loginError.innerText = "Invalid credentials! Please try again!";
    show(loginError);
    return "did not work";
  } else {
    getCustomer(currentUser.id);
  }
}

function getCustomer(id) {
  if (currentUser != "manager") {
    loginACustomer();
    fetch(`http://localhost:3001/api/v1/customers/${currentUser.id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        return res.json;
      })
      .then((data) => {
        loginACustomer();
      })
      .catch((err) => {
        loginError.innerText =
          "We are so sorry! We cannot log you in at this time.";
        show(loginError);
      });
  } else {
    loginManager();
  }
}

function loginACustomer() {
  hide(loginSection);
  hide(managerFormSection);
  show(navigationBar);
  show(welcome);
  show(signIn);
  welcome.innerText = `Welcome ${currentUser.name}`;
  updateCustomerBookings();
  manager = false;
  return currentUser;
}

function loginManager() {
  displayHotelInfo();
  hide(loginSection);
  show(navigationBar);
  show(welcome);
  show(signIn);
  show(managerFormSection);
  myBookings.innerHTML = `
    <h2> No customer chosen yet! To see bookings, choose a customer!</h2>`;
  welcome.innerText = `Welcome Manager`;
  currentSearchedCustomer.innerText = `Current Customer: None selected`;
  manager = true;
  return currentUser;
}

function changePageDisplay(event) {
  hide(manageBookingsSection);
  hide(addBookingsSection);
  hide(welcome);
  if (event.target.classList.contains("manage-bookings-button")) {
    if (currentUser != "manager") {
      updateCustomerBookings();
    }
    show(manageBookingsSection);
  } else if (event.target.classList.contains("create-bookings-button")) {
    show(addBookingsSection);
    displayHotelInfo();
    availableRooms.innerHTML = "";
  }
}

function backToLogin() {
  hide(manageBookingsSection);
  hide(addBookingsSection);
  hide(welcome);
  hide(navigationBar);
  hide(signIn);
  show(loginSection);
  currentUser = "";
  availableRooms.innerHTML = "";
  username.value = "";
  password.value = "";
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
  const today = overlookHotel.chooseADate(overlookHotel.getToday());
  if (cost === "You have not made any bookings.") {
    myBookings.innerHTML = `<h2>${cost}</h2>`;
  } else {
    cost = cost.toFixed(2);
    myBookings.innerHTML = "";
    if (!manager) {
      data.forEach((booking) => {
        myBookings.innerHTML += `
        <section class="user-booking" id="${booking.id}" data-index-number="${booking.id}>
          <p data-index-number="${booking.id}">Date: ${booking.date}</p>
          <p data-index-number="${booking.id}">Room: ${booking.roomNumber}</p>
        </section>
        `;
      });
    } else {
      data.forEach((booking) => {
        if (booking.date >= today) {
          myBookings.innerHTML += `
        <section class="user-booking" id="${booking.id}" data-index-number="${booking.id}" tabindex='0'>
          <p data-index-number="${booking.id}">Date: ${booking.date}</p>
          <p data-index-number="${booking.id}">Room: ${booking.roomNumber}</p>
          <p data-index-number="${booking.id}"class="delete">Double click to delete</p>
        </section>
        `;
        } else {
          myBookings.innerHTML += `
        <section class="user-booking" id="${booking.id}" data-index-number="${booking.id}" tabindex='0'>
          <p data-index-number="${booking.id}">Date: ${booking.date}</p>
          <p data-index-number="${booking.id}">Room: ${booking.roomNumber}</p>
        </section>
        `;
        }
      });
    }
    myBookings.innerHTML += `<h2 class='total-spent'>Total Spent: $${cost}</h2>`;
  }
}

function searchForBookableRooms() {
  event.preventDefault();
  getAllBookings();
  let date = `${calendar.value}`;
  date = date.split("-").join("/");
  chosenDate = overlookHotel.chooseADate(date);
  availableRooms.innerHTML = "";
  const room = wantedRoomType.value;
  const foundRooms = overlookHotel.findAvailableRooms(date);
  if (chosenDate === "Please choose a valid date") {
    availableRooms.innerHTML = `
    <h3 class='try-again'>We cannot search for bookings with a past or invalid date! Please try again.</h3>
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
      const withRoom = overlookHotel.filterRoomsByType(room, foundRooms);
      if (withRoom.length === 0) {
        availableRooms.innerHTML = `<h3 class="try-again">We are so sorry, there are no bookings available with your specifications!
    Please modify your search!</h3>`;
      } else {
        displayAvailableRooms(withRoom);
      }
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
  const booking = overlookHotel.createNewBooking(currentUser, id, chosenDate);
  postBooking(booking);
}

function bookRoomKeyDown(event) {
  const id = +event.target.id;
  const booking = overlookHotel.createNewBooking(currentUser, id, chosenDate);
  postBooking(booking);
}

function postBooking(bookingToSend) {
  fetch("http://localhost:3001/api/v1/bookings", {
    method: "POST",
    body: JSON.stringify(bookingToSend),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      if (!manager) {
        availableRooms.innerHTML = `
        <h3>Saved Booking!</h3>`;
      } else {
        availableRooms.innerHTML = `
        <h3>Saved Booking! Click the "My Dashboard" button to refresh hotel information.</h3>`;
      }
      getAllBookings();
    })
    .catch((err) => {
      if (currentUser === "manager") {
        availableRooms.innerHTML = `
    <h3 class='try-again'>There was a problem saving your booking! Please check to see if you have a customer selected!</h3>
    `;
      } else {
        availableRooms.innerHTML = `
        <h3 class='try-again'>There was a problem saving your booking!</h3>
        `;
      }
    });
}

function getAllBookings() {
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

function displayHotelInfo() {
  const today = overlookHotel.chooseADate(overlookHotel.getToday());
  const available = overlookHotel.findAvailableRooms(today);
  const totalRevenue = overlookHotel.totalRevenue(today);
  const percentageBooked =
    (available.length / overlookHotel.allRooms.length) * 100;
  roomsAvailableInfo.innerText = `Current number of rooms available: ${available.length}`;
  totalRevenueInfo.innerText = `Today's hotel revenue: $${totalRevenue.toFixed(
    2
  )}`;
  occupiedRoomsInfo.innerText = `Percentage of rooms booked: ${percentageBooked}%`;
}

function managerCustomerSearch() {
  event.preventDefault();
  const name = findCustomerInput.value;
  currentUser = overlookHotel.findACustomer(name);
  currentSearchedCustomer.innerText = `Current Customer: ${currentUser.name}`;
  updateCustomerBookings();
  findCustomerInput.value = "";
}

function deleteBooking(event) {
  event.preventDefault();
  let id = event.target.dataset.indexNumber;
  const found = overlookHotel.findBookingByID(id);
  const today = overlookHotel.chooseADate(overlookHotel.getToday());
  if (found.date >= today) {
    fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((data) => {
        overlookHotel.deleteABooking(id);
        myBookings.innerHTML = `<h2>${data.message}! Click the 'Manage Bookings" button to go back!</h2>`;
      })
      .catch((err) => {
        myBookings.innerHTML = `<h2 class="try-again">There was a problem deleting your data! Please click the 'Manage Bookings' button to try again!</h2>`;
      });
  } else {
    myBookings.innerHTML = `<h2 class="try-again">We cannot delete past bookings! Please click the 'Manage Bookings' button to try again!</h2>`;
  }
}

function hide(element) {
  element.classList.add("hide");
}

function show(element) {
  element.classList.remove("hide");
}
