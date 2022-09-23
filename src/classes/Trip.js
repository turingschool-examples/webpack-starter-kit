class Trip {
  constructor(userID, tripData, destinationData) {
    this.userID = userID;
    this.userTrips = tripData.filter(trip => trip.userID === userID);
    this.trips = tripData;
    this.destinations = destinationData;
  }
}

export default Trip;