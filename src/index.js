import $ from 'jquery';
import './css/base.scss';
import Customer from './customer';
import domUpdates from './domupdates'

import './images/breakfast.svg'
import './images/specialist-user.svg'
import './images/open-book.svg'
import './images/home.svg'
import Data from './data';
import Room from './rooms';
import Dashboard from './dashboard';
import Booking from './bookings'
import Order from './orders';

let data;
const currentDate = new Date().toLocaleDateString('en-GB')
// const currentDate = "21/10/2019"
createDataSet()
/*--------------event listeners---------------*/
$('.nav-list__tab').click(function() {
  var tab_id = $(this).attr('data-tab');

  $('.nav-list__tab').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#" + tab_id).addClass('current');
})

$('.header__load-button').on('click', function() {
  $('.header__splash-page').fadeOut()
  domUpdates.displayCurrentDate(currentDate)
  displayAvailableRooms()
  displayDailyDebts()
  percentAvailableRooms()
})

$('#tab-2__customer-search-btn').on('click', function() {
  event.preventDefault()
  let customer = new Customer(data.customerData)
  domUpdates.searchForCustomer(customer)
  setCurrentCustomer($('#header__customer-name').text())
  console.log(data.currentCustomer)

})

$('#tab-2__create-customer-btn').on('click', function() {
  event.preventDefault()
  domUpdates.addNewCustomer(data)
  let customer = new Customer(data.customerData)
  domUpdates.searchForCustomer(customer)
  setCurrentCustomer($('#header__customer-name').text())

})

$('#nav-list__order').on('click', function() {
  let order = new Order(data.serviceData)
  if (data.currentCustomer === null) {
    $('#order-tab__yes-customer').hide()
    $('#order-tab__no-customer').show()
    domUpdates.showDailyOrders(order, currentDate)
  } else {
    $('#order-tab__no-customer').hide()
    $('#order-tab__yes-customer').show()
    domUpdates.customerTotalSpent(data.currentCustomer.id, order)
    domUpdates.customerDailySpent(currentDate, order, data.currentCustomer.id)
    domUpdates.breakdownByDate(data.currentCustomer.id, order)
  }
})

$('#nav-list__booking').on('click', function() {
  let booking = new Booking(data.bookingData)
  if (data.currentCustomer === null) {
    $('#booking-tab__yes-customer').hide()
    $('#booking-tab__no-customer').show()
    domUpdates.mostPopularBookingDate(booking)
  } else {
    $('#booking-tab__no-customer').hide()
    $('#booking-tab__yes-customer').show()
    domUpdates.allCustomerBookings(data.currentCustomer.id, booking)
  }
})

$('#roomtype-form__submit').on('click', function() {
  event.preventDefault()
  let room = new Room(data.roomData)
  let roomType = ($('#roomtype-form__option').val())
  domUpdates.availableTypeByDate(currentDate, roomType, data.bookingData, room)
})

$('table').on('click', function(e) {
  e.target.className === 'book-it-btn' ? console.log(this.closest('tr')) : null;
})

function createDataSet() {
  data = new Data()
  fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices', 'serviceData')
  fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users', 'customerData')
  fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms', 'roomData')
  fetchData('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings', 'bookingData')
}

function fetchData(url, path) {
  fetch(url)
    .then(response => response.json())
    .then(myjson => data[path] = Object.values(myjson)[0])
    .catch(err => console.log(err))
}

/*-----------Dashboard------------*/

function displayAvailableRooms() {
  let room = new Room(data.roomData)
  domUpdates.displayTodaysAvailableRooms(currentDate, data.bookingData, room)
}

function displayDailyDebts() {
  let dashboard = new Dashboard(data.bookingData, data.serviceData, data.roomData)
  domUpdates.totalDailyDebts(currentDate, dashboard)
}

function percentAvailableRooms() {
  let booking = new Booking(data.bookingData)
  domUpdates.percentageAvailableRooms(currentDate, booking)
}

function setCurrentCustomer(name) {
  let customer = new Customer(data.customerData)
  data.currentCustomer = customer.findByName(name)
}

// function addBooking(customer, date, room) {

// }







