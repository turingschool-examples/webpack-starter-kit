import dayjs from 'dayjs';

class Trip {
  constructor(userID, tripData, destinationData) {
    this.userID = userID;
    this.userTrips = tripData.filter(trip => trip.userID === userID);
    this.trips = tripData;
    this.destinations = destinationData;
  };

  getTripStatus(tripStatus) {
    const filteredTrips = this.userTrips
      .filter(trip => trip.status === tripStatus);

    return filteredTrips;
  };

  getTripCost(cost, multiplier) {
    const tripCost = this.userTrips.reduce((total, trip) => {
      this.destinations.forEach(destination => {
        if (trip.destinationID === destination.id) {
          total = destination[cost] * trip[multiplier];
        };
      });

      return total;
    }, 0);

    return tripCost;
  };

  getTripCostWithAgentFee() {
    const lodgingCost = this.getTripCost('estimatedLodgingCostPerDay', 'duration');
    const flightCost = this.getTripCost('estimatedFlightCostPerPerson', 'travelers');

    const total = (lodgingCost + flightCost) * 1.1;

    return parseFloat(total.toFixed(2));
  };

  getTotalCostPerYear(year) {
    const yearlyCost = this.userTrips.reduce((total, trip) => {
      if (dayjs(trip.date).$y === year) {
        total += this.getTripCostWithAgentFee()
      };

      return total;
    }, 0);

    return parseInt(yearlyCost.toFixed(2));
  };
};

export default Trip;