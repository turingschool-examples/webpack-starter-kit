import {expect} from 'chai'
import Booking from '../src/classes/Booking.js';

describe('Booking tests', function() {
  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });
});