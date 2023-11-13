import { expect } from "chai";

const {getAllDestinations, handleDateErrors, makeUpcomingTrip, getDestinationId} = require("../src/functions.js");

describe("Functions Test", () => {
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

describe("Form Errors", () => {
  
  it("should send a message when the start date is not a future date", () => {

  const trip = {
    startDate: "2023-11-11",
    endDate: "2023-11-13",
    travelers: "2",
    destination: "Stockholm, Sweden",
  };

    const dateHandling = handleDateErrors(trip)
    
    expect(dateHandling).to.be.a("string");
    expect(dateHandling).to.equal('You must book for a future date')

  });

  it("should send a different message when the end date is before the start date", () => {
    const trip = {
      startDate: "2024-11-12",
      endDate: "2023-11-09",
      travelers: "2",
      destination: "Stockholm, Sweden",
    };

    const dateHandling = handleDateErrors(trip);

    expect(dateHandling).to.be.a("string");
    expect(dateHandling).to.equal(
      "Your trip end date cannot be before your trip start date"
    );
  });

  it("should get the destination id of the destination the user submits", () => {
    
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
      }
    ];

    const bookingInfo = {
      startDate: "2023-11-14",
      endDate: "2023-11-25",
      travelers: 4,
      destination: "Stockholm, Sweden",
    };

    let newTrip = {}
     let destinationId = getDestinationId(bookingInfo, destinations);

    expect(destinationId).to.be.a("number");
    expect(destinationId).to.equal(2)
    
  });


  it("should give the length of the trip based on the dates", () => {

    const tripsData = [
{
"id": 1,
"userID": 44,
"destinationID": 49,
"travelers": 1,
"date": "2022/09/16",
"duration": 8,
"status": "approved",
"suggestedActivities": []
},
{
"id": 2,
"userID": 35,
"destinationID": 25,
"travelers": 5,
"date": "2022/10/04",
"duration": 18,
"status": "approved",
"suggestedActivities": []
},
{
"id": 3,
"userID": 3,
"destinationID": 22,
"travelers": 4,
"date": "2022/05/22",
"duration": 17,
"status": "approved",
"suggestedActivities": []
}
]

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
  }
];

const user = {
  id: 22,
  username: "traveler22",
  password: "travel",
  endpoint: "http://localhost:3001/api/v1/travelers/22",
};

    const bookingInfo = {
      startDate: "2023-11-14",
      endDate: "2023-11-22",
      travelers: 2,
      destination: "Stockholm, Sweden",
    };

    let newTrip = {}

     makeUpcomingTrip(
       bookingInfo,
       newTrip,
       tripsData,
       destinations,
       user,
     );

    expect(newTrip.id).to.equal(4);
    expect(newTrip.userID).to.equal(22)
    expect(newTrip.destinationID).to.equal(2)
    expect(newTrip.travelers).to.equal(2);
    expect(newTrip.date).to.be.equal("2023/11/14");
    expect(newTrip.duration).to.equal(8);
    expect(newTrip.status).to.be.equal('pending');
    expect(newTrip.suggestedActivities).to.deep.equal([])
  });
});