import dayjs from "dayjs";

class TripRepository {
  constructor(traveler, tripData) {
    this.allTravelerTrips = tripData.filter(trip => trip.userID === traveler.id);
    this.pastTrips = this.allTravelerTrips.filter(trip => dayjs(trip.date).$d < dayjs().$d)
    this.upcomingTrips = this.allTravelerTrips.filter(trip => dayjs(trip.date).$d >= dayjs().$d)
  };

  getUpcomingTripsByStatus(tripStatus) {
    const filteredTrips = this.upcomingTrips
      .filter(trip => trip.status === tripStatus);

    return filteredTrips;
  };

  getCost(destinationdata, cost, multiplier) {
    const getDestination = destinationdata
      .find(destination => this.allTravelerTrips
        .find(trip => trip.destinationID === destination.id));

    const lodgingCost = this.allTravelerTrips.reduce((total, trip) => {
      if (trip.destinationID === getDestination.id) {
        total += trip[multiplier] * getDestination[cost]
      };

      return total;
    }, 0);

    return lodgingCost;
  };

  getTotalTripCost(destinationData) {
    const lodgingCost = this.getCost(destinationData, 'estimatedLodgingCostPerDay', 'duration');

    const flightCost = this.getCost(destinationData, 'estimatedFlightCostPerPerson', 'travelers');

    const total = (lodgingCost + flightCost) * 1.1;

    return parseFloat(total.toFixed(2));
  };

  getTotalSpentForAnyYear(year, destinationData) {
    const yearlyCost = this.allTravelerTrips.reduce((total, trip) => {
      destinationData.forEach(destination => {
        if (dayjs(trip.date).$y === year && trip.destinationID === destination.id) {
          total += ((trip.duration * destination.estimatedLodgingCostPerDay) + (trip.travelers * destination.estimatedFlightCostPerPerson))
        }
      });

      return total;
    }, 0);

    return parseInt((yearlyCost * 1.1).toFixed(2));
  };

  getTotalSpentForYearToDate(destinationData) {
    const spentThisYear = this.pastTrips.reduce((total, trip) => {
      destinationData.forEach(destination => {
        if (dayjs(trip.date).$y === dayjs().$y && trip.destinationID === destination.id) {
          total += ((trip.duration * destination.estimatedLodgingCostPerDay) + (trip.travelers * destination.estimatedFlightCostPerPerson))
        }
      });

      return total;
    }, 0);

    return parseInt((spentThisYear * 1.1).toFixed(2))
  }
};

export default TripRepository;