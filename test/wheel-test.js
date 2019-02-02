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

  it('should land on a random element when spun', function() {
    wheel.randomizeWheel();
    wheel.spinWheel();
    expect(wheel.currentSpin).to.not.be.an('undefined');
  })

  it.skip('should reset player score to zero when the wheel lands on bankrupt', function() {
    
  })

  it.skip('should end player turn when the wheel lands on lose-a-turn', function() {
    
  })

  it.skip('should prompt player to choose a consonant if the wheel lands on a dollar amount', function() {
    
  })
});
