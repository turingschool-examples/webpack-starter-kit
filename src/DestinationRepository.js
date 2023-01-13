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

  findFlightCost(destinationID) {
    const cost = this.allDestinations.findByDestID(destinationID).estimatedFlightCostPerPerson 
    return cost
  }

  findLodgingCost() {
    const cost = this.allDestinations.findByDestID(destinationID).estimatedLodgingCostPerDay 
    return cost
  }

  // findTotalFlightCost() {
  //   this.findFlightCost(destinationID) * 
  // }
}

export default DestinationRepository;