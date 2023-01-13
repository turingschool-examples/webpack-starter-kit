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

  tripCost(destinationRepository) {
      const destination = destinationRepository.findById(this.destinationID)
      const totalLodgingCost = destination.lodgingCost * this.duration * this.travelers
      const totalFlightCost = destination.flightCost * this.travelers
      
      return (totalLodgingCost + totalFlightCost) * 1.1
    }


  getAllTrips(travelerID) {
      return this.sortDatesDescending().filter(trip => trip.userID === travelerID);
    }

  getEndDate() {
		const endDate = new Date(this.date.getTime());
		endDate.setDate(this.date.getDate() + this.duration);
		return endDate;
	}

}

export default Trip;