export const getUserPastTrips = (userId, trips) => {
  return trips.trips
    .filter((element) => element.userID === userId)
    .filter((element1) => {
      let tripDate = new Date(element1.date);
      let currentDate = new Date();
      return currentDate > tripDate;
    });
};
