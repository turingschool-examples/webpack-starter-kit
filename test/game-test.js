import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js';
import FinalRound from '../src/FinalRound.js';


describe('Game Class', () => {
  it('should have a named Player One', function() {
    let player1 = new Player('Jacob');
    let game = new Game(player1);

    expect(game.player1.name).to.equal('Jacob');
  });
  it('should also have a named Player Two', function () {
    let player1 = new Player('Jacob');
    let player2 = new Player('Ryan');
    let game = new Game(player1, player2);


    expect(game.player1.name).to.equal('Jacob');
    expect(game.player2.name).to.equal('Ryan');
  });
  it('should start off at round zero', function () {
    let game = new Game();

    expect(game.currentRound).to.equal(0);
  });
  it('should be able to increment the round', function () {
    let game = new Game();

    expect(game.currentRound).to.equal(0);
    game.startNewRound(game);
    expect(game.currentRound).to.equal(1);
    game.startNewRound(game);
    expect(game.currentRound).to.equal(2);
  });
  it('should not be able to go past three rounds', function () {
    let game = new Game();

    game.startNewRound(game);
    game.startNewRound(game);
    game.startNewRound(game);
    expect(game.currentRound).to.equal(3);
    game.startNewRound(game);
    expect(game.currentRound).to.equal(3);
  });
  it('should start with no used surveys', function () {
    let game = new Game();

    expect(game.usedSurveys).to.deep.equal([]);
  });
  it('should start with no winner', function () {
    let game = new Game();

    expect(game.winner).to.equal(null);
  });
  it('should create a new instance of Round when a new round is started', function () {
    let game = new Game();

    let currentRound = game.startNewRound(game)
    expect(currentRound).to.be.instanceof(Round);
  });
  it('should create an instance of FinalRound if it is round three', function () {
    let game = new Game();

    let currentRound = game.startNewRound(game);
    expect(currentRound).to.be.instanceof(Round);
    currentRound = game.startNewRound(game);
    expect(currentRound).to.be.instanceof(Round);
    currentRound = game.startNewRound(game);
    expect(currentRound).to.be.instanceof(FinalRound);
  });
});