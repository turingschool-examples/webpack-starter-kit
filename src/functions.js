export const getAllDestinations = (destinations) => {
  return destinations.map((place) => place.destination);
};

export const handleDateErrors = (trip) => {
  let currentDate = new Date();

  let startDate = new Date(trip.startDate);

  console.log(currentDate);
  let endDate = new Date(trip.endDate);

  if (startDate < currentDate) {
    return "You must book for a future date";
  }
  if (endDate < startDate) {
    return "Your trip end date cannot be before your trip start date";
  }
};

// export const makeUpcomingTrip = (trip) => {
//   let startDate = new Date(trip.startDate);
//   let endDate = new Date(trip.endDate);
//   let durationInMilliSeconds = endDate - startDate;
//   let durationInDays = durationInMilliSeconds / (1000 * 60 * 60 * 24);
//   return durationInDays;
// };

export const makeUpcomingTrip = (bookingInfo, newTrip, tripsData, destinations, user) => {
  let num = getDestinationId(bookingInfo, destinations, newTrip)
  let startDate = new Date(bookingInfo.startDate);
  let endDate = new Date(bookingInfo.endDate);
  let durationInMilliSeconds = endDate - startDate;
  let durationInDays = durationInMilliSeconds / (1000 * 60 * 60 * 24);

  newTrip.id = tripsData.length + 1;
  newTrip.userID = user.id;
  newTrip.destinationID = num;

  newTrip.destination = bookingInfo.destination;
  newTrip.travelers = bookingInfo.travelers;
  newTrip.date = bookingInfo.startDate.split("-").join("/");
  newTrip.duration = durationInDays;
  newTrip.status = "pending";
  newTrip.suggestedActivities = [];
};


export const getDestinationId = (bookingInfo, destinations) => {
  let thePlace = destinations.find(
    (place) => place.destination === bookingInfo.destination
  ).id;
  return thePlace;
};
