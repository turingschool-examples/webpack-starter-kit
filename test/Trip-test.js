import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/classes/Trip.js'
import tripData from '../data/sample-tripData.js'

describe('Trip', () => {
  let trip1;
  let trip2;
  let trip3;

  beforeEach( () => {
    trip1 = new Trip(tripData[13]);
    trip2 = new Trip(tripData[18]);
    trip3 = new Trip(tripData[23]);
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip1).to.be.an.instanceOf(Trip);
    expect(trip2).to.be.an.instanceOf(Trip);
    expect(trip3).to.be.an.instanceOf(Trip);
  });

  it('should have a trip id', () => {
    expect(trip1.id).to.equal(14)
    expect(trip2.id).to.equal(19)
    expect(trip3.id).to.equal(24)
  });

  it('should have a traveler\'s id for a trip', () => {
    expect(trip1.userID).to.equal(5)
    expect(trip2.userID).to.equal(1)
    expect(trip3.userID).to.equal(6)
  });

  it('should have a destination id for a trip', () => {
    expect(trip1.destinationID).to.equal(11)
    expect(trip2.destinationID).to.equal(6)
    expect(trip3.destinationID).to.equal(1)
  });

  it('should have the number of travelers for a trip', () => {
    expect(trip1.travelers).to.equal(1)
    expect(trip2.travelers).to.equal(4)
    expect(trip3.travelers).to.equal(5)
  });

  it('should have a trip\'s departure date', () => {
    expect(trip1.date).to.equal('2022/10/24')
    expect(trip2.date).to.equal('2023/07/21')
    expect(trip3.date).to.equal('2023/11/15')
  });

  it('should have a trip\'s duration', () => {
    expect(trip1.duration).to.equal(10)
    expect(trip2.duration).to.equal(5)
    expect(trip3.duration).to.equal(7)
  });

  it('should have a trip\'s status', () => {
    expect(trip1.status).to.equal('approved')
    expect(trip2.status).to.equal('pending')
    expect(trip3.status).to.equal('pending')
  });

  it('should start with an empty array for a trip\'s suggested activities', () => {
    expect(trip1.suggestedActivities).to.deep.equal([])
    expect(trip2.suggestedActivities).to.deep.equal([])
    expect(trip3.suggestedActivities).to.deep.equal([])
  });
});

