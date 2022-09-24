class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.travelerID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.numberOfTravelers = tripData.travelers;
    this.tripDate = tripData.date;
    this.tripDuration = tripData.duration;
    this.tripStatus= tripData.status
    this.suggestedActivities = tripData.suggestedActivities
  };
};

export default Trip;