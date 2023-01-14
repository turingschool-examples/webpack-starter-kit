class Destination {
  constructor(destinationData) {
      this.id = destinationData.id;
      this.destination = destinationData.destination;
      this.lodgingCost = destinationData.estimatedLodgingCostPerDay;
      this.flightCost = destinationData.estimatedFlightCostPerPerson;
      this.image = {
          url: destinationData.image,
          alt: destinationData.alt
      }
  }
}

export default Destination;