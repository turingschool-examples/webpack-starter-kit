import { getAllCustomerRoomBookings, getTotalCostForAllBookings } from './user.js';
// import { allData } from './scripts.js';
import { getAllData } from './api-calls.js';

//<><>query selectors<><>
const myBookingsButton = document.getElementById('my-bookings-button');
const bookRoomButton = document.getElementById('book-a-room-button');
const bookingDisplay = document.querySelector('.content-display');
let allData;
// console.log('yo', allData)
//<><>event handlers<><>
export const load = () => {
    document.addEventListener('DOMContentLoaded', function() {
    // console.log('here')
getAllData()
.then(apiData => {
    allData = apiData;
    console.log('all', allData)
    // let customer = getRandomUser(allData[0].customers);
    // let bookings = allData[2].bookings;
    // let rooms = allData[1].rooms;
    // console.log('user', customer) 
    // let userBookings = getAllCustomerRoomBookings(customer, bookings, rooms);
    // console.log(userBookings)
})
// console.log('1', allData)
// customer, bookings, rooms
})
}



//<><>functions<><>
