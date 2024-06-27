import { fetchData, postTrip } from './api.js'
import { getUserTrips, getUserExpenditures, getDestinationName, calculateEstimate } from './index.js'

const userDataButton = document.getElementById('get-user-data-button')
const travelerDetails = document.getElementById('travelerDetails')
const tripDetails = document.getElementById('tripDetails')
const expenditureDetails = document.getElementById('expenditureDetails')
const destinationDetails = document.getElementById('destinationDetails')
const dropdown = document.getElementById('destinationDropdown')
const userInfo = document.querySelector('.user-info')
const inputGroup = document.querySelector('.input-group')
const formsSection = document.querySelector('.forms-section')
const tripForm = document.getElementById('tripForm')
const bookTripButton = document.getElementById('bookTripButton')
const destinationsSection = document.querySelector('.destinations')
const myTripsNav = document.getElementById('myTripsNav')
const bookTripNav = document.getElementById('bookTripNav')
const destinationsNav = document.getElementById('destinationsNav')
let estimateResult = document.getElementById('estimateResult')

myTripsNav.addEventListener('click', () => {
    show(tripDetails)
    hide(formsSection)
    hide(destinationsSection)
})

bookTripNav.addEventListener('click', () => {
    show(formsSection)
    hide(tripDetails)
    hide(destinationsSection)
})

destinationsNav.addEventListener('click', () => {
    show(destinationsSection)
    show(formsSection)
    hide(tripDetails)
})

document.addEventListener('DOMContentLoaded', function () {})
userDataButton.addEventListener('click', displayUserData)
    
bookTripButton.addEventListener('click', function (e) {
    e.preventDefault()
    const formData = new FormData(tripForm);
    const tripObj = {
        userId: parseInt(formData.get('tripUserID')),
        destinationId: parseInt(dropdown.value, 10),
        travelers: parseInt(formData.get('travelers'), 10),
        date: formData.get('date'),
        duration: parseInt(formData.get('duration'), 10),
        status: 'pending'
    }

    postTrip('http://localhost:3001/api/v1/trips', tripObj)
    .then(() => {
        loadData()
        .then(([_, trips, destinations]) => {
            const userID = tripObj.userId
            const tripData = getUserTrips(userID, trips)
            displayTripData(tripData, destinations)
        })
        .catch(error => console.error('Error loading new trip:', error))
    })
    .catch(error => console.error('Error posting trip:', error))
    show(tripDetails)
    hide(destinationsSection)
})


tripForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const formData = new FormData(tripForm)
    const userId = formData.get('tripUserID')
    const tripDetails = {
        userId,
        destinationId: parseInt(dropdown.value, 10),
        travelers: parseInt(formData.get('travelers'), 10),
        date: formData.get('date'),
        duration: parseInt(formData.get('duration'), 10),
        status: 'pending'
    }

    seeEstimate(tripDetails)
})


const loadData = () => {
    return Promise.all([
        fetchData('http://localhost:3001/api/v1/travelers/'),
        fetchData('http://localhost:3001/api/v1/trips/'),
        fetchData('http://localhost:3001/api/v1/destinations/')])
}

function displayUserData() {
    let userID = document.getElementById('userID').value
    const userPassword = document.getElementById('user-password').value
    const errorMessage = document.querySelector('.error-message')
    const userIDPattern = /^traveler(\d{1,2}|50)$/


    if (!userID || !userPassword || userPassword !== 'travel' || !userIDPattern.test(userID)) {
        errorMessage.innerText = 'Please enter correct Username and Password';
        setTimeout(() => {
            errorMessage.innerText = ''
        }, 1000)
        return;
    }
    userID = parseInt(userID.replace('traveler', ''))

    loadData()
        .then(([travelers, trips, destinations]) => {

            const travelerData = travelers.travelers.find(traveler => traveler.id === userID)
            displayTravelerData(travelerData)

            const tripData = getUserTrips(userID, trips)
            displayTripData(tripData, destinations)

            const expenditures = getUserExpenditures(tripData.tripsByYear, destinations,)
            displayExpenditureData(expenditures)

            displayDestinationData(destinations.destinations)
            show(userInfo)
            hide(inputGroup)
            show(formsSection)

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

const displayTripData = (data, destinations) => {

    if (typeof data === 'string') {
        tripDetails.innerHTML = `<p>${data}</p>`
    } else {
        const { tripsByYear, pendingTrips } = data
        let tripHTML = ''

        for (const [year, trips] of Object.entries(tripsByYear)) {
            tripHTML += `<div class="year-column"><h4>Your Trips In ${year}</h4>`
            trips.forEach(trip => {
                tripHTML += `
             <div class="grid-item">
                        <p>Date: ${trip.date}</p>
                        <p>Destination: ${getDestinationName(trip.destinationID, destinations)}</p>
                        <p>Duration: ${trip.duration} days</p>
                        <p>Travelers: ${trip.travelers}</p>
                    </div>
            `
            })
        }

        tripHTML += '<h3 class="grid-item full-width">Pending Trips:'
        if (!pendingTrips.length) {
            tripHTML += '<p>No pending trips at this time.</p></h3>'
        } else {
            pendingTrips.forEach(trip => {
                tripHTML += `
                    <div class="grid-item">
                        <p>Date: ${trip.date}</p>
                        <p>Destination: ${getDestinationName(trip.destinationID, destinations)}</p>
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
            expenditureHTML += `<p>${year}: $${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`;
        }
        expenditureDetails.innerHTML = expenditureHTML;
    }
}


const displayDestinationData = (destinations) => {
    dropdown.innerHTML = destinations.map(destination =>
        `<option value="${destination.id}">${destination.destination}</option>`
    ).join('');
    destinationDetails.innerHTML = destinations.map(destination => `
          <div class="grid-item">
            <p>${destination.destination}</p>
            <p>Accommodation: $${destination.estimatedLodgingCostPerDay}</p>
            <p>Airfare: $${destination.estimatedFlightCostPerPerson}</p>
            <img src="${destination.image}" alt="${destination.destination}" width="200">
        </div>
        `).join('')
}

const seeEstimate = (trip) => {
    hide(tripDetails)
    show(estimateResult)
    show(bookTripButton)
    fetchData('http://localhost:3001/api/v1/destinations/')
    .then(destinations => {
        const userDestination = destinations.destinations.find(place => place.id === trip.destinationId)
        if(userDestination) {
            const estimate = calculateEstimate(trip, userDestination)
            estimateResult.innerText = `Estimated Cost: $${estimate.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
        } else {
            estimateResult.innerText = 'Destination not found.'
        }
    })
    .catch(error => {
        console.error('Could not fetch your destination because:', error)
    })
}

const hide = (element) => {
    element.classList.add('hidden')
}

const show = (element) => {
    element.classList.remove('hidden')
}

export {
    loadData,
    displayUserData,
    displayTripData,
    displayExpenditureData,
    displayDestinationData,
    seeEstimate,
    hide,
    show,
}