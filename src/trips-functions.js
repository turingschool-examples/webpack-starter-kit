export const getUserPastTrips = (user, trips) => {
  let userTrips = trips
  .filter((element) => element.userID === user.id)
  .filter((element1) => {
      let tripDate = new Date(element1.date);
      let currentDate = new Date();
      return currentDate > tripDate;
    });
  if (!userTrips.length) {
    return "You have no past trips";
  }
  return userTrips;
};

export const getUserPastTripDestinations = (user, trips, destinations) => {
  let userTrips = getUserPastTrips(user, trips);
  if (typeof userTrips === "string") {
    return userTrips;
  }
  return userTrips.reduce((acc, curr) => {
    destinations.forEach((element) => {
      element.id === curr.destinationID ? acc.push(element) : "";
    });
    return acc;
  }, []);
};

export const getUserUpcomingTrips = (user, trips) => {
  let userTrips = trips.filter((element) => {
    let currentDate = new Date();
    let tripDate = new Date(element.date);
    return element.userID === user.id && tripDate > currentDate;
  });
  if (!userTrips.length) {
    return "You have no upcoming trips";
  }
  return userTrips;
};

export const getUserUpcomingTripDestinations = (userId, trips, destinations) => {
  let userTrips = getUserUpcomingTrips(userId, trips);
  if (typeof userTrips === "string") {
    return userTrips;
  }
  return userTrips.reduce((acc, curr) => {
    destinations.forEach((element) => {
      element.id === curr.destinationID ? acc.push(element) : "";
    });
    return acc;
  }, []);
};

export const userTripsThisYear = (user, trips) => {
  let currentYear = new Date().getFullYear();
  let userTrips = trips.filter((trip) => {
    let tripYear = new Date(trip.date).getFullYear();
    return currentYear === tripYear && trip.userID === user.id;
  });
  if (!userTrips.length) {
    return `${currentYear} Total: $0`;
  }
  return userTrips;
};

export const getAnnualSpent = (user, trips, destinations) => {
  let places = userTripsThisYear(user, trips);

  if (typeof places === 'string') {
    return places
  }
  return  places.reduce(
    (acc, curr) => {
      destinations.forEach((destination) => {
        if (destination.id === curr.destinationID) {
          let numOfTravelersXDuration = curr.travelers * curr.duration;
          acc.totalLodgingPrice +=
            numOfTravelersXDuration * destination.estimatedLodgingCostPerDay;
          acc.totalFlightPrice +=
            curr.travelers * destination.estimatedFlightCostPerPerson;
          acc.subTotal = acc.totalLodgingPrice + acc.totalFlightPrice;
          acc.agentFee = acc.subTotal * 0.1;
          acc.total =
            acc.totalLodgingPrice + acc.totalFlightPrice + acc.agentFee;
        }
      });
      return acc;
    },
    {
      totalLodgingPrice: 0,
      totalFlightPrice: 0,
      subTotal: 0,
      agentFee: 0,
      total: 0,
    }
  );
};

export const calculateTripCost = (newTrip, destinationsData) => {
  return Object.keys(newTrip).reduce(
    (acc, curr) => {
      destinationsData.forEach((destination) => {
        if (destination.id === newTrip.destinationID) {
          acc.totalLodgingPrice =
            destination.estimatedLodgingCostPerDay * newTrip.duration;
          acc.totalFlightPrice =
            destination.estimatedFlightCostPerPerson * newTrip.travelers;
          acc.subTotal = acc.totalLodgingPrice + acc.totalFlightPrice;
          acc.agentFee = acc.subTotal * 0.1;
          acc.total =
            acc.totalLodgingPrice + acc.totalFlightPrice + acc.agentFee;
        }
      });
      return acc;
    },
    {
      totalLodgingPrice: 0,
      totalFlightPrice: 0,
      subTotal: 0,
      agentFee: 0,
      total: 0,
    }
  );
};