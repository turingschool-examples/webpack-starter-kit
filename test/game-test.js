import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js';
import Player from '../src/Player.js';

describe('Game Class', () => {
  it('should have a named Player One', function() {
    let game = new Game('Jacob');

    expect(game.player1).to.equal('Jacob');
  });
  it('should also have a named Player Two', function () {
    let player1 = new Player('Jacob');
    let player2 = new Player('Ryan');
    let game = new Game(player1, player2);


    expect(game.player1.name).to.equal('Jacob');
    expect(game.player2.name).to.equal('Ryan');
  });
  it('should default to Player One and Player Two', function () {
    let game = new Game();

    expect(game.player1).to.equal('Player One');
    expect(game.player2).to.equal('Player Two');
  });
  it('should start off at round zero', function () {
    let game = new Game();

    expect(game.currentRound).to.equal(0);
  });
  it('should be able to increment the round', function () {
    let game = new Game();

    expect(game.currentRound).to.equal(0);
    game.newRound();
    expect(game.currentRound).to.equal(1);
    game.newRound();
    expect(game.currentRound).to.equal(2);
  });
  it('should not be able to go past three rounds', function () {
    let game = new Game();

    game.newRound();
    game.newRound();
    game.newRound();
    expect(game.currentRound).to.equal(3);
    game.newRound();
    expect(game.currentRound).to.equal(3);
  });
  it('should start with no used surveys', function () {
    let game = new Game();

    expect(game.usedSurveys).to.deeplyEqual([]);
  });
  it('should start with no winner', function () {
    let game = new Game();

    expect(game.winner).to.equal(null);
  });
});