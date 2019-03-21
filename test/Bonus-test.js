import Bonus from '../src/Bonus.js';
import chai from 'chai';
const expect = chai.expect;

describe('Bonus', function() {
  let Bonus;
  //this is supposed to run the new instance before all tests
  before(function() {
    bonus = new Bonus();
  })
  it('should be an instance of bonus', function() {
    expect(bonus).to.be.an.instanceof(Bonus);
    });
});