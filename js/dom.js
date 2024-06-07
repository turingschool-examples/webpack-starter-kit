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

            const expenditures = getUserExpenditures(userID, trips, destinations, new Date().getFullYear())
            displayExpenditureData(expenditures)

            displayDestinationData(destinations.destinations)
        })
        .catch(error => console.error('There was a problem loading your data:', error))
}

const displayTravelerData = (data) => {
    if (data) {
        travelerDetails.innerHTML = `
        <p>ID: ${data.id}</p>
            <p>Name: ${data.name}</p>
            <p>Traveler Type: ${data.travelerType}</p>
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
        let tripHTML = `<h3>Approved Trips:</h3>`
        approvedTrips.forEach(trip => {
            tripHTML += `
             <p>Trip ID: ${trip.id}</p>
                <p>Date: ${trip.date}</p>
                <p>Destination ID: ${trip.destinationID}</p>
                <p>Duration: ${trip.duration} days</p>
                <p>Travelers: ${trip.travelers}</p>
                <hr>
            `
        })
        tripHTML += '<h3>Pending Trips:</h3>'
        pendingTrips.forEach(trip => {
            tripHTML = + `
             <p>Date: ${trip.date}</p>
                <p>Destination ID: ${trip.destinationID}</p>
                <p>Duration: ${trip.duration} days</p>
                <p>Travelers: ${trip.travelers}</p>
                <hr>
            `
        })
        tripDetails.innerHTML = tripHTML
    }
}

const displayExpenditureData = (expenditures) => {
    if (typeof expenditures === 'string') {
        expenditureDetails.innerHTML = `<p>${expenditures}</p>`
    } else {
        expenditureDetails.innerHTML = `
    <p>Total Expenditures for this year: $${expenditures.toFixed(2)}</p>
    `
    }
}

const displayDestinationData = (destinations) => {
    destinationDetails.innerHTML = destinations.map(destination => `
          <div>
            <p>Destination: ${destination.destination}</p>
            <p>Estimated Lodging Cost Per Day: $${destination.estimatedLodgingCostPerDay}</p>
            <p>Estimated Flight Cost Per Person: $${destination.estimatedFlightCostPerPerson}</p>
            <img src="${destination.image}" alt="${destination.destination}" width="200">
        </div>
        <hr>
        `).join('')
}


export {
    loadData,
    displayUserData,
    displayTripData,
    displayExpenditureData,
    displayDestinationData
}