import Destination from './Destination';

class DestinationRepository {
	constructor(destinationData) {
		this.allDestinations = []
	}

  loadDestinations(destinationData) {
  this.allDestinations = destinationData.map((destinationObj) => { return new Destination(destinationObj) });
  }

  findDestObject(destinationID) {
    return this.allDestinations.find(destination => destination.id === destinationID)
  }

  findFlightCost(destinationID) {
    const destination = this.findDestObject(destinationID)
    return destination.flightCost
  }

  findLodgingCost(destinationID) {
    const destination = this.findDestObject(destinationID)
    return destination.lodgingCost
  }

  findDestByName(name) {
    return this.allDestinations.find((destination) => {
			return destination.destination === name;
		}).id
  }
}

export default DestinationRepository;