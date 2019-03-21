import chai from 'chai'
const expect = chai.expect;

import DailyDouble from '../src/DailyDouble.js'

describe('DailyDouble', function() {
  let dailyDouble;
  beforeEach(function() {
    dailyDouble = new DailyDouble();
  });

it('should have a wager starting at 0', function() {
    expect(dailyDouble.wager).to.equal(0);
  });

it('should have a maximum wager starting at 0', function() {
    expect(dailyDouble.maxWager).to.equal(0);
  });
})