import Trip from './Trip';

class TripRepository {
	constructor(tripData) {
    this.trips = []
	}

  tripDataLoad(tripData) {
  this.trips = tripData.map((tripObj) => { return new Trip(tripObj) })
  }

  tripsByTraveler(traveler) {
    const tripRows = this.trips.reduce((arr, trip) => {
      trip.userID === traveler.id ? arr.push(trip) : false
      return arr
    }, [])
    return tripRows
  }

  yearlyCost(destinationRepository, traveler) {
  const travelerTrips = this.tripsByTraveler(traveler)
  const tripsbyYear = travelerTrips.filter(trip => trip.date.includes(2022))
  const totalCostofTripsAnnually = tripsbyYear.reduce((num, trip) => {
  const destination = destinationRepository.findByDestID(trip.destinationID)
  num += trip.costPerTrip(destination)
  return num
  }, 0)
  return totalCostofTripsAnnually
  }

}



export default TripRepository;