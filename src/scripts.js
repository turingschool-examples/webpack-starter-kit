
import './css/base.scss';
import {customersData, userData, roomsData, bookingsData, postBooking} from './apiCalls';
import Hotel from './classes/hotel-class';
import {domUpdates} from './domUpdates';

const userNameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const loginButton = document.getElementById('loginButton');


let hotel;

const loadPage = () => {
  Promise.all([customersData, userData, roomsData, bookingsData])
    .then(data => {
      hotel = new Hotel(data[3].bookings, data[2].rooms, data[0].customers)
      hotel.setCurrentCustomer(hotel.findCustomer("customer1", 'overlook2021'))
      domUpdates.displayUserName()
    })
}



// const login = () => {
//
// }

window.addEventListener('load', loadPage);
// loginButton.addEventListener('click', login)

export {hotel}
