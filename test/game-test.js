import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js';

describe('Game Class', () => {
  it.skip('should have a named Player One', function() {
    let player1 = new Player('Jacob');
    let game = new Game(player1);

    expect(game.player1.name).to.equal('Jacob');
  });
  it.skip('should also have a named Player Two', function () {
    let player1 = new Player('Jacob');
    let player2 = new Player('Ryan');
    let game = new Game(player1, player2);


    expect(game.player1.name).to.equal('Jacob');
    expect(game.player2.name).to.equal('Ryan');
  });
  it.skip('should start off at round zero', function () {
    let game = new Game();

    expect(game.currentRound).to.equal(0);
  });
  it.skip('should be able to increment the round', function () {
    let game = new Game();

    expect(game.currentRound).to.equal(0);
    game.newRound();
    expect(game.currentRound).to.equal(1);
    game.newRound();
    expect(game.currentRound).to.equal(2);
  });
  it.skip('should not be able to go past three rounds', function () {
    let game = new Game();

    game.newRound();
    game.newRound();
    game.newRound();
    expect(game.currentRound).to.equal(3);
    game.newRound();
    expect(game.currentRound).to.equal(3);
  });
  it.skip('should start with no used surveys', function () {
    let game = new Game();

    expect(game.usedSurveys).to.deeplyEqual([]);
  });
  it.skip('should start with no winner', function () {
    let game = new Game();

    expect(game.winner).to.equal(null);
  });
  it.skip('should create a new instance of Round when a new round is started', function () {
    let game = new Game();

    game.newRound()
    expect(round1).to.equal(true);
  });
  it.skip('should create an instance of FinalRound if it is round three', function () {
    let game = new Game();

    game.newRound()
    game.newRound()
    game.newRound()
    expect(round).to.equal(true);
  });
});