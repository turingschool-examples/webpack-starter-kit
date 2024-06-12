import { trips, travelers, traveler, destinations } from '/js/mockData.js'
import { getUserTrips, getUserExpenditures, calculateEstimate, getDestinationName } from '../js'
import { expect } from 'chai';

before(function () {
  trips, travelers, traveler, destinations
})

describe('Get User Trips', function () {
  it('should return all relevant trips based on user ID', () => {
    const result = getUserTrips(4, trips);
    const expectedTripsByYear = {
      "2022": [
        { date: "2022/09/16", destinationID: 2, duration: 8, id: 1, status: "approved", suggestedActivities: [], travelers: 1, userID: 4 }
      ]
    };
    expect(result.tripsByYear).to.deep.equal(expectedTripsByYear);
  })
})

it('should handle an invalid userID', () => {
  const noTrips = getUserTrips('!', trips)
  expect(noTrips).to.equal('You must enter a valid ID, please.')
})

it('should handle no ID', () => {
  const badID = getUserTrips('', trips)
  expect(badID).to.equal('You must enter a valid ID, please.')
})

it('should handle a return without any trips', () => {
  const noTrips = getUserTrips(10, trips)
  expect(noTrips).to.equal('You have no trips on the itinerary.')
})

it('should handle pending trips', () => {
  const { pendingTrips } = getUserTrips(4, trips)
  const pendingTrip = [
    { date: "2023/08/05", destinationID: 8, duration: 6, id: 5, status: "pending", suggestedActivities: ["diving"], travelers: 1, userID: 4 }
  ]
  expect(pendingTrips).to.deep.equal(pendingTrip)
})

describe('Get User Expenditures', function () {
  it('should return total money spent on all approved trips in the target year, plus 10%', () => {
    const userTrips = getUserTrips(4, trips)
    const expenditures = getUserExpenditures(userTrips.tripsByYear, destinations)
    const totalBill2023 = expenditures['2023'] || 0
    expect(totalBill2023).to.equal(0)
  })

  it('should handle user with only pending trips', () => {
    const userTrips = getUserTrips(2, trips);
    expect(userTrips).to.equal('All your trips are pending approval.');
  })

  it('should handle trips with undefined status', () => {
    const tripsWithUndefinedStatus = {
        trips: [
            { date: "2023/01/20", destinationID: 22, duration: 5, id: 2, status: undefined, suggestedActivities: ["skiing"], travelers: 2, userID: 2 }
        ]
    };
    const userTrips = getUserTrips(2, tripsWithUndefinedStatus);
    expect(userTrips.tripsByYear).to.deep.equal({});
    expect(userTrips.pendingTrips).to.deep.equal([]);
})

it('should calculate expenditures consistently for multiple users', () => {
  const user1Trips = getUserTrips(4, trips);
  const user2Trips = getUserTrips(2, trips);

  const user1Expenditures = user1Trips.tripsByYear ? getUserExpenditures(user1Trips.tripsByYear, destinations) : {};
  const user2Expenditures = user2Trips.tripsByYear ? getUserExpenditures(user2Trips.tripsByYear, destinations) : {};

  const totalBillUser1_2023 = user1Expenditures['2023'] || 0;
  const totalBillUser2_2023 = user2Expenditures['2023'] || 0;

  expect(totalBillUser1_2023).to.equal(0)
  expect(totalBillUser2_2023).to.equal(0)
})

  it('should return total money spent on all approved trips in the target year, plus 10%, for a different user', () => {
    const tripsForTest = {
      trips: [
        { date: "2022/09/16", destinationID: 2, duration: 8, id: 1, status: "approved", suggestedActivities: [], travelers: 1, userID: 4 },
        { date: "2023/01/20", destinationID: 22, duration: 5, id: 2, status: "pending", suggestedActivities: ["skiing"], travelers: 2, userID: 4 },
        { date: "2023/03/15", destinationID: 14, duration: 10, id: 3, status: "approved", suggestedActivities: ["hiking", "sightseeing"], travelers: 4, userID: 4 },
        { date: "2023/06/25", destinationID: 9, duration: 7, id: 4, status: "approved", suggestedActivities: ["beach"], travelers: 3, userID: 4 },
        { date: "2023/08/05", destinationID: 8, duration: 6, id: 5, status: "pending", suggestedActivities: ["diving"], travelers: 1, userID: 4 }
      ]
    }
    const userTrips = getUserTrips(4, tripsForTest);
    const expenditures = getUserExpenditures(userTrips.tripsByYear, destinations)
    const totalBill2023 = expenditures['2023'] || 0
    expect(totalBill2023).to.equal(5445)
  })

  it('should handle user with no trips in the target year', () => {
    const userTrips = getUserTrips(4, trips)
    const expenditures = getUserExpenditures(userTrips.tripsByYear, destinations)
    const totalBill2021 = expenditures['2021'] || 0
    expect(totalBill2021).to.equal(0);
  })

  describe('Calculate Estimate', function () {
    it('should calculate the correct estimate for a simple trip', () => {
      const trip = { duration: 5, travelers: 2 };
      const destination = { estimatedLodgingCostPerDay: 100, estimatedFlightCostPerPerson: 500 };
      const estimate = calculateEstimate(trip, destination);
      expect(estimate).to.equal((5 * 100 + 500) * 2 * 1.1);
    })

    it('should return only the flight cost with zero duration', () => {
      const trip = { duration: 0, travelers: 3 };
      const destination = { estimatedLodgingCostPerDay: 100, estimatedFlightCostPerPerson: 400 };
      const estimate = calculateEstimate(trip, destination);
      expect(estimate).to.equal((400 * 3) * 1.1);
    })

    it('should return 0 when there are no travelers', () => {
      const trip = { duration: 5, travelers: 0 };
      const destination = { estimatedLodgingCostPerDay: 200, estimatedFlightCostPerPerson: 600 };
      const estimate = calculateEstimate(trip, destination);
      expect(estimate).to.equal(0);
    })

    it('should handle long duration trips correctly', () => {
      const trip = { duration: 30, travelers: 4 };
      const destination = { estimatedLodgingCostPerDay: 150, estimatedFlightCostPerPerson: 700 };
      const estimate = calculateEstimate(trip, destination);
      expect(estimate).to.equal((30 * 150 + 700) * 4 * 1.1);
    })
  })
})

  describe('Get Destination Name', function () {
    it('should return the correct destination name for a valid ID', () => {
      const id = 2;
      const name = getDestinationName(id, destinations);
      expect(name).to.equal('Stockholm, Sweden');
    })

    it('should return "Unknown destination" for an invalid ID', () => {
      const id = 99;
      const name = getDestinationName(id, destinations);
      expect(name).to.equal('Unknown destination');
    })

    it('should return "No destination found" when no ID is provided', () => {
      const name = getDestinationName(null, destinations);
      expect(name).to.equal('No destination found');
    })

    it('should return "Unknown destination" for an ID provided as a string', () => {
      const id = '2';
      const name = getDestinationName(id, destinations);
      expect(name).to.equal('Unknown destination');
    })

    it('should return the correct destination name for the first destination ID', () => {
      const id = 1;
      const name = getDestinationName(id, destinations);
      expect(name).to.equal('Lima, Peru');
    })
  })


