import Destination from './Destination';

class DestinationRepository {
	constructor(destinationData) {
		this.allDestinations = []
	}

  loadDestinations(destinationData) {
  this.allDestinations = destinationData.map((destinationObj) => { return new Destination(destinationObj) });
  }

	findByDestID(destinationID) {
		return this.allDestinations.find((destination) => {
			return destination.id === destinationID;
		})
	}

  // findFlightCost(destinationID) {
  //   const cost = this.allDestinations.findByDestID(destinationID).estimatedFlightCostPerPerson 
  //   return cost
  // }

  // findLodgingCost(destinationID) {
  //   const cost = this.allDestinations.findByDestID(destinationID).estimatedLodgingCostPerDay 
  //   return cost
  // }

  findDestByName(name) {
    return this.allDestinations.find((destination) => {
			return destination.destination === name;
		}).id
  }
}

export default DestinationRepository;