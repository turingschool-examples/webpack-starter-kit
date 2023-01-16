import TripRepository from "./TripRepository"

let domUpdates = {

updateTripInfo(trip, destinationRepository) {  
const destination = destinationRepository.findByDestID(trip.destinationID)
	return `<article class="trip-row">
    <p class="img-dom-card"><img class= "trip-image" src="${destination.image.url}" alt="${destination.image.alt}"></p>
    <p class="trip-destination trip-card"> Destination: ${destination.destination} </p>
    <p class="trip-date trip-card"> Date: ${trip.date} </p>
    <p class="trip-duration trip-card"> Duration: ${trip.duration} </p>
    <p class="trip-travelers trip-card"> Travelers: ${trip.travelers} </p>
    <p class="trip-status trip-card"> Status: ${trip.status} </p>
	</article>`
  },

updateTotalSpentPerYear(totalSpent) {
    return `<p>Your total trip expenses for 2022 were $${totalSpent}.</p>`
  },

destinationsInput(destinationRepository) {
    destinationRepository.allDestinations.forEach(destination => destinationsInput.innerHTML += `<option value="${destination.destination}">${destination.destination}</option>`)
},

estimatedTripCost(total) {
  tripCostEstimate.innerText = `Estimated Trip Cost: $${total}`
},

signOut() {
  loginForm.classList.remove('hidden')
  document.querySelector('.main-container').classList.add('hidden')
  document.querySelector('.sign-out-button').classList.add('hidden')
},

}


export default domUpdates