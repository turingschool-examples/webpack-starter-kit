import DestinationRepository from "./DestinationRepository";

class Trip {
	constructor(tripData) {
			this.id = tripData.id;
			this.userID = tripData.userID;
			this.destinationID = tripData.destinationID;
			this.travelers = tripData.travelers;
			this.date = tripData.date;
			this.duration = tripData.duration;
			this.status = tripData.status;
			this.suggestedActivities = tripData.suggestedActivities;
	}

  costPerTrip(destination) {
    const totalLodgingCost = destination.lodgingCost * this.duration * this.travelers
    const totalFlightCost = destination.flightCost * this.travelers
    return Math.round((totalLodgingCost + totalFlightCost) * 1.1)
  }

}

export default Trip;