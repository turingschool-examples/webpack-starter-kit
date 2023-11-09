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
  let user = getUserPastTrips(userId, trips);
  return user.reduce((acc, curr) => {
    destinations.destinations.forEach((element) => {
      element.id === curr.destinationID ? acc.push(element) : "";
    });
    return acc;
  }, []);
};

export const getUserUpcomingTrips = (userId, trips) => {
  return trips.trips.filter((element) => {
    let currentDate = new Date();
    let tripDate = new Date(element.date);
    return element.userID === userId && tripDate > currentDate;
  });
};

export const getUserUpcomingTripDestinations = (userId, trips, destinations) => {
  let user = getUserUpcomingTrips(userId, trips);
  return user.reduce((acc, curr) => {
    destinations.destinations.forEach((element) => {
      element.id === curr.destinationID ? acc.push(element) : "";
    });
    return acc;
  }, []);
};

