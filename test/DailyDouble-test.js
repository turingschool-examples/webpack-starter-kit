import chai from 'chai'
const expect = chai.expect;

import DailyDouble from '../src/DailyDouble.js'

describe('DailyDouble', function() {
  let dailyDouble;
  beforeEach(function() {
    dailyDouble = new DailyDouble();
  });

it('should have default properties', function() {
    expect(dailyDouble.wager).to.equal(0);
    expect(dailyDouble.maxWager).to.equal(0);
  });
})