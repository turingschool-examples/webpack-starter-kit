import chai from 'chai';
import Wheel from '../src/Wheel.js'
const expect = chai.expect;


describe('Wheel', function() {
  let wheel;
  beforeEach(function() {
    wheel = new Wheel();
  });

  it('instantiates our good friend, Wheel', function() {
    expect(wheel).to.be.an('object');
  })

  it('should have six elements', function() {    
    wheel.randomizeWheel();
    expect(wheel.wheelElements).to.have.lengthOf(6);
  });

  it('should be different upon each iteration', function() {
    let wheel1 = new Wheel();
    let wheel2 = new Wheel();

    expect(wheel1).to.not.equal(wheel2);
  })
});
