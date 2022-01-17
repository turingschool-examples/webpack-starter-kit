import {hotel} from './scripts'

const loggedInAs = document.getElementById('loggedInAs');
const loggedInName = document.getElementById('loggedInName');
const loginDisplay = document.getElementById('loginDisplay');
const profileButton = document.getElementById('profileButton');
const bookingButton = document.getElementById('bookingButton');
const usersProfile = document.getElementById('usersProfile');
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

let domUpdates = {


displayUserName() {
  loggedInName.innerText = `${hotel.currentCustomer.name}`;
  show([loggedInAs, loggedInName]);
},

showProfile() {
  showHide([usersProfile], [loginDisplay, bookingSection])
},

showAvailableBookings() {
  showHide([bookingSection], [loginDisplay, usersProfile])
},

};

profileButton.addEventListener('click', domUpdates.showProfile);
bookingButton.addEventListener('click', domUpdates.showAvailableBookings);



export {domUpdates}
