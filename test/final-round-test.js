import chai from 'chai';
const expect = chai.expect;

import FinalRound from '../src/FinalRound.js';
import Game from '../src/Game.js';
import Player from '../src/Player.js';

describe('Final Round', function () {
  let finalRound, game, player1, player2;
  beforeEach(() => {
    player1 = new Player('Jacob', 1);
    player2 = new Player('Ryan', 2);
    game = new Game(player1, player2);
    finalRound = new FinalRound(game);
  });

  it('should be an instance of Final Round', function () {
    expect(finalRound).to.be.instanceof(FinalRound);
  });
  it('should have a random survey', () => {
    expect(finalRound).to.have.property('survey');
    expect(finalRound.survey).to.be.an('object');
    expect(finalRound.survey).to.have.all.keys('id', 'question');
  });
  it('should have an array of answers', () => {
    expect(finalRound).to.have.property('answers');
    expect(finalRound.answers).to.be.an('array');
    expect(finalRound.answers.length).to.equal(3);
  });
});