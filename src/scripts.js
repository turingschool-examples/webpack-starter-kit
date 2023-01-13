// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
import './images/company.png';
import './css/styles.css';
import Traveler from './Traveler';
import Trip from './Trip';
import { getAPIData, getOneAPIData, } from './API-calls';
import TripRepository from './TripRepository';
import DestinationRepository from './DestinationRepository';

//Query Selectors

let allTripsButton = document.getElementById('allTripsButton');
let allTripsDisplay = document.querySelector('#allTripsData')

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
    tripRepository = new TripRepository(data[1].trips);
		destinationRepository = new DestinationRepository(data[2].destinations);
		AllTrips()
    })
  }

function AllTrips() {
  const tripRows = tripRepository.trips.reduce((arr, trip) => {
    console.log(trip, traveler)
    trip.userID === traveler.id ? arr.push(trip) : false
    return arr
  }, [])
  allTripsDisplay.innerHTML = tripsHeader()
  allTripsDisplay.innerHTML += ''
  tripRows.forEach(trip => allTripsDisplay.innerHTML += postTripInfo(trip))
}

function postTripInfo(trip) {
  const destination = destinationRepository.findById(trip.destinationID)
	return `<li class="trip-row trip-row-header">
    <div class="img-attr"><img class= "trip-image" src="${destination.image.url}" alt="${destination.image.alt}"></div>
    <div class="trip-destination trip-attr">${destination.destination}</div>
    <div class="trip-date trip-attr">${trip.date}</div>
    <div class="trip-date trip-attr">${trip.duration}</div>
    <div class="trip-travelers trip-attr">${trip.travelers} travelers</div>
	</li>`
}

function tripsHeader() {
	return `<li class="trip-row trip-row-header">
		<div class="img-attr"></div>
		<div class="trip-destination trip-attr">Location</div>
		<div class="trip-date trip-attr">Start Date</div>
		<div class="trip-date trip-attr">Duration</div>
		<div class="trip-travelers trip-attr">Travelers</div>
	</li>`
}























// An example of how you tell webpack to use a CSS (SCSS) file
//import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/company.png'