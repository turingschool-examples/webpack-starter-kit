import dayjs from "dayjs";

class TripRepository {
  constructor(traveler, tripData) {
    this.allTravelerTrips = tripData
      .filter(trip => trip.userID === traveler.id)
      .sort((first, last) => dayjs(last.date).$d - dayjs(first.date).$d);

    this.pastTrips = this.allTravelerTrips
      .filter(trip => dayjs(trip.date).format('YYYY/MM/DD') < dayjs().format('YYYY/MM/DD'));

    this.upcomingTrips = this.allTravelerTrips
      .filter(trip => dayjs(trip.date).format('YYYY/MM/DD') >= dayjs().format('YYYY/MM/DD'))
      .filter(trip => trip.status === 'approved');

    this.pendingTrips = this.allTravelerTrips
      .filter(trip => dayjs(trip.date).format('YYYY/MM/DD') >= dayjs().format('YYYY/MM/DD'))
      .filter(trip => trip.status === 'pending');
  };

  getTravelCostForYearToDate(destinationdata, cost, multiplier) {
    const travelCost = this.allTravelerTrips.reduce((total, trip) => {
      destinationdata.forEach(destination => {
        if (dayjs(trip.date).$y === dayjs().$y && trip.status === 'approved' && trip.destinationID === destination.id) {
          total += trip[multiplier] * destination[cost];
        };
      });

      return total;
    }, 0);

    return travelCost.toFixed(2);
  };

  getTotalSpentForYearToDate(destinationData) {
    const spentThisYear = this.allTravelerTrips.reduce((total, trip) => {
      destinationData.forEach(destination => {
        if (dayjs(trip.date).$y === dayjs().$y && trip.status === 'approved' && trip.destinationID === destination.id) {
          total += ((trip.duration * destination.lodgingCost) + (trip.travelers * destination.flightCost));
        };
      });

      return total;
    }, 0);

    return (spentThisYear * 1.1).toFixed(2);
  };
};

export default TripRepository;