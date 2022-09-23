class Destination {
  constructor(destinationData) {
    this.id = destinationData.id;
    this.location = destinationData.destination;
    this.lodgingCost = destinationData.estimatedLodgingCostPerDay;
    this.flightCost = destinationData.estimatedFlightCostPerPerson;
    this.locationImage = destinationData.image;
    this.imageAltText = destinationData.alt;
  };
};

export default Destination;