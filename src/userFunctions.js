import {  travelersData, updatedWelcomeMessage, displayTrips, allDestinationsData, allTripsData  } from "./domUpdates"
const userNameError = document.querySelector('.error-message-username');
const passwordError = document.querySelector('.error-message-password');
const tripDisplay = document.querySelector('.display-user-info');
const loginButton = document.getElementById('submitLogin');
let travelersLoggedIn = []
let travelerId;

export const loginTraveler = (username, password) => {
    // if( password.value === 'travel'  &&  username.value.length >= 8){
    //     loginButton.disabled = false
    // }
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
export const travelerTrips = (trips, status = 'pending', yearsAgo = 0) => {
    tripDisplay.innerHTML = ''; 
    const currentDate = new Date();

    
    const startDate = new Date();
    startDate.setFullYear(currentDate.getFullYear() - yearsAgo);

    
    const filteredTrips = trips.filter(trip => {
        const tripDate = new Date(`${trip.date.split('/')[0]}/${trip.date.split('/')[1]}/${trip.date.split('/')[2]}`);
        
        return trip.status === status && tripDate >= startDate  && trip.userID === travelerId;
    });

    return filteredTrips;
}

export const postNewTrip = async () => {
    const destinationValue = document.getElementById('selectionMenu').value;
    const dateValue = document.querySelector('.dateStart').value;
    const guestCount = document.querySelector('.travelerTotal').value;
    const durationDays = document.querySelector('.durationTotal').value;

const newDestination = allDestinationsData.find(location => location.destination === destinationValue)
    const locationId = newDestination.id

    const usersDate = dateValue.split("-").join("/")
    const id = Date.now().toString()
    const status = 'pending'
    let suggestActiviites = []

    const bookingData = {
        id: id,
        userID: travelerId,
        destinationID: locationId,
        travelers: guestCount,
        date: usersDate,
        duration: durationDays,
        status: status,
        suggestedActivities: suggestActiviites
    };

    fetch('http://localhost:3001/api/v1/trips', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
    })
   .then(response => response.json())
   .then(data => data)
   .catch((error) => {
        console.error('Error:', error);
    });

    return bookingData;
}
export const fetchUpdatedTripsData = async () => {
    try {
        const response = await fetch('http://localhost:3001/api/v1/trips', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch updated trips');
        }

        const data = await response.json();
        return data.trips; 
    } catch (error) {
        console.error('Error fetching updated trips:', error);
        return []; 
    }
};

export const calculateTripCost = () => {
    const destinationValue = document.getElementById('selectionMenu').value;
    const dateValue = document.querySelector('.dateStart').value;
    const guestCount = document.querySelector('.travelerTotal').value;
    const durationDays = document.querySelector('.durationTotal').value;

    const costPerDestination = allDestinationsData.find(location => location.destination === destinationValue);

    const costOfFlight = costPerDestination.estimatedFlightCostPerPerson * guestCount
    const costOfLodging = costPerDestination.estimatedLodgingCostPerDay * durationDays
    const totalRoundTrip = costOfFlight + costOfLodging;
    const agentsFeeForTrip = (totalRoundTrip * 1.1);
    tripDisplay.classList.remove('hidden')
    tripDisplay.innerHTML = `Your total estimated cost for the trip is $${agentsFeeForTrip}`
    setTimeout(() => {
        tripDisplay.classList.add('hidden');
        tripDisplay.innerHTML = '';
    }, 5000); 
}

export const totalTripCost = () => {
    const totalCostAmount = document.querySelector('.total-text-cost');
    
        const threeYearsAgo = new Date();
        threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    
        const recentTrips = allTripsData.filter(trip => {
                const tripDate = new Date(`${trip.date.split('/')[0]}/${trip.date.split('/')[1]}/${trip.date.split('/')[2]}`); 
            return tripDate >= threeYearsAgo && trip.userID === travelerId;
        });
        const totalCost = recentTrips.reduce((acc, trip) => {
        
        const matchingDestination = allDestinationsData.find(destination => destination.id === trip.destinationID); // Assuming trip.destinationID is the correct field
        if (matchingDestination) {
            
            acc += matchingDestination.estimatedFlightCostPerPerson + matchingDestination.estimatedLodgingCostPerDay;
        }
        return acc;
    }, 0);

    totalCostAmount.innerHTML = `$${totalCost.toFixed(2)}`;
}