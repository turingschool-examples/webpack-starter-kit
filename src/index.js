
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
  hotel.createBookings();
  hotel.createMenu();
  hotel.createCustomers();
  domUpdates.appendTotalRevenue(hotel.currentCustomer)
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

$('.search__list').on('click', '.search__customer', function() {
  $('.header__add-customer').attr("disabled", true);
  let currentName = this.innerText;
  hotel.currentCustomer = hotel.findCustomerName(currentName);
  console.log(hotel.currentCustomer)
  let booking = hotel.currentCustomer.findTodayBooking(hotel.today);
  if(booking) {
    hotel.currentRoom = hotel.bookings.findRoom(booking.roomNumber);
  }
  domUpdates.displayCustomer(hotel.currentCustomer.name, hotel.currentCustomer.calculateBill(hotel.today), hotel.currentCustomer.calculateRoomServiceCost(hotel.today), hotel.currentCustomer.calculateAllRoomService());
  domUpdates.displayBookings(hotel.currentCustomer, booking);
  domUpdates.dailyBookings(hotel.menu)
})

$(".room_header").on('click', function() {
  let prop = $(this).attr('data-sort');
  let newTable = hotel.bookings.sortByType(prop, hotel.today);
  domUpdates.appendSortedRooms(newTable);
});

$('.available-rooms-table').on('click', '.table__room-number', function() {
  let roomNumber = parseInt($(this).attr('data-room'));
  hotel.currentRoom = hotel.bookings.findRoom(roomNumber);
  let currentRoom = hotel.currentCustomer.findTodayBooking(hotel.today);
  currentRoom ? domUpdates.showUpgradeRoomPrompt(hotel.currentRoom) : domUpdates.showBookRoomPrompt(hotel.currentRoom);
});

$('.room_booking-button').on('click', function() {
  hotel.bookings.bookRoom(hotel.currentRoom.number, hotel.today, hotel.currentCustomer);
  domUpdates.displayCurrentCustomer(hotel.currentCustomer.name, hotel.currentCustomer.calculateBill(hotel.today), hotel.currentCustomer.calculateRoomServiceCost(hotel.today), hotel.currentCustomer.calculateAllRoomService());
  let booking = hotel.currentCustomer.findTodayBooking(hotel.today);
  domUpdates.displayBookings(hotel.currentCustomer, booking);
  $('.room__booking-box').hide();
  hotel.displayNewDay();
});

$('.customer-bookings-table').on('click', '.table__room-number', function() {
  let roomNumber = parseInt($(this).attr('data-room'));
  hotel.currentDate = parseInt($(this).attr('data-date'))
  hotel.currentRoom = hotel.bookings.findRoom(roomNumber);
  domUpdates.showUnbookWarning(hotel.currentRoom);
});

$('.customer__unbook-room').on('click', function() {
  hotel.bookings.unbookRoom(hotel.currentRoom.number, hotel.currentDate, hotel.currentCustomer);
  domUpdates.displayCurrentCustomer(hotel.currentCustomer.name, hotel.currentCustomer.calculateBill(hotel.today), hotel.currentCustomer.calculateRoomServiceCost(hotel.today), hotel.currentCustomer.calculateAllRoomService());
  let booking = hotel.currentCustomer.findTodayBooking(hotel.today);
  domUpdates.displayBookings(hotel.currentCustomer, booking);
  $('.customer__unbook-box').hide();
  hotel.displayNewDay();
});

$('.customer__order-room-service').on('click', function() {
  domUpdates.jumpToOrders();
})

$('.today-menu-table').on('click', '.table__menu-row', function() {
  hotel.currentCustomer.currentDish = $(this).attr('data-dish');
  hotel.currentCustomer.currentPrice = $(this).attr('data-price');
  domUpdates.showFoodLabel(hotel.currentCustomer.currentDish, hotel.currentCustomer.currentPrice)
})

$('.orders__food-button').on('click', function(){
  hotel.currentCustomer.orderRoomService(hotel.currentCustomer.currentDish, hotel.today);
  domUpdates.displayCurrentCustomer(hotel.currentCustomer.name, hotel.currentCustomer.calculateBill(hotel.today), hotel.currentCustomer.calculateRoomServiceCost(hotel.today), hotel.currentCustomer.calculateAllRoomService());
  let booking = hotel.currentCustomer.findTodayBooking(hotel.today);
  domUpdates.displayBookings(hotel.currentCustomer, booking);
  $('.customer__unbook-box').hide();
  $('.orders__food-box').hide();
  hotel.displayNewDay();
})

$('.room_upgrade-button').on('click', function() {
  console.log(hotel.currentCustomer)
  let oldRoom = hotel.currentCustomer.findTodayBooking(hotel.today).roomNumber;
  hotel.bookings.upgradeRoom(oldRoom, hotel.currentRoom.number, hotel.today, hotel.currentCustomer);
  domUpdates.displayCurrentCustomer(hotel.currentCustomer.name, hotel.currentCustomer.calculateBill(hotel.today), hotel.currentCustomer.calculateRoomServiceCost(hotel.today), hotel.currentCustomer.calculateAllRoomService());
  let booking = hotel.currentCustomer.findTodayBooking(hotel.today);
  domUpdates.displayBookings(hotel.currentCustomer, booking);
  $('.room__upgrade-box').hide();
});

$('.customer__search-input').on('keypress', function(e){
  var key = e.which;
  if(key === 13) {
    let day = $('.customer__search-input').val();
    let orders = hotel.bookings.findDailyRoomServiceOrders(day);
    console.log(orders)
    domUpdates.updateOrderTable(orders);
  }
});

$('.customer__search-button').on('click', function () {
  let day = $('.customer__search-input').val();
  let orders = hotel.bookings.findDailyRoomServiceOrders(day);
  domUpdates.updateOrderTable(orders);
});


