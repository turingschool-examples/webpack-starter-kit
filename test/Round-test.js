import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round'
import Gameboard from '../src/GameBoard';

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
  });

  it.skip('should have 16 questions', () => {
    const round = new Round();
    round.startRound();

    expect(round.clues.length).to.equal(16);
  });

  it('Should have catNames from our list', function () {
    const gameboard = new Gameboard();
    gameboard.instRound();
    gameboard.roundOne.startRound(gameboard);
    gameboard.roundOne.getCatNames();
    expect(gameboard.roundOne.catNames).to.have.lengthOf(4);
    gameboard.roundOne.catIds = [1, 2, 3, 4];
    gameboard.roundOne.getCatNames();
    expect(gameboard.roundOne.catNames).to.deep.equal(['US History', 'Life Sciences', 'Public Health', 'Education Jargon']);
  });

  it.skip('should have one Daily Double for Round 1', function() {
    const round = new Round();
    round.startRound();
    let obj = round.clues.find((clue) => clue.hasOwnProperty('dailyDouble'))
    expect(obj).to.have.keys('dailyDouble')
  });

  it.skip('should have two daily doubles for round 2', () => {
    const round = new Round();
    expect(round.clues.dailyDouble).to.equal(false);
    round.setDDQuestion();
    expect(round.clues.dailyDouble).to.equal(true);
  });
})