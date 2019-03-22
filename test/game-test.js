import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js';
import FinalRound from '../src/FinalRound.js';


describe('Game Class', () => {
  let game, player1, player2;
  beforeEach(() => {
    player1 = new Player('Jacob', 1);
    player2 = new Player('Ryan', 2);
    game = new Game(player1, player2);
  });
  it('should have a named Player One', function() {
    expect(game.player1.name).to.equal('Jacob');
  });
  it('should also have a named Player Two', function () {
    expect(game.player1.name).to.equal('Jacob');
    expect(game.player2.name).to.equal('Ryan');
  });
  it('should start off at round zero', function () {
    expect(game.currentRound).to.equal(0);
  });
  it('should start with no used surveys', function () {
    expect(game.usedSurveys).to.deep.equal([]);
  });
  it('should be able to increment the round', function () {
    expect(game.currentRound).to.equal(0);
    game.startNewRound(game);
    expect(game.currentRound).to.equal(1);
    game.startNewRound(game);
    expect(game.currentRound).to.equal(2);
  });
  it('should not be able to go past three rounds', function () {
    game.startNewRound(game);
    game.startNewRound(game);
    game.startNewRound(game);
    expect(game.currentRound).to.equal(3);
    game.startNewRound(game);
    expect(game.currentRound).to.equal(3);
  });
  it('should start with no winner', function () {
    expect(game.winner).to.equal(null);
  });
  it('should create a new instance of Round when a new round is started', function () {
    let currentRound = game.startNewRound(game)
    expect(currentRound).to.be.instanceof(Round);
  });
  it('should create an instance of FinalRound if it is round three', function () {
    let currentRound = game.startNewRound(game);
    expect(currentRound).to.be.instanceof(Round);
    currentRound = game.startNewRound(game);
    expect(currentRound).to.be.instanceof(Round);
    currentRound = game.startNewRound(game);
    expect(currentRound).to.be.instanceof(FinalRound);
  });
});