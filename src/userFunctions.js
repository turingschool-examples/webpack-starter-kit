import {  travelersData, updatedWelcomeMessage, displayTrips  } from "./domUpdates"
const userNameError = document.querySelector('.error-message-username');
const passwordError = document.querySelector('.error-message-password');
const tripDisplay = document.querySelector('.display-user-info');
let travelersLoggedIn = []
let travelerId;

export const loginTraveler = (username, password) => {
    if( password !== 'travel'){
        passwordError.classList.remove('hidden')
    } 
     username = usernameInput.value.trim();

    if (username.startsWith("Traveler") && password === "travel") {
         travelerId = Number(username.slice(8));

         travelersLoggedIn = travelersData.find(traveler => traveler.id === travelerId);
        
    if (travelersLoggedIn) {
        userNameError.classList.add('hidden');
        passwordError.classList.add('hidden');
        updatedWelcomeMessage(travelersLoggedIn)
    } else {
        userNameError.classList.remove('hidden');
        passwordError.classList.remove('hidden');
    }
    }
}
export const travelerTrips = (trips, status = 'approved', yearsAgo = 3) => {
    tripDisplay.innerHTML = ''
    const currentDate = new Date();

    const startDate = new Date();
    startDate.setFullYear(currentDate.getFullYear() - yearsAgo);
    // Filter trips based on the provided status and date range
    const filteredTrips = trips.filter(trip => {
        const tripDate = new Date(`${trip.date.split('/')[0]}/${trip.date.split('/')[1]}/${trip.date.split('/')[2]}`);
        return trip.status === status && tripDate <= startDate && trip.userID === travelerId;
    });

    return filteredTrips;
}

export const calculateTripCost = (userId, travelerTrips) => {
    const dates = new Date();
}