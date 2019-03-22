import Bonus from '../src/Bonus.js';
import Wheel from '../src/Wheel.js';
import chai from 'chai';
const expect = chai.expect;


describe('Bonus', function() {
  let bonus;
  let wheel;
  beforeEach(function() {
    bonus = new Bonus();
    wheel = new Wheel();
  })
  it('should be an instance of bonus', function() {
    expect(bonus).to.be.an.instanceof(Bonus);
    });
});