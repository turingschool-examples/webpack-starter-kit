import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/classes/Trip.js'
import tripData from '../data/sample-tripData.js'
import destinationData from '../data/sample-destinationData.js'

describe('Trip', () => {
  let trip1;
  let trip2;
  let trip3;

  beforeEach( () => {
    trip1 = new Trip(1, tripData, destinationData);
    trip2 = new Trip(2, tripData, destinationData);
    trip3 = new Trip(3, tripData, destinationData);
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
    expect(trip2).to.be.an.instanceOf(Trip);
    expect(trip3).to.be.an.instanceOf(Trip);
  });

  it('should take in a user id', () => {
    expect(trip1.userID).to.equal(1)
    expect(trip2.userID).to.equal(2)
    expect(trip3.userID).to.equal(3)
  });

  it('should have all user\'s trips', () => {
    
    expect(trip1.userTrips).to.deep.equal([
      { id: 6, userID: 1, destinationID: 13, travelers: 3, date: '2022/06/29', duration: 9, status: 'approved', suggestedActivities: [] },
      { id: 12, userID: 1, destinationID: 7, travelers: 6, date: '2022/10/17', duration: 6, status: 'approved', suggestedActivities: [] },
      { id: 18, userID: 1, destinationID: 1, travelers: 2, date: '2022/09/25', duration: 17, status: 'approved', suggestedActivities: [] }
    ]);
    expect(trip2.userTrips).to.deep.equal([
      { id: 5, userID: 2,  destinationID: 14, travelers: 3, date: '2022/04/30', duration: 18, status: 'approved', suggestedActivities: [] },
      { id: 11, userID: 2, destinationID: 8, travelers: 4, date: '2022/10/14', duration: 4, status: 'approved', suggestedActivities: [] },
      { id: 17, userID: 2, destinationID: 2, travelers: 1, date: '2022/10/30',  duration: 20, status: 'approved', suggestedActivities: [] }
    ]);
    expect(trip3.userTrips).to.deep.equal([
      { id: 4, userID: 3, destinationID: 15, travelers: 2, date: '2022/02/25', duration: 10, status: 'approved', suggestedActivities: [] },
      { id: 10, userID: 3, destinationID: 9, travelers: 6, date: '2022/07/23', duration: 17, status: 'approved', suggestedActivities: [] },
      { id: 16, userID: 3, destinationID: 3, travelers: 1, date: '2022/11/20', duration: 9, status: 'approved', suggestedActivities: [] }
    ]);
  });

  it('should take in all the trip data for all users', () => {
    expect(trip1.trips).to.deep.equal(tripData);
    expect(trip1.trips.length).to.equal(18);

    expect(trip2.trips).to.deep.equal(tripData);
    expect(trip2.trips.length).to.equal(18);

    expect(trip3.trips).to.deep.equal(tripData);
    expect(trip3.trips.length).to.equal(18);
  });

  it('should take in destination data', () => {
    expect(trip1.destinations).to.deep.equal(destinationData);
    expect(trip1.destinations.length).to.equal(18);

    expect(trip2.destinations).to.deep.equal(destinationData);
    expect(trip2.destinations.length).to.equal(18);

    expect(trip3.destinations).to.deep.equal(destinationData);
    expect(trip3.destinations.length).to.equal(18);
  });
});

