import $ from 'jquery';
// import './css/base.scss';
// import './images/turing-logo.png'
import fetch from 'cross-fetch';


var usersData, roomsData, bookingsData, roomServicesData;

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(response => response.json())
  .then(data => {
    usersData = data.users;
  });

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(response => response.json())
  .then(data => {
    roomsData = data.rooms;
  });
  
  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
  .then(response => response.json())
  .then(data => {
    bookingsData = data.bookings;
  });

  fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
  .then(response => response.json())
  .then(data => {
    roomServicesData = data.roomServices;
  });

  

function timer() {
  console.log(usersData);
  console.log(roomsData);
  console.log(bookingsData);
  console.log(roomServicesData);
}
setTimeout(timer, 200);


