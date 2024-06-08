import { fetchData } from './api.js'
import { getUserTrips, getUserExpenditures } from './index.js'

const travelInfo = document.getElementById('travel-info')
const userDataButton = document.getElementById('get-user-data-button')
const travelerDetails = document.getElementById('travelerDetails')
const tripDetails = document.getElementById('tripDetails')
const expenditureDetails = document.getElementById('expenditureDetails')
const destinationDetails = document.getElementById('destinationDetails');

userDataButton.addEventListener('click', displayUserData)

const loadData = () => {
    return Promise.all([
        fetchData('http://localhost:3001/api/v1/travelers/'),
        fetchData('http://localhost:3001/api/v1/trips/'),
        fetchData('http://localhost:3001/api/v1/destinations/')])
}

function displayUserData() {
    const userID = parseInt(document.getElementById('userID').value)
    if (!userID) {
        travelInfo.innerText = 'Please enter a User ID'
        return;
    }
    loadData()
        .then(([travelers, trips, destinations]) => {
            const travelerData = travelers.travelers.find(traveler => traveler.id === userID)
            displayTravelerData(travelerData)

            const tripData = getUserTrips(userID, trips, destinations)
            displayTripData(tripData)

            const expenditures = getUserExpenditures(userID, trips, destinations,)
            displayExpenditureData(expenditures)

            displayDestinationData(destinations.destinations)
        })
        .catch(error => console.error('There was a problem loading your data:', error))
}

const displayTravelerData = (data) => {
    if (data) {
        travelerDetails.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Your Travel Penchant: ${data.travelerType}</p>
        `
    } else {
        travelerDetails.innerHTML = `${data.error}`
    }
}

const displayTripData = (data) => {

    if (typeof data === 'string') {
        tripDetails.innerHTML = `<p>${data}</p>`
    } else {
        const { approvedTrips, pendingTrips } = data
        let tripHTML = '<h3>Approved Trips:</h3>'

        approvedTrips.forEach(trip => {
            tripHTML += `
                <div class="grid-item">
                    <p>Date: ${trip.date}</p>
                    <p>Destination ID: ${trip.destinationID}</p>
                    <p>Duration: ${trip.duration} days</p>
                    <p>Travelers: ${trip.travelers}</p>
                </div>
            `
        })

        tripHTML += '<h3 class="grid-item full-width">Pending Trips:'
        if (!pendingTrips.length) {
            tripHTML += '<p>No pending trips at this time.</p></h3>'
        } else {
            pendingTrips.forEach(trip => {
                tripHTML += `
                    <div class="grid-item">
                        <p>Date: ${trip.date}</p>
                        <p>Destination ID: ${trip.destinationID}</p>
                        <p>Duration: ${trip.duration} days</p>
                        <p>Travelers: ${trip.travelers}</p>
                    </div>
                `
            })
        }

        tripDetails.innerHTML = tripHTML;
    }
}


const displayExpenditureData = (expenditures) => {
    if (typeof expenditures === 'string') {
        expenditureDetails.innerHTML = `<p>${expenditures}</p>`;
    } else {
        let expenditureHTML = '<h3>Expenditures by Year:</h3>';
        for (const [year, amount] of Object.entries(expenditures)) {
            expenditureHTML += `<p>${year}: $${amount.toFixed(2)}</p>`;
        }
        expenditureDetails.innerHTML = expenditureHTML;
    }
}


const displayDestinationData = (destinations) => {
    destinationDetails.innerHTML = destinations.map(destination => `
          <div class="grid-item">
            <p>Destination: ${destination.destination}</p>
            <p>Estimated Lodging Cost Per Day: $${destination.estimatedLodgingCostPerDay}</p>
            <p>Estimated Flight Cost Per Person: $${destination.estimatedFlightCostPerPerson}</p>
            <img src="${destination.image}" alt="${destination.destination}" width="200">
        </div>
        `).join('')
}


export {
    loadData,
    displayUserData,
    displayTripData,
    displayExpenditureData,
    displayDestinationData
}