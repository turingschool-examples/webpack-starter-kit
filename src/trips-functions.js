export const getUserPastTrips = (userId, trips) => {
  let userTrips = trips.trips
    .filter((element) => element.userID === userId)
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

export const getUserPastTripDestinations = (userId, trips, destinations) => {
  let userTrips = getUserPastTrips(userId, trips);
  if (typeof userTrips === "string") {
    return userTrips;
  }
  return userTrips.reduce((acc, curr) => {
    destinations.destinations.forEach((element) => {
      element.id === curr.destinationID ? acc.push(element) : "";
    });
    return acc;
  }, []);
};

export const getUserUpcomingTrips = (userId, trips) => {
  let userTrips = trips.trips.filter((element) => {
    let currentDate = new Date();
    let tripDate = new Date(element.date);
    return element.userID === userId && tripDate > currentDate;
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
    destinations.destinations.forEach((element) => {
      element.id === curr.destinationID ? acc.push(element) : "";
    });
    return acc;
  }, []);
};

export const userTripsThisYear = (userId, trips) => {
  let currentYear = new Date().getFullYear();
  let userTrips = trips.trips.filter((trip) => {
    let tripYear = new Date(trip.date).getFullYear();
    return currentYear === tripYear && trip.userID === userId;
  });
  if (!userTrips.length) {
    return `${currentYear} Total: $0`;
  }
  return userTrips;
};


//make sad path
// Should say yearly total 0 if none for the year