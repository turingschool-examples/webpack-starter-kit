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

let allTripsButton = document.getElementById('allTripsButton');
let allTripsDisplay = document.querySelector('#allTripsData');
let totalYearlyCost = document.querySelector('.total-spent-section');
let tripForm = document.getElementById('tripForm');
let destinationsInput = document.querySelector('#destinationsInput')

//Page Load
window.addEventListener('load', loadData)
tripForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(e)
  addNewTrip(e)
  loadData()
})

// Global Variables
let traveler;
let tripRepository;
let destinationRepository;
let user = 50

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






















// An example of how you tell webpack to use a CSS (SCSS) file
//import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
//import './images/company.png'