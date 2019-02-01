import chai from 'chai';
import Wheel from '../src/Wheel.js'
const expect = chai.expect;


describe('Wheel', function() {
  let wheel;
  beforeEach(function() {
    wheel = new Wheel();
  });

  it('should have six elements', function() {    
    wheel.randomizeWheel();
    expect(wheel.wheelElements).to.have.lengthOf(6);
  });
});
