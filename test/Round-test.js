import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round'
import Game from '../src/GameBoard'

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

  it('should have 16 questions', () => {
    const round = new Round();
    const game = new Game();
    game.shuffle();
    round.startRound(game);

    expect(round.clues.length).to.equal(16);
  })

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
  })

})