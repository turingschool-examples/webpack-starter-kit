import { expect } from "chai";

const {
  getUserPastTrips,
  getUserPastTripDestinations,
  getUserUpcomingTrips,
  getUserUpcomingTripDestinations,
} = require("../src/trips-functions.js");

describe("Trips Test", () => {
  let trips, destinations;
  
  beforeEach(() => {
    
    trips = {
      trips: [
        {
          id: 1,
          userID: 19,
          destinationID: 49,
          travelers: 1,
          date: "2022/09/16",
          duration: 8,
          status: "approved",
          suggestedActivities: [],
        },
        {
          id: 2,
          userID: 19,
          destinationID: 25,
          travelers: 5,
          date: "2025/12/04",
          duration: 18,
          status: "approved",
          suggestedActivities: [],
        },
        {
          id: 3,
          userID: 19,
          destinationID: 22,
          travelers: 4,
          date: "2022/05/22",
          duration: 17,
          status: "approved",
          suggestedActivities: [],
        },
        {
          id: 4,
          userID: 43,
          destinationID: 14,
          travelers: 2,
          date: "2050/02/25",
          duration: 10,
          status: "approved",
          suggestedActivities: [],
        },
        {
          id: 5,
          userID: 19,
          destinationID: 29,
          travelers: 3,
          date: "2030/12/30",
          duration: 18,
          status: "approved",
          suggestedActivities: [],
        },
      ],
    };

    destinations = {
      destinations: [
        {
          id: 22,
          destination: "Rome, Italy",
          estimatedLodgingCostPerDay: 90,
          estimatedFlightCostPerPerson: 650,
          image:
            "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          alt: "people standing inside a colosseum during the day",
        },
        {
          id: 25,
          destination: "Copenhagen, Denmark",
          estimatedLodgingCostPerDay: 120,
          estimatedFlightCostPerPerson: 1000,
          image:
            "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          alt: "colorful buildings with holiday decorations by the water with tents and docked boats",
        },
        {
          id: 29,
          destination: "Vilnius, Lithuania",
          estimatedLodgingCostPerDay: 65,
          estimatedFlightCostPerPerson: 1100,
          image:
            "https://images.unsplash.com/photo-1549891472-991e6bc75d1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
          alt: "overhead view of a city with a hot air balloon",
        },
        {
          id: 49,
          destination: "Castries, St Lucia",
          estimatedLodgingCostPerDay: 650,
          estimatedFlightCostPerPerson: 90,
          image:
            "https://images.unsplash.com/photo-1524478075552-c2763ea171b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
          alt: "aerial photography of rocky mountain under cloudy sky",
        },
      ],
    };

  });

  it("should only return all trips with a user id of 19", () => {
    const user = getUserPastTrips(19, trips)
    expect(user).to.be.an("array");
    expect(user[0].userID).to.equal(19);
    expect(user[1].userID).to.equal(19);
  });

  it("should only return trips with a specified user Id and with a past date", () => {
    const currentDate = new Date()
    const user = getUserPastTrips(19, trips);
    expect(user).to.be.an("array");
    expect(new Date(user[0].date)).to.be.below(currentDate)
    expect(new Date(user[1].date)).to.be.below(currentDate);
  });

  it("should return a message if the user has no pass trips", () => {
    const user = getUserPastTrips(43, trips);
    expect(user).to.be.a('string');
    expect(user).to.equal('You have no past trips');
  });

   it("should return an array of all the matching destinations from from the past", () => {
     const user = getUserPastTripDestinations(19, trips, destinations);
     expect(user).to.be.an("array");
     expect(user).to.have.lengthOf(2)
     expect(user[0].id).to.equal(49);
     expect(user[1].id).to.equal(22);
   });

   it("should return a message if there are no past destinations visited", () => {
     const user = getUserPastTripDestinations(43, trips, destinations);
     expect(user).to.be.a('string')
     expect(user).to.equal('You have no past trips')
   });

  it("should only return trips with a future date", () => {
    const currentDate = new Date();
    const user = getUserUpcomingTrips(19, trips);
    expect(user).to.be.an("array");
    expect(user).to.have.lengthOf(2);
    expect(new Date(user[0].date)).to.be.above(currentDate);
    expect(new Date(user[1].date)).to.be.above(currentDate);
  });

  it("should return a message if user has no trips with a future date", () => {
    const user = getUserUpcomingTrips(3, trips, destinations)
    expect(user).to.be.a('string');
    expect(user).to.equal('You have no upcoming trips')
  });

  it("should return an array of all the matching destinations from from the future", () => {
    const user = getUserUpcomingTripDestinations(19, trips, destinations);
    expect(user).to.be.an("array");
    expect(user).to.have.lengthOf(2);
    expect(user[0].id).to.equal(25);
    expect(user[1].id).to.equal(29);
  });

  it("should return a message if there are no upcoming trip destinations", () => {
    const user = getUserUpcomingTripDestinations(3, trips, destinations);
    expect(user).to.be.a("string");
    expect(user).to.equal("You have no upcoming trips")
  });

});


