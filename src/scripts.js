// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { fetchTrips, fetchDestinations, fetchLoginInfo, postTripBooking} from './apiCalls';
import {
  showAnnualCostSection,
  showBookATripSection,
  showPastTrips,
  showPendingTrips,
  showUpcomingTrips,
  signInUser,
  renderUpcomingTrips,
  renderPastTrips,
  renderCost,
  createDropDown,
  showDateError,
  showErrorMessage,
  handleSubmission,
  closeBookingMessage,
  bookATrip,
  clearErrorMessage,
} from "./domUpdates";
import {getUserPastTripDestinations, getUserUpcomingTripDestinations, getAnnualSpent } from './trips-functions';
import { getAllDestinations, makeUpcomingTrip } from './functions';
console.log('This is the JavaScript entry file - your code begins here.');


const upcomingTripsButton = document.querySelector('.upcoming-trips-button');
const pendingTripsButton = document.querySelector('.pending-trips-button');
const pastTripsButton = document.querySelector('.past-trips-button');
const annualTotalButton = document.querySelector('.annual-total-button');
const bookATripButton = document.querySelector('.book-a-trip-button');
const signInButton = document.querySelector('.sign-in-button');
const usernameInputBox = document.querySelector('.username-input-box');
const passwordInputBox = document.querySelector('.password-input-box');
const loginError = document.querySelector(".login-error");
const pages = document.querySelectorAll('.pages');

const startDateInput = document.querySelector(".start-date-input");
const endDateInput = document.querySelector(".end-date-input");
const travelersInput = document.querySelector(".travelers-input");
const destination = document.querySelector(".destination");
const submitButton = document.querySelector('.submit-button')
const closeButton = document.querySelector(".materials-symbols-outlined");


let user
let tripsData
let destinationsData
export let newTrip = {}

upcomingTripsButton.addEventListener('click', () => {
  showUpcomingTrips()
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
  user = captureLoginInfo(user);
  user = completeLogInEndpoint(user);
  handleLoginErrors(user);
  fetchLoginInfo(user)
  showUpcomingTrips()
  
    Promise.all([fetchTrips(), fetchDestinations()])
    .then((data) => {
      console.log(data);
       tripsData = data[0];
       destinationsData = data[1];
     displayUpcomingTripsDOM(tripsData, destinationsData)
     displayPastTripsDOM(tripsData, destinationsData)
     displayAnnualCostDOM(tripsData, destinationsData);

    })
    .catch((error) => {
      console.error(error);
    });
});

destination.addEventListener('click', () => {
  renderDestinations(destinationsData)
})

const bookingError = document.querySelector(".booking-error");

submitButton.addEventListener('click', () => {
  let bookingInfo = captureTripBookingData()
  let errorResponse = handleBookingErrors(bookingInfo)
   showErrorMessage(errorResponse)
  makeUpcomingTrip(bookingInfo, newTrip, tripsData, destinationsData, user)
  postTripBooking(newTrip)
  handleNumberOfTravelers(newTrip)
  clearOutInputFields()
  clearErrorMessage()
  Promise.all([fetchTrips(), fetchDestinations()])
    .then((data) => {
      console.log(data);
      tripsData = data[0];
      destinationsData = data[1];
      displayUpcomingTripsDOM(tripsData, destinationsData);
      displayPastTripsDOM(tripsData, destinationsData);
      displayAnnualCostDOM(tripsData, destinationsData);
    })
    .catch((error) => {
      console.error(error);
    });
})


const clearOutInputFields = () => {
  startDateInput.value = '';
  endDateInput.value = '';
  travelersInput.value = '';
  destination.value = ''
}








const handleNumberOfTravelers = (newTrip) => {
  if(newTrip.travelers >= 1) {
    postTripBooking(newTrip)
    displayUpcomingTripsDOM(tripsData, destinationsData)
  }
}

const handleBookingErrors = (trip) => {
  let currentDate = new Date();
  let startDate = new Date(trip.startDate);
  let endDate = new Date(trip.endDate);

  if (startDate < currentDate) {
    return "You must book for a future date";
  }
  if (endDate < startDate) {
    return "Your trip end date cannot be before your trip start date";
  }
  if (parseInt(trip.travelers) < 1) {
    return "Must have at least one traveler";
  }
  if (
    !trip.startDate ||
    !trip.endDate ||
    !trip.travelers ||
    !trip.destination
  ) {
    return "Complete all form fields before submitting";
  }
  else {
    return "Your're booking has be submitted. It should appear in Upcoming Trips!"
  }
};

const captureTripBookingData = () => {
  
  let trip = {
    startDate: startDateInput.value,
    endDate: endDateInput.value,
    travelers: parseInt(travelersInput.value),
    destination: destination.value
  }
 console.log(trip)
 return trip
}






const renderDestinations = (destinationsData) => {
  let places = getAllDestinations(destinationsData);
  createDropDown(places);
};


const displayUpcomingTripsDOM = (tripsData, destinationsData) => {
  let theUsersTrips = getUserUpcomingTripDestinations(user,tripsData,destinationsData);
  console.log("the users Trips", theUsersTrips);
  renderUpcomingTrips(theUsersTrips);
};

const displayPastTripsDOM = (tripsData, destinationsData) => {
  let theUsersTrips = getUserPastTripDestinations(user, tripsData, destinationsData)
  console.log("past trips", theUsersTrips)
  renderPastTrips(theUsersTrips)
}

const displayAnnualCostDOM = (tripsData, destinationsData) => {
  let cost = getAnnualSpent(user, tripsData, destinationsData)
  console.log(cost)
  renderCost(cost)
}

const captureLoginInfo = (user) => {
   user = {
    id: null,
    username: usernameInputBox.value,
    password: passwordInputBox.value,
    endpoint: 'http://localhost:3001/api/v1/travelers/'
  }
  return user
}

const completeLogInEndpoint = (user) => {
  user.id = parseInt(user.username.slice(8));
  user.endpoint += user.id;
  return user;
};

const handleLoginErrors = (user) => {
  if (user.id && user.id <= 50 && user.password === 'travel' && user.username.slice(0, 8) === 'traveler') {
    signInUser()
  } else {
    loginError.classList.remove("hidden");
  }
  console.log("USER",user)
}

export const getUserFirstName = (data) => {
  return data.name.split(" ")[0];
};


