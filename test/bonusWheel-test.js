import chai from 'chai';
import BonusWheel from '../src/BonusWheel.js'
const expect = chai.expect;


describe('Bonus Wheel', function() {
  let bonusWheel;
  beforeEach(function() {
    bonusWheel = new BonusWheel();
  });

  it('instantiates our good friend, BonusWheel', function() {
    expect(bonusWheel).to.be.an('object');
  })

});
