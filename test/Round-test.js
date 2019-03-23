import chai from 'chai';
import Round from '../src/Round.js'
const expect = chai.expect;

describe('Round', function() {
  let round;

  beforeEach(function() {
    round = new Round();
  });
  it('should have a current round of 0 as default', function() {
    expect(round.currentRound).to.equal(0);
  });

  it('should have an array with a length of 0 as default', function(){
    expect(round.currentAnswer.length).to.equal(0);
  })
});