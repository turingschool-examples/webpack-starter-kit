import Wheel from '../src/Wheel.js';
import Player from '../src/Player.js';
import domUpdates from '../src/domUpdates.js';


import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;
chai.use(spies);
chai.spy.on(domUpdates, ['displayElement'], () => true);

describe('Wheel', function() {
  let wheel;
  let player;
  beforeEach(function() {
    wheel = new Wheel();
    player = new Player();
  });

  it('instantiates our good friend, Wheel', function() {
    expect(wheel).to.be.an.instanceof(Wheel);
  })

  it('should have default values', function() {
    expect(wheel.wheelElements).to.deep.equal([]);
    expect(wheel.currentSpin).to.equal(null);
    expect(wheel.currentSpinIndex).to.equal(null);
  })

  it('should create a wheel with a length of six', function() {    
    expect(wheel.wheelElements).to.have.lengthOf(0);
    wheel.randomizeWheel();
    expect(wheel.wheelElements).to.have.lengthOf(6);
  })

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
});
