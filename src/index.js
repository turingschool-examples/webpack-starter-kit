import $ from 'jquery';
import './css/base.scss';
import './images/home.svg';
import './images/banknote.svg';
import './images/bed.svg';
import './images/user.svg';
import './images/view.svg';
import domUpdates from './domUpdates.js';
import fetch from 'cross-fetch';
import FinanceRepo from './FinanceRepo';
import UserRepo from './UserRepo';
import BookingRepo from './BookingRepo';
import RoomServiceRepo from './RoomServiceRepo';
import OccupancyRepo from './OccupancyRepo';

let userData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    userData = dataset;
  });

let roomData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    roomData = dataset.data;
  });

let bookingData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    bookingData = dataset.data;
  });

let roomServiceData;
fetch("https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    roomServiceData = dataset.data;
  });


$( document ).ready(function() {
  setTimeout(function () {
    const userRepo = new UserRepo(userData);
    const bookingRepo = new BookingRepo(bookingData);
    const roomServiceRepo = new RoomServiceRepo(roomServiceData);
    const occupancyRepo = new OccupancyRepo(roomData, bookingData);
    const financeRepo = new FinanceRepo(roomData, bookingData, roomServiceData);

    $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').removeClass('current');
      $('.tab-content').removeClass('current');

      $(this).addClass('current');
      $("#" + tab_id).addClass('current');
    })



  }, 500);
});
