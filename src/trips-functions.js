export const getUserPastTrips = (userId, trips) => {
  return trips.trips
  .filter((element) => element.userID === userId)
  .filter((element1) => {
      let tripDate = new Date(element1.date);
      let currentDate = new Date();
      return currentDate > tripDate;
    });
};

export const getUserPastTripsDestinations = (userId, trips, destinations) => {
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

