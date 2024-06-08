import { fetchSingleTravelerData, fetchTravelersData, fetchTripsData, fetchDestinationData } from "./fetchCalls";


const userMessage = document.querySelector('.welcome-traveler');
const loginButton = document.querySelector('.submitLogin');
const userNameError = document.querySelector('.error-message-username');
const passwordError = document.querySelector('.error-message-password');
const loginSection = document.querySelector('.login-section');
const userTotal = document.querySelector('.user-total');
const bookNewTrip = document.querySelector('.book-trip');
const tripDisplay = document.querySelector('.display-user-info');

const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('passwordInput');

let travelersData = []
let allTripsData = []
let allDestinationsData = []
let travelersLoggedIn = []


loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginTraveler(usernameInput.value, passwordInput.value);
});

export const fetchingAllData = () => {
    Promise.all([
        fetchTravelersData(), 
        fetchTripsData(),
        fetchDestinationData()
    ]).then(([travelersDataResponse, tripsData, destinationsData]) => {
       travelersData = travelersDataResponse
       allTripsData = tripsData
       allDestinationsData = destinationsData
    }).catch(err => ('Could not properly fetch Traveler information', err))
}

export const loginTraveler = (username, password) => {
    if( password !== 'travel'){
        passwordError.classList.remove('hidden')
    } 
     username = usernameInput.value.trim();

    if (username.startsWith("Traveler") && password === "travel") {
        const travelerId = Number(username.slice(8));

         travelersLoggedIn = travelersData.find(traveler => traveler.id === travelerId);
        // console.log("TRAV:", travelers.name)
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

export const updateTravelerData = () => {

}


export const updatedWelcomeMessage = (person) => {
    tripDisplay.classList.remove('hidden')
    userTotal.classList.remove('hidden')
    loginSection.classList.add('hidden')
    userMessage.classList.remove('hidden')
    const firstName = person.name.split(' ')[0]
    userMessage.innerText = `Welcome Back, ${firstName}!`
}

