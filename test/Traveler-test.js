import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/classes/Traveler.js'

describe('Traveler', () => {
  let traveler;

  beforeEach( () => {
    traveler = new Traveler();
  });

  it('should be a function', () => {
    expect(Traveler).to.be.a('function');
  });

  it('should be an instance of Traveler', () => {
    expect(traveler).to.be.an.instanceOf(Traveler);
  });
});
