import chai from 'chai'
const expect = chai.expect;

import FinalRound from '../src/FinalRound.js'
// import Round from '../src/Round.js';

describe('FinalRound', function() {
  let finalRound;
  beforeEach(function() {
    finalRound = new FinalRound();
  });

it('should have default properties', function() {
    expect(finalRound.wager).to.equal(0);
     expect(finalRound.maxWager).to.equal(0);
  });
})