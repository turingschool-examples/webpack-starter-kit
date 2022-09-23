class Trip {
  constructor(userID, tripData) {
    this.userID = userID;
    this.userTrips = tripData.filter(trip => trip.userID === userID);
    this.tripData = tripData;
  }
}

export default Trip;