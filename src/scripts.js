
import './css/base.scss';
import {customersData, userData, roomsData, bookingsData, postBooking} from './apiCalls';
import Hotel from './classes/hotel-class';
import {domUpdates} from './domUpdates';

const userNameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');


let hotel;
let customerId;



const loadPage = (id) => {
  Promise.all([customersData, userData(id), roomsData, bookingsData])
    .then(data => {
      console.log(data[1])
      hotel = new Hotel(data[3].bookings, data[2].rooms, data[0].customers)
      hotel.setCurrentCustomer(data[1])
      hotel.listCustomerBookings();
      hotel.calculateTotal();
      domUpdates.displayUserName();
    })
}

const setUserId =() => {
  customerId = parseInt(userNameInput.value.substring(8))
}

const bookRoom = (event) => {
  let data = {
    userID: hotel.currentCustomer.id,
    date: hotel.selectedDate.replaceAll('-', '/'),
    roomNumber: parseInt(event.target.value),
  }
  console.log(data)
  return postBooking(data)
  .then(data => {
    hotel.bookRoom(data.newBooking)
  })
}

const login = (event) => {
  event.preventDefault()
  setUserId()
  if(customerId < 50 && 0 < customerId && passwordInput.value === 'overlook2021'){
    loadPage(customerId)
  }
}

loginButton.addEventListener('click', login)

export {hotel, bookRoom}
