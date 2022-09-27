// Import styling
import './css/styles.css';
import './images/travel-background.png';

// Import local files
import { fetchData, postData } from './apiCalls.js';
import Traveler from './classes/Traveler.js';
import Trip from './classes/Trip.js';
import Destination from './classes/Destination.js';
import TripRepository from './classes/TripRepository.js';

// Import third party libraries
import dayjs from 'dayjs';

// Query Selectors
const welcomeTraveler = document.querySelector('.welcome-traveler');
const pastTrips = document.querySelector('.past-trips-container');
const upcomingTrips = document.querySelector('.upcoming-trips-container');
const pendingTrips = document.querySelector('.pending-trips-container');
const spentBreakdown = document.querySelector('.traveler-spent-breakdown');
const locationOptions = document.querySelector('.location-options');
const tripEstimate = document.querySelector('.trip-estimate')
const allInputs = document.querySelectorAll('.input')
const errorMessage = document.querySelector('.error-message')

const displayEstimate = document.querySelector('.display-estimate');
const bookTrip = document.querySelector('.book-trip')
const clearForm = document.querySelector('.new-search')

let destinationInput = document.getElementById('locationOptions');
let calendarInput = document.getElementById('calendarInput');
let durationInput = document.getElementById('tripLength');
let numberTravelersInput = document.getElementById('numberTravelers');

// Global Variables
let travelerData;
let tripData;
let destinationData;
let currentTraveler;
let tripRepo;

function fetchAllData() {
  Promise.all([fetchData('travelers'),fetchData('trips'),fetchData('destinations')])
    .then((data) => {
      travelerData = data[0].travelers;
      tripData = data[1].trips.map(trip => new Trip(trip));
      destinationData = data[2].destinations.map(destination =>  new Destination(destination));

      currentTraveler = new Traveler(travelerData[Math.floor(Math.random() * travelerData.length)]);
      tripRepo = new TripRepository(currentTraveler, tripData);
      
      generatePageLoad();
  });
};

// Event Listeners
window.addEventListener('load', fetchAllData);
displayEstimate.addEventListener('click', displayTripEstimate);
clearForm.addEventListener('click', resetTripForm);
bookTrip.addEventListener('click', bookNewTrip);

// Helper Functions
function getTravelCost(cost, multiplier) {
  return (cost * multiplier).toFixed(2);
}

function getTotalTripCost(singleDestination, singleTrip) {
  const lodgingCost = singleDestination.lodgingCost * singleTrip.duration;
  const flightCost = singleDestination.flightCost * singleTrip.travelers;

  const total = (lodgingCost + flightCost) * 1.1;

  return total.toFixed(2);
};

// DOM Functions
function generatePageLoad() {
  displayTravelerGreeting();
  displayTravelerPastTrips();
  displayTravelerUpcomingTrips();
  displayTravelerPendingTrips();
  displayTravelerSpentBreakdown();
  displayLocationOptions();
};

function displayTravelerGreeting() {
  welcomeTraveler.innerHTML = `Hello, ${currentTraveler.name}!`;
};

function displayTravelerPastTrips() {
  const pastTrip = tripRepo.pastTrips.filter(trip => {
    destinationData.forEach(destination => {
      if (trip.destinationID === destination.id) {
        pastTrips.innerHTML += `
        <div class="card single-past-trip">
          <img class="image-card" src="${destination.image}" alt="${destination.alt}"/>
          <h4 class="location-name">${destination.destination}</h4>
          <sub>Trip Date: ${dayjs(trip.date).format('M/D/YYYY')}</sub>
          <sub>Travelers on This Trip: ${trip.travelers}</sub>
          <sub>Trip Length: ${trip.duration} days</sub>
          <sub>Trip Lodging Cost: $ ${getTravelCost(destination.lodgingCost, trip.duration)}</sub>
          <sub>Trip Flight Cost: $ ${getTravelCost(destination.flightCost, trip.travelers)}</sub>
          <sub>Total Cost of Trip: $ ${getTotalTripCost(destination, trip)}</sub>
        </div>`;
      };
    });
  });

  return pastTrip;
};

function displayTravelerUpcomingTrips() {
  const upcomingTrip = tripRepo.upcomingTrips.filter(trip => {
    destinationData.forEach(destination => {
      if (trip.destinationID === destination.id) {
        upcomingTrips.innerHTML += `
        <div class="card single-past-trip">
          <img class="image-card" src="${destination.image}" alt="${destination.alt}"/>
          <h4 class="location-name">${destination.destination}</h4>
          <sub>Trip Date: ${dayjs(trip.date).format('M/D/YYYY')}</sub>
          <sub>Travelers on This Trip: ${trip.travelers}</sub>
          <sub>Trip Length: ${trip.duration} days</sub>
          <sub>Trip Lodging Cost: $ ${getTravelCost(destination.lodgingCost, trip.duration)}</sub>
          <sub>Trip Flight Cost: $ ${getTravelCost(destination.flightCost, trip.travelers)}</sub>
          <sub>Total Cost of Trip: $ ${getTotalTripCost(destination, trip)}</sub>
          <br><sub>${trip.status.toUpperCase()}</sub>
        </div>`;
      };
    });
  });

  return upcomingTrip;
};

function displayTravelerPendingTrips() {
  pendingTrips.innerHTML = ''
  const pendingTrip = tripRepo.pendingTrips.filter(trip => {
    destinationData.forEach(destination => {
      if (trip.destinationID === destination.id) {
        pendingTrips.innerHTML += `
        <div class="card single-past-trip">
          <img class="image-card" src="${destination.image}" alt="${destination.alt}"/>
          <h4 class="location-name">${destination.destination}</h4>
          <sub>Trip Date: ${dayjs(trip.date).format('M/D/YYYY')}</sub>
          <sub>Travelers on This Trip: ${trip.travelers}</sub>
          <sub>Trip Length: ${trip.duration} days</sub>
          <sub>Trip Lodging Cost: $ ${getTravelCost(destination.lodgingCost, trip.duration)}</sub>
          <sub>Trip Flight Cost: $ ${getTravelCost(destination.flightCost, trip.travelers)}</sub>
          <sub>Total Cost of Trip: $ ${getTotalTripCost(destination, trip)}</sub>
          <br><sub>${trip.status.toUpperCase()}</sub>
        </div>`
      };
    });
  });

  return pendingTrip;
};

function displayTravelerSpentBreakdown() {
  return spentBreakdown.innerHTML = `
    <div class="breakdown">
      <div class="lodging">
        <p class="lodging-spent">$ ${tripRepo.getTravelCostForYearToDate(destinationData, 'lodgingCost', 'duration')}</p>
        <sub>Spent on lodging.</sub>
      </div>
      <div class="flights">
        <p class="flights-spent">$ ${tripRepo.getTravelCostForYearToDate(destinationData, 'flightCost', 'travelers')}</p>
        <sub>Spent of flights.</sub>
      </div>
    </div>
    <p class="total-spent">$ ${tripRepo.getTotalSpentForYearToDate(destinationData)}</p>
    <sub>Overall spent, including 10% agent fee.</sub>`;
};

function displayLocationOptions() {
  const locations = destinationData.forEach(destination => {
    locationOptions.innerHTML += `
      <option value="${destination.id}">${destination.destination}</option>`
  });

  return locations;
};

function displayTripEstimate(event) {
  event.preventDefault();

  if (destinationInput.value === '' || calendarInput.value === '' || durationInput.value === '' || numberTravelersInput.value === '') {
    return errorMessage.innerHTML = 'Please enter valid inputs in each field';
  } else {
    errorMessage.innerHTML = '';

    const getDestination = destinationData
      .find(destination => destination.id === parseInt(destinationInput.value));

    const getEstimate = ((getDestination.lodgingCost * parseInt(durationInput.value)) + (getDestination.flightCost * parseInt(numberTravelersInput.value)) * 1.1);

    return tripEstimate.innerHTML = `$ ${getEstimate.toFixed(2)}`;
  };
};

function resetTripForm(event) {
  event.preventDefault();

  const clearInputs = allInputs.forEach(input => input.value = '');
  tripEstimate.innerHTML = '';

  return clearInputs;
};

// POST Functions
function bookNewTrip(event) {
  event.preventDefault();

  if (destinationInput.value === '' || calendarInput.value === '' || durationInput.value === '' || numberTravelersInput.value === '') {
    return errorMessage.innerHTML = 'Please enter valid inputs in each field'
  } else {
    errorMessage.innerHTML = '';
    
    const newDestination = destinationData
      .find(destination => destination.id === parseInt(destinationInput.value))
 
    const newTrip = {
      id: Date.now(),
      userID: currentTraveler.id,
      destinationID: newDestination.id,
      travelers: numberTravelersInput.value,
      date: dayjs(calendarInput.value).format('YYYY/MM/DD'),
      duration: durationInput.value,
      status: "pending",
      suggestedActivities: []
    };

    Promise.all([postData('trips', newTrip)])
    .then(response => {
      tripRepo.allTravelerTrips.push(new Trip(response[0].newTrip));
      tripRepo.pendingTrips.push(new Trip(response[0].newTrip));
      displayTravelerPendingTrips();
    });
  };

  allInputs.forEach(input => input.value = '');
  tripEstimate.innerHTML = '';
};

