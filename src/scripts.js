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
// const  = document.querySelector('.')
const welcomeTraveler = document.querySelector('.welcome-traveler');
const pastTrips = document.querySelector('.past-trips-container');
const upcomingTrips = document.querySelector('.upcoming-trips-container');
const pendingTrips = document.querySelector('.pending-trips-container');
const spentBreakdown = document.querySelector('.traveler-spent-breakdown');
const locationOptions = document.querySelector('.location-options');
const tripEstimate = document.querySelector('.trip-estimate')
const displayEstimate = document.querySelector('.display-estimate');
const bookTrip = document.querySelector('.book-trip')
const clearForm = document.querySelector('.new-search')
const allInputs = document.querySelectorAll('.input')

let travelerData;
let tripData;
let destinationData;
let currentTraveler;
let tripRepo;
let trip;
let destination;

function fetchAllData() {
  Promise.all([fetchData('travelers'),fetchData('trips'),fetchData('destinations')])
    .then((data) => {
      travelerData = data[0].travelers,
      tripData = data[1].trips,
      destinationData = data[2].destinations;

      currentTraveler = new Traveler(travelerData[Math.floor(Math.random() * travelerData.length)]);
      tripRepo = new TripRepository(currentTraveler, tripData);
      trip = new Trip(tripData[0]); // data coming back undefined unless index number used - may not need this class
      destination = new Destination(destinationData[0]); // data coming back undefined unless index number used - may not need this class
      
      generatePageLoad()
  });
};

// Event Listeners
window.addEventListener('load', fetchAllData);
displayEstimate.addEventListener('click', displayTripEstimate);
clearForm.addEventListener('click', resetTripForm);

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
           <sub>Trip Lodging Cost: $ ${(trip.duration * destination.estimatedLodgingCostPerDay).toFixed(2)}</sub>
           <sub>Trip Flight Cost: $ ${(trip.travelers * destination.estimatedFlightCostPerPerson).toFixed(2)}</sub>
           <sub>Total Cost of Trip: $ ${((((trip.duration * destination.estimatedLodgingCostPerDay)) + (trip.travelers * destination.estimatedFlightCostPerPerson)) * 1.1).toFixed(2)}</sub>
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
         <div class="card single-upcoming-trip">
           <img class="image-card" src="${destination.image}" alt="${destination.alt}"/>
           <h4 class="location-name">${destination.destination}</h4>
           <sub>Trip Date: ${dayjs(trip.date).format('M/D/YYYY')}</sub>
           <sub>Travelers on This Trip: ${trip.travelers}</sub>
           <sub>Trip Length: ${trip.duration}</sub>
           <sub>Trip Lodging Cost: $ ${(trip.duration * destination.estimatedLodgingCostPerDay).toFixed(2)}</sub>
           <sub>Trip Flight Cost: $ ${(trip.travelers * destination.estimatedFlightCostPerPerson).toFixed(2)}</sub>
           <sub>Total Cost of Trip: $ ${((((trip.duration * destination.estimatedLodgingCostPerDay)) + (trip.travelers * destination.estimatedFlightCostPerPerson)) * 1.1).toFixed(2)}</sub>
         </div>`;
      };
    });
  });

  return upcomingTrip;
};

function displayTravelerPendingTrips() {
  const pendingTrip = tripRepo.pendingTrips.filter(trip => {
    destinationData.forEach(destination => {
      if (trip.destinationID === destination.id) {
        pendingTrips.innerHTML += `
         <div class="card single-pending-trip">
           <img class="image-card" src="${destination.image}" alt="${destination.alt}"/>
           <h4 class="location-name">${destination.destination}</h4>
           <sub>Trip Date: ${dayjs(trip.date).format('M/D/YYYY')}</sub>
           <sub>Travelers on This Trip: ${trip.travelers}</sub>
           <sub>Trip Length: ${trip.duration}</sub>
           <sub>Trip Lodging Cost: $ ${(trip.duration * destination.estimatedLodgingCostPerDay).toFixed(2)}</sub>
           <sub>Trip Flight Cost: $ ${(trip.travelers * destination.estimatedFlightCostPerPerson).toFixed(2)}</sub>
           <sub>Total Cost of Trip: $ ${((((trip.duration * destination.estimatedLodgingCostPerDay)) + (trip.travelers * destination.estimatedFlightCostPerPerson)) * 1.1).toFixed(2)}</sub>
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
        <p class="lodging-spent">$ ${tripRepo.getTravelCostForYearToDate(destinationData, 'estimatedLodgingCostPerDay', 'duration')}</p>
        <sub>Spent on lodging.</sub>
      </div>
      <div class="flights">
        <p class="flights-spent">$ ${tripRepo.getTravelCostForYearToDate(destinationData, 'estimatedFlightCostPerPerson', 'travelers')}</p>
        <sub>Spent of flights.</sub>
      </div>
    </div>
    <p class="total-spent">$ ${tripRepo.getTotalSpentForYearToDate(destinationData)}</p>
    <sub>Overall spent, including 10% agent fee.</sub>`;
};

function displayLocationOptions() {
  const locations = destinationData.forEach(destination => {
    locationOptions.innerHTML += `
      <option class="destination-choice" id="destinationChoice">${destination.destination}</option>`
  });

  return locations;
};

function displayTripEstimate(event) {
  event.preventDefault();
  const destinationInput = document.getElementById('destinationChoice').value;
  const durationInput = document.getElementById('tripLength').value;
  const numberTravelersInput = document.getElementById('numberTravelers').value;

  if (destinationInput === '' || durationInput === '' || numberTravelersInput === '') {
    return alert('Please enter a valid input in each field!')
  } else {
    const getDestination = destinationData.find(destination => destination.destination === destinationInput);

    const getEstimate = ((getDestination.estimatedLodgingCostPerDay * durationInput) + (getDestination.estimatedFlightCostPerPerson * numberTravelersInput) * 1.1);

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

