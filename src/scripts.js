// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './images/company.png';
import './css/styles.css';
import Traveler from './Traveler';
import Trip from './Trip';
import { getAPIData, getOneAPIData, updateAPIData} from './API-calls';
import TripRepository from './TripRepository';
import DestinationRepository from './DestinationRepository';
import domUpdates from './domUpdates';

//Query Selectors

const allTripsButton = document.querySelector('#allTripsButton');
const allTripsDisplay = document.querySelector('#allTripsData');
const totalYearlyCost = document.querySelector('.total-spent-section');
const tripForm = document.getElementById('tripForm');
const destinationsInput = document.querySelector('#destinationsInput')
const upcomingTripsButton = document.querySelector('#upcomingTripsButton')
const presentTripsButton = document.querySelector('#presentTripsButton')
const pastTripsButton = document.querySelector('#pastTripsButton')
const pendingTripsButton = document.querySelector('#pendingTripsButton')
const allTripsData = document.querySelector('allTripsData');
const upcomingTripsData = document.querySelector('upcomingTripsData')
const presentTripsData = document.querySelector('presentTripsData');
const pastTripsData = document.querySelector('pastTripsData');
const pendingTripsData = document.querySelector('pendingTripsData');
const tripCostEstimate = document.querySelector('#tripEstimate');
const durationInput = document.querySelector('#durationInput');
const numTravelersInput = document.querySelector('#numTravelersInput');


// Global Variables
let traveler;
let tripRepository;
let destinationRepository;
let user = 50

//Page Load
window.addEventListener('load', loadData)

tripForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e)
  addNewTrip(e)
  loadData()
})

//Event Listeners
tripCostEstimate.addEventListener('click', (e) => {
  console.log('tripcostestimate listener', e)
  e.preventDefault()
  estimateTripCost(e)
})

function loadData() {
	Promise.all([getOneAPIData('travelers', user), getAPIData('trips'), getAPIData('destinations')])
	.then(data => {
		traveler = new Traveler(data[0])
    tripRepository = new TripRepository();
    tripRepository.tripDataLoad(data[1].trips)
		destinationRepository = new DestinationRepository()
    destinationRepository.loadDestinations(data[2].destinations);
		displayAllTrips()
    totalSpentThisYear()
    domUpdates.destinationsInput(destinationRepository)
    })
  }

function displayAllTrips() {
  const travelerTrips = tripRepository.tripsByTraveler(traveler)
  allTripsDisplay.innerHTML = ''
  travelerTrips.forEach(trip => allTripsDisplay.innerHTML += domUpdates.updateTripInfo(trip, destinationRepository))
}

function totalSpentThisYear() {
  const totalCostofTripsAnnually = tripRepository.yearlyCost(destinationRepository, traveler)
  totalYearlyCost.innerHTML = domUpdates.updateTotalSpentPerYear(totalCostofTripsAnnually)
}

function addNewTrip(event) {
  const newTrip = {
      "id": Date.now(),
      "userID": parseInt(user),
      "destinationID": destinationRepository.findDestByName(event.target[3].value),
      "travelers": parseInt(event.target[2].value),
      "date": event.target[0].value.replaceAll('-', '/'),
      "duration": parseInt(event.target[1].value),
      "status": "pending",
      "suggestedActivities": []
  };


  updateAPIData(newTrip, 'trips')
      .catch((error) => {
          console.log(error)
          if (error.message === "Error: Data did not load") {
              return errorNotice.innerText = "Error: Maybe gremlins?"
          } else {
              return errorNotice.innerText = error.message
          }
      });

  tripRepository.trips.push(newTrip)

  event.target.reset();
}

function estimateTripCost() {
  const destinationID = destinationRepository.findDestByName(destinationsInput.value)
  const flightCost = destinationRepository.findFlightCost(destinationID) * (numTravelersInput.value)
  const lodgingCost = destinationRepository.findLodgingCost(destinationID) * (numTravelersInput.value) * (durationInput.value)
  const total = (flightCost + lodgingCost) * 1.1;   
  domUpdates.estimatedTripCost(total)
}
























// An example of how you tell webpack to use a CSS (SCSS) file
//import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/company.png'