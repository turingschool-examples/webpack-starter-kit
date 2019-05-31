// import $ from 'jquery';
import "./css/base.scss";
// import './images/turing-logo.png'
import "./images/overlook-logo.png";
import fetch from "cross-fetch";
import RoomRepo from "./RoomRepo";
import RoomServiceRepo from "./RoomServiceRepo";
import data from "../src/data-sample";
import domUpdates from "./domUpdates";

var customersData, roomsData, bookingsData, roomServicesData;

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users")
  .then(response => response.json())
  .then(data => {
    customersData = data.users;
  });

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms")
  .then(response => response.json())
  .then(data => {
    roomsData = data.rooms;
  });

fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings")
  .then(response => response.json())
  .then(data => {
    bookingsData = data.bookings;
  });

fetch(
  "https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices"
)
  .then(response => response.json())
  .then(data => {
    roomServicesData = data.roomServices;
  });

//   setTimeout(timer, 1000);

// function timer() {
//   console.log(customersData);
//   console.log(roomsData);
//   console.log(bookingsData);
//   console.log(roomServicesData);
// }

function today() {
  var fullDate = new Date();
  var twoDigitMonth =
    fullDate.getMonth().length + 1 === 1
      ? fullDate.getMonth() + 1
      : "0" + (fullDate.getMonth() + 1);
  var currentDate =
    fullDate.getDate() + "/" + twoDigitMonth + "/" + fullDate.getFullYear();
  return currentDate;
}

setTimeout(start, 1000);

function start() {
  const roomRepo = new RoomRepo(bookingsData, roomsData, today());
  roomRepo.roomsAvailable();
  roomRepo.percentageRoomsOccupied();

  const roomServiceRepo = new RoomServiceRepo(roomServicesData, today());
  roomServiceRepo.todayTotalIncome();
}

const showTime = () => {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;

  var time = h + ":" + m + " " + session;
  domUpdates.time(time);

  setTimeout(showTime, 1000);
}
showTime();

const date = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const days = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
  ];
  let current_datetime = new Date();
  let formatted_date =
    days[current_datetime.getDay()] +
    " | " +
    months[current_datetime.getMonth()] +
    " " +
    current_datetime.getDate() +
    ", " +
    current_datetime.getFullYear();
  domUpdates.date(formatted_date);
};

date()