
import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js'
import Hotel from './hotel.js'

let hotel;
let apiRequestUser = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users').then(function (response) {
  return response.json()
});
let apiRequestRooms = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms').then(function (response) {
  return response.json()
});
let apiRequestBookings = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings').then(function (response) {
  return response.json()
});
let apiRequestRoomService = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/room-services/roomServices').then(function (response) {
  return response.json()
});
let combinedData = {
  "apiRequestUser": {},
  "apiRequestRooms":{},
  "apiRequestBookings":{},
  "apiRequestRoomService":{}
};
Promise.all([ apiRequestUser, apiRequestRooms, apiRequestBookings, apiRequestRoomService ]).then(function (values) {
  combinedData["apiRequestUser"] = values[0];
  combinedData["apiRequestRooms"] = values[1];
  combinedData["apiRequestBookings"] = values[2];
  combinedData["apiRequestRoomService"] = values[3];
  createHotel(combinedData)
}).then(() => {
  doAllThings();
});

function doAllThings() {
  domUpdates.startOnMainTab();
  domUpdates.getDate()
  domUpdates.displayRoomsAvailable(hotel);
  domUpdates.displayRoomsOccupied(hotel);
  hotel.createCustomers();
  hotel.createBookings();
  $('.main__aside--input').on('keydown', customerSearch);
  $('.main__section--tabs a').on('click', function(event) {
    let _this = this;
  domUpdates.changeTabs(event, _this);
  });
}

function createHotel(data) {
  hotel = new Hotel(data.apiRequestUser.users, data.apiRequestRooms.rooms, data.apiRequestBookings.bookings, data.apiRequestRoomService.roomServices);
  console.log(hotel);
}

function getDate() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = `${yyyy}/${mm}/${dd}`;
  $('.span__date').html(today);
}

function customerSearch() {
    let searchText = $('.main__aside--input').val().toLowerCase();
    $('.header__add-customer').attr("disabled", false);
    let matches = hotel.customers.filter(customer => {
      return customer.name.toLowerCase().includes(searchText);
    })
    if(searchText.length === 0) {
      $('.header__add-customer').attr("disabled", true);
      matches = [];
      $('.search__list').empty();
    }
    domUpdates.displaySearchResults(matches);
}