// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { fetchTavelers, fetchDestinations } from './apiCalls';
import { showAnnualCostSection, showBookATripSection, showPastTrips, showPendingTrips, showUpcomingTrips, signInUser } from './domUpdates';
console.log('This is the JavaScript entry file - your code begins here.');


const upcomingTripsButton = document.querySelector('.upcoming-trips-button');
const pendingTripsButton = document.querySelector('.pending-trips-button');
const pastTripsButton = document.querySelector('.past-trips-button');
const annualTotalButton = document.querySelector('.annual-total-button');
const bookATripButton = document.querySelector('.book-a-trip-button');
const signInButton = document.querySelector('.sign-in-button');
const usernameInputBox = document.querySelector('.username-input-box');
const passwordInputBox = document.querySelector('.password-input-box');

let userInfo

upcomingTripsButton.addEventListener('click', () => {
  showUpcomingTrips()
})

pendingTripsButton.addEventListener('click', () => {
  showPendingTrips()
})

pastTripsButton.addEventListener('click', () => {
  showPastTrips()
})

annualTotalButton.addEventListener('click', () => {
  showAnnualCostSection()
})

bookATripButton.addEventListener('click', () => {
  showBookATripSection()
})

signInButton.addEventListener("click", () => {
  let obj = captureLoginInfo(userInfo);
  validateLoginInfo(obj)
});

const captureLoginInfo = (userInfo) => {
   userInfo = {
    username: usernameInputBox.value,
    password: passwordInputBox.value,
    endpoint: 'http://localhost:3001/api/v1/travelers/'
  }
  console.log(userInfo)
  return userInfo
}

const validateLoginInfo = (obj) => {
  if (obj.password === "travel") {
    obj.endpoint += obj.username.slice(8);
  }
  console.log(obj)
  return obj;
};
