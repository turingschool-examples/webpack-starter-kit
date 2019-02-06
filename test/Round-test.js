import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round'

describe('Round', function() {

  it('should be an instance of round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceOf(Round)
  });

  it('should have default properties', () => {
    const round = new Round();
    expect(round.catNames).to.deep.equal([]);
    expect(round.catIds).to.deep.equal([]);
    expect(round.clues).to.deep.equal([]);
    expect(round.pointValues).to.deep.equal([]);
    expect(round.questions).to.deep.equal([]);
    expect(round.dailyDouble).to.equal(1);
  });

  it('should have 16 questions', () => {
    const round = new Round();
    round.startRound();
    console.log(round.clues.length)
    expect(round.clues.length).to.equal(15);
  })

  it('should have one Daily Double for Round 1', function() {
    const round = new Round();
    expect(round.dailyDouble).to.equal(1)
  });

  it('should have two daily doubles for round 2', () => {
    const round = new Round();
    expect(round.dailyDouble).to.equal(1);
    round.setDDQuestion();
    expect(round.dailyDouble).to.equal(2);
  })

  it('should start a second round', () => {
    const round = new Round();

  });

})