// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './images/company.png';
import './css/styles.css';
import Traveler from './Traveler';
import Trip from './Trip';
import { getAPIData, getOneAPIData, } from './API-calls';
import TripRepository from './TripRepository';
import DestinationRepository from './DestinationRepository';
import domUpdates from './domUpdates';

//Query Selectors

let allTripsButton = document.getElementById('allTripsButton');
let allTripsDisplay = document.querySelector('#allTripsData')
let totalYearlyCost = document.querySelector('.total-spent-section')

//Page Load
window.addEventListener('load', loadData)

// Global Variables
let traveler;
let tripRepository;
let destinationRepository;

function loadData() {
	Promise.all([getOneAPIData('travelers', 50), getAPIData('trips'), getAPIData('destinations')])
	.then(data => {
		traveler = new Traveler(data[0])
    tripRepository = new TripRepository();
    tripRepository.tripDataLoad(data[1].trips)
		destinationRepository = new DestinationRepository()
    destinationRepository.loadDestinations(data[2].destinations);
		displayAllTrips()
    totalSpentThisYear()
    })
  }

function displayAllTrips() {
  const travelerTrips = tripRepository.tripsByTraveler(traveler)
  allTripsDisplay.innerHTML += ''
  travelerTrips.forEach(trip => allTripsDisplay.innerHTML += domUpdates.updateTripInfo(trip, destinationRepository))
}

function totalSpentThisYear() {
  const totalCostofTripsAnnually = tripRepository.yearlyCost(destinationRepository, traveler)
  totalYearlyCost.innerHTML = domUpdates.updateTotalSpentPerYear(totalCostofTripsAnnually)

}























// An example of how you tell webpack to use a CSS (SCSS) file
//import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/company.png'