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
const pendingTrips =document.getElementById('pendingTrips')
const destinationsSection = document.querySelector('.destinations')
const selectedDestination = document.getElementById('selectedDestination')

userDataButton.addEventListener('click', displayUserData)
tripForm.addEventListener('submit', seeEstimate)

bookTripButton.addEventListener('click', function (e) {
    e.preventDefault();
    const formData = new FormData(tripForm);;;
    const tripDetails = {
        userId: parseInt(formData.get('userID')),
        destinationId: parseInt(dropdown.value, 10),
        travelers: parseInt(formData.get('travelers'), 10),
        date: formData.get('date'),
        duration: parseInt(formData.get('duration'), 10),
        status: 'pending'
    };

    console.log('Form Data:', tripDetails)

    postTrip('http://localhost:3001/api/v1/trips', tripDetails);
});


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

const seeEstimate = (trip, destination) => {
    const estimate = caluclateEstimate(trip, destination)
    document.getElementById('estimateResult').innerText = `Estimated Cost: $${estimate}`;
    show(bookTripButton)
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