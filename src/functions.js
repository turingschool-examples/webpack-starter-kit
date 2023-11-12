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

export const makeUpcomingTrip = (trip) => {
  let startDate = new Date(trip.startDate);
  let endDate = new Date(trip.endDate);
  let durationInMilliSeconds = endDate - startDate;
  let durationInDays = durationInMilliSeconds / (1000 * 60 * 60 * 24);
  return durationInDays;
};