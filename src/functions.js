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
