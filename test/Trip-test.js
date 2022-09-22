import chai from 'chai';
const expect = chai.expect;

import Trip from '../src/classes/Trip.js'

describe('Trip', () => {
  let trip;

  beforeEach( () => {
    trip = new Trip();
  });

  it('should be a function', () => {
    expect(Trip).to.be.a('function');
  });

  it('should be an instance of Trip', () => {
    expect(trip).to.be.an.instanceOf(Trip);
  });
});
