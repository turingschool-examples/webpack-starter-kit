import chai from 'chai';
const expect = chai.expect;

import Destination from '../src/classes/Destination.js';

describe('Destination', () => {
  let destination;

  beforeEach( () => {
    destination = new Destination();
  });

  it('should be a function', () => {
    expect(Destination).to.be.a('function');
  });

  it('should be an instance of Destination', () => {
    expect(destination).to.be.an.instanceOf(Destination);
  });
});
