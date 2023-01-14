import TripRepository from "./TripRepository"

let domUpdates = {

updateTripInfo(trip, destinationRepository) {  
const destination = destinationRepository.findByDestID(trip.destinationID)
	return `<article class="trip-row">
    <p class="img-dom-card"><img class= "trip-image" src="${destination.image.url}" alt="${destination.image.alt}"></p>
    <p class="trip-destination trip-card">Destination: ${destination.destination}</p>
    <p class="trip-date trip-card">Date: ${trip.date}</p>
    <p class="trip-duration trip-card"> Duration: ${trip.duration}</p>
    <p class="trip-travelers trip-card"> Travelers: ${trip.travelers} travelers</p>
	</article>`
  },

  updateTotalSpentPerYear(totalSpent) {
    return `<p>Your total trip expenses for this year are $${totalSpent}.</p>`

  }

}


export default domUpdates