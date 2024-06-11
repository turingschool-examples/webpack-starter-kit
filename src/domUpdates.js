import { fetchSingleTravelerData, fetchTravelersData, fetchTripsData, fetchDestinationData } from "./fetchCalls";
import { loginTraveler, travelerTrips, postNewTrip, fetchUpdatedTripsData, calculateTripCost, totalTripCost } from "./userFunctions";

const userMessage = document.querySelector('.welcome-traveler');
const loginButton = document.getElementById('submitLogin');
const loginSection = document.querySelector('.login-section');
const userTotal = document.querySelector('.user-total');
const bookNewTrip = document.querySelector('.book-trip');
const tripDisplay = document.querySelector('.display-user-info');
const buttonSection = document.querySelector('.buttonSection');
const bookTrip = document.querySelector('.newTrips');
const pastTripsButton = document.querySelector('.pastTrips');
const pendingTripsButton = document.querySelector('.pendingTrips');
const upcomingTripsButton = document.querySelector('.upcomingTrips')
const totalCostText = document.querySelector('.total-text');
const totalCostAmount = document.querySelector('.total-text-cost');
const selectionForForm = document.querySelector('.selection');
const newTripBookedButton = document.querySelector('.confirmButton');
const getEstimateButton = document.querySelector('.estimateButton');
const travelerTotalInput = document.querySelector('.travelerTotal')
const durationTotalInput = document.querySelector('.durationTotal');
const dateInput = document.querySelector('.dateStart');

const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');

let travelersData = []
let allTripsData = []
let allDestinationsData = []
let firstName;


loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('usernameInput').value;
const passwordInput = document.getElementById('passwordInput').value;
    loginTraveler(usernameInput, passwordInput);
    tripDisplay.innerHTML = `<h3>${firstName}'s Trips, click a button to see any previous, pending, or upcoming trips!</h3>`
    totalTripCost()
});

bookTrip.addEventListener('click', (e)=> {
    e.preventDefault()
    bookNewTrip.classList.remove('hidden');
    tripDisplay.classList.add('hidden')
    getAllLocations()
})

pastTripsButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookNewTrip.classList.add('hidden');
    tripDisplay.classList.remove('hidden')
    const pastTrips = travelerTrips(allTripsData, 'approved', 3);
    tripDisplay.innerHTML = `<h3>${firstName}'s Trips for the past three years</h3>`
    displayTrips(pastTrips)
})

pendingTripsButton.addEventListener('click', (e) =>{
    e.preventDefault();
    bookNewTrip.classList.add('hidden');
    tripDisplay.classList.remove('hidden')
    const pastTrips = travelerTrips(allTripsData, 'pending', 1, 0);
    tripDisplay.innerHTML = `<h3>${firstName}'s pending trips for the last year</h3>`
    displayTrips(pastTrips)
})

upcomingTripsButton.addEventListener('click', (e) => {
    e.preventDefault();
    bookNewTrip.classList.add('hidden');
    tripDisplay.classList.remove('hidden')
    tripDisplay.innerHTML = `<h3>${firstName}'s upcoming trips are waiting for agent approval</h3>`
})

newTripBookedButton.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        
        await postNewTrip(); 
        const updatedTrips = await fetchUpdatedTripsData();

        const filteredTrips = travelerTrips(updatedTrips, 'pending', 1); 
        displayTrips(filteredTrips);

        bookNewTrip.classList.add('hidden');
        tripDisplay.classList.remove('hidden');
        tripDisplay.innerHTML = `<h3>${firstName}'s pending trips for the last year</h3>`
    } catch (error) {
        console.error('Error updating trips:', error);
    }
});

getEstimateButton.addEventListener('click', (e) => {
    e.preventDefault();
    calculateTripCost()
})

export const fetchingAllData = () => {
    Promise.all([
        fetchTravelersData(), 
        fetchTripsData(),
        fetchDestinationData(),
    ]).then(([travelersDataResponse, tripsData, destinationsData]) => {
       travelersData = travelersDataResponse
       allTripsData = tripsData
       allDestinationsData = destinationsData
    }).catch(err => ('Could not properly fetch Traveler information', err))
}

   export const displayTrips = async(trips) => {
    tripDisplay.innerHTML += '<div class="trip-container"></div>'
    if (trips.length > 0) {
        trips.forEach(trip => {
            const destinations = allDestinationsData.find(destination => destination.id === trip.destinationID);
            let travelpics;
            if (destinations) {
                travelpics = destinations.image;
            }
        
        tripDisplay.innerHTML += `
        <div class="trip-display">
        <img src="${travelpics}" class="location-pic" alt="destination-pic">
        <div class="trip-details">
                <p class="tripLocation">Location: ${destinations.destination}</p>
                <p class="pastTripDate">Date: ${trip.date}</p>
                <p class="pastTripDuration">Duration: ${trip.duration} days</p>
                <p class="totalTravelers">Travelers: ${trip.travelers}</p>
                <p class="pastTripStatus">Status: ${trip.status}</p>
            </div>
        </div>`
        })
} else {
    tripDisplay.innerHTML = '<h3>No trips to show</h3>';
    }
}

export const getAllLocations = () => {
    let allDestinations = [];
    allDestinationsData.forEach(dest => {
        allDestinations.push(`<option>${dest.destination}</option>`)
    })
    allDestinations.sort()
    selectionForForm.innerHTML = `${allDestinations}`
}

export const updatedWelcomeMessage = (person) => {
    buttonSection.classList.remove('hidden')
    tripDisplay.classList.remove('hidden')
    userTotal.classList.remove('hidden')
    loginSection.classList.add('hidden')
    userMessage.classList.remove('hidden')
   firstName = person.name.split(' ')[0]
    totalCostText.innerText = `${firstName}'s trip cost for the past 3 years`
    userMessage.innerText = `Welcome Back, ${firstName}!`
    tripDisplay.innerHTML = `<h3>${firstName}'s Trips, please choose a button to see trips!</h3>`
}



export {
    travelersData,
    allTripsData,
    allDestinationsData 

}