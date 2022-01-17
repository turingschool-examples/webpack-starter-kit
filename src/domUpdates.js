import {hotel} from './scripts'

const loggedInAs = document.getElementById('loggedInAs');
const loggedInName = document.getElementById('loggedInName');
const loginDisplay = document.getElementById('loginDisplay');
const profileButton = document.getElementById('profileButton');
const usersProfile = document.getElementById('usersProfile');
const userBookings = document.getElementById('userBookings');
const userTotal = document.getElementById('userTotal');
const bookingButton = document.getElementById('bookingButton');
const bookingSection = document.getElementById('bookingSection');

const hide = (toHide) => {
toHide.forEach(element => {
  element.classList.add('hidden');
})
};

const show = (toShow) => {
toShow.forEach(element => {
  element.classList.remove('hidden');
})
};

const showHide = (toShow, toHide) => {
  hide(toHide);
  show(toShow);
};

const displayBookings = () => {
  console.log(hotel.currentCustomer.bookings)
  userBookings.innerHTML = hotel.currentCustomer.bookings.reduce((acc, booking) => {
    acc += `<div class="reservation">
              <h3>Reservation for ${booking.date}</h3><br>
              <p>Room Number : ${booking.roomNumber}</p><br>
              <p>Reservation ID : ${booking.id}</p><br>
            </div>`
    return acc
  }, "")

};

const displayTotal = () => {
  userTotal.innerText = `Total Spent with Us: $${hotel.currentCustomer.total}`
};

let domUpdates = {


displayUserName() {
  loggedInName.innerText = `${hotel.currentCustomer.name}`;
  show([loggedInAs, loggedInName]);
},

showProfile() {
  displayBookings()
  displayTotal()
  showHide([usersProfile], [loginDisplay, bookingSection])
},

showAvailableBookings() {
  showHide([bookingSection], [loginDisplay, usersProfile])
},


};

profileButton.addEventListener('click', domUpdates.showProfile);
bookingButton.addEventListener('click', domUpdates.showAvailableBookings);



export {domUpdates}
