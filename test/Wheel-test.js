import Wheel from '../src/Wheel.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, 'displayLoseTurn', () => true);
chai.spy.on(domUpdates, 'displayBankrupt', () => true);
chai.spy.on(domUpdates, 'displayWheelValue', () => true);

describe('Wheel', function() {
  let wheel;
  beforeEach(function() {
    wheel = new Wheel();
  })
  
  it('should have default properties', function() {
    expect(wheel.values).to.deep.equal([]);
    expect(wheel.currentIndex).to.deep.equal([]);
  })

  it('should be an instance of wheel', function() {

    expect(wheel).to.be.an.instanceof(Wheel);
  });
})