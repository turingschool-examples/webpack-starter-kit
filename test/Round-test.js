import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round'

describe('Round', function() {

  it('should have one Daily Double for Round 1', function() {
    const round = new Round;
    expect(round.dailyDouble).to.equal(1)
  })

})