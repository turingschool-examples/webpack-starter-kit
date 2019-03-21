import chai from 'chai'
const expect = chai.expect;

import FinalRound from '../src/FinalRound.js'
// import Round from '../src/Round.js';

describe('FinalRound', function() {
  let finalRound;
  beforeEach(function() {
    finalRound = new FinalRound();
  });

it('should have a wager starting at 0', function() {
    expect(finalRound.wager).to.equal(0);
  });

it('should have a maximum wager starting at 0', function() {
    expect(finalRound.maxWager).to.equal(0);
  });
})