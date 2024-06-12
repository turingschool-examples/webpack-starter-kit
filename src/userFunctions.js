import {  travelersData, updatedWelcomeMessage, displayTrips, allDestinationsData, allTripsData  } from "./domUpdates"
import { calculateTotalTripCost } from "./testedFunctions";
const userNameError = document.querySelector('.error-message-username');
const passwordError = document.querySelector('.error-message-password');
const tripDisplay = document.querySelector('.display-user-info');

let travelersLoggedIn = []
export let travelerId;

export const loginTraveler = (username, password) => {
    if( password === 'travel' && username.length > 8){
        document.querySelector('.submitLogin').disabled = true;
    }  else {
        document.querySelector('.submitLogin').disabled = false;
    }
     username = usernameInput.value.trim();

    if (username.startsWith("Traveler") && password === "travel") {
         travelerId = Number(username.slice(8));

         travelersLoggedIn = travelersData.find(traveler => traveler.id === travelerId);
        
    if (travelersLoggedIn) {
        userNameError.classList.remove('hidden');
        passwordError.classList.remove('hidden')
        updatedWelcomeMessage(travelersLoggedIn)
    } else {
        userNameError.classList.add('hidden');
        passwordError.classList.add('hidden');
    }
}
}

export const postNewTrip =  async() => {
    const newTripBookedButton = document.querySelector('.confirmButton');
    const destinationValue = document.getElementById('selectionMenu').value;
    const dateValue = document.querySelector('.dateStart').value;
    const guestCount = document.querySelector('.travelerTotal').value;
    const durationDays = document.querySelector('.durationTotal').value;

    newTripBookedButton.disabled = true
    if (!destinationValue) {
        alert('Please select a destination.');
        newTripBookedButton.disabled = false
    }

    if (!dateValue) {
        alert('Please enter a start date.');
        newTripBookedButton.disabled = false
    }

    if (!guestCount.match(/^\d+$/)) {
        alert('Please enter a valid number for the guest count.');
        newTripBookedButton.disabled = false
    }

    if (!durationDays.match(/^\d+$/)) {
        alert('Please enter a valid number for the duration.');
        newTripBookedButton.disabled = false
    }

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
    }).then(response => response.json()).then(data => data).catch(error =>
    console.error('Error:', error))
}

export const fetchUpdatedTripsData =  async () => {
        fetch('http://localhost:3001/api/v1/trips', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch updated trips');
            }
            return response.json()
        })
        .then(data => {
            const updated = travelerTrips(data.trips, 'pending', 1, travelerId)
            displayTrips(updated)
            
        })
        .catch((error) => {
        console.error('Error fetching updated trips:', error);
        return []; 
    })
    }
    export const travelerTrips = (trips, status = 'pending', yearsAgo = 0, Id) => {
        const currentDate = new Date();
    
        
        const startDate = new Date();
        startDate.setFullYear(currentDate.getFullYear() - yearsAgo);
    
        
        const filteredTrips = trips.filter(trip => {
            const tripDate = new Date(`${trip.date.split('/')[0]}/${trip.date.split('/')[1]}/${trip.date.split('/')[2]}`);
            
            return trip.status === status && tripDate >= startDate  && trip.userID === Id;
        });
        console.log(filteredTrips)
        return filteredTrips;
    }

// export const totalTripCost = () => {
//     const totalCostAmount = document.querySelector('.total-text-cost');
    
//         const threeYearsAgo = new Date();
//         threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    
//         const recentTrips = allTripsData.filter(trip => {
//                 const tripDate = new Date(`${trip.date.split('/')[0]}/${trip.date.split('/')[1]}/${trip.date.split('/')[2]}`); 
//             return tripDate >= threeYearsAgo && trip.userID === travelerId && trip.status === 'approved';
//         });
//         const totalCost = recentTrips.reduce((acc, trip) => {
        
//         const matchingDestination = allDestinationsData.find(destination => destination.id === trip.destinationID); // Assuming trip.destinationID is the correct field
//         if (matchingDestination) {
            
//             const tripCosts = (matchingDestination.estimatedFlightCostPerPerson + matchingDestination.estimatedLodgingCostPerDay * trip.duration);
//         acc += tripCosts
//         }
//         return acc;
//     }, 0);

//     totalCostAmount.innerHTML = `$${totalCost.toFixed(2)}`;
// }


export const totalTravelerSpentAmount = () => {
    const totalCostAmount = document.querySelector('.total-text-cost');
    const totalCost = calculateTotalTripCost(allTripsData, allDestinationsData, travelerId);
    totalCostAmount.innerHTML = `$${totalCost}`;
}