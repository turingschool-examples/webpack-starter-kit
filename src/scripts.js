
import './css/base.scss';
import {customersData, userData, roomsData, bookingsData, postBooking} from './apiCalls';
import Hotel from './classes/hotel-class';

let hotel;

const loadPage = () => {
  Promise.all([customersData, userData, roomsData, bookingsData])
    .then(data => {
      hotel = new Hotel(data[3], data[2], data[0])
    })
}
