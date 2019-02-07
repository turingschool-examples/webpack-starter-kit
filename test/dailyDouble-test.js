import chai from 'chai';
const expect = chai.expect;
import Dailydouble from '../src/dailyDouble.js';

describe('Daily Double', function() {
it('should instantiate a dailydouble', function() {
    dailydouble = new Dailydouble;
    expect(dailydouble).to.be.an.instanceof(Dailydouble);
  });

  it('should have a method to create a random number between 1 and 16', function() {
    var dailydouble = new Dailydouble();
    let num = dailydouble.randomNumberGenerator();
    expect(dailydouble.randomNumber).to.not.equal(17);
  });

  it('should be able to show a wager card', function() {
    //just a dom update?
  });
});