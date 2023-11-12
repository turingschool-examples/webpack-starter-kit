import { expect } from "chai";

const {getAllDestinations} = require("../src/functions.js");

describe("Trips Test", () => {
  const destinations = [
    {
      id: 1,
      destination: "Lima, Peru",
      estimatedLodgingCostPerDay: 70,
      estimatedFlightCostPerPerson: 400,
      image:
        "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
      alt: "overview of city buildings with a clear sky",
    },
    {
      id: 2,
      destination: "Stockholm, Sweden",
      estimatedLodgingCostPerDay: 100,
      estimatedFlightCostPerPerson: 780,
      image:
        "https://images.unsplash.com/photo-1560089168-6516081f5bf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "city with boats on the water during the day time",
    },
    {
      id: 3,
      destination: "Sydney, Austrailia",
      estimatedLodgingCostPerDay: 130,
      estimatedFlightCostPerPerson: 950,
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      alt: "opera house and city buildings on the water with boats",
    },
  ];

  it("should return an array of all the destinations", () => {
    const places = getAllDestinations(destinations)
    
    expect(places).to.be.an("array");
    expect(places[0]).to.equal('Lima, Peru')
    expect(places[1]).to.equal('Stockholm, Sweden');
    expect(places[2]).to.equal('Sydney, Austrailia')

  });
});
