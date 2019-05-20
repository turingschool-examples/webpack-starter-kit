import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
import Data from '../src/Data.js'
import Player from '../src/Player.js';
import Game from '../src/Game.js';
import Wheel from '../src/Wheel.js';

describe('Game', function() {
  let wheel;
  let game;
  let player1;
  let player2;
  let player3;
  let players;
  beforeEach(function() {
    wheel = new Wheel();
    wheel.createWheel();
    player1 = new Player('Steve');
    player2 = new Player('Vinton');
    player3 = new Player('Jacqueline');
    players = [player1, player2, player3];
    game = new Game(players, wheel);
  });

  it('should have default properties', function() {
    expect(game.roundCounter).to.equal(0);
    expect(game.players.length).to.eql(3);
    expect(game.roundCounter).to.equal(0);
  });

  it('should be able to return a puzzle block', function() {
    expect(game.returnPuzzleBlock().length).to.equal(5);
  });

  it('should be able to instantiate a puzzle from the puzzle block', function() {
    expect(game.instantiatePuzzle().correctAnswer).to.eql([...'Armchair']);
  });

  it('should be able to start a game', function() {
    game.start();
    expect(game.currentRound.puzzle.correctAnswer).to.eql([...'Armchair']);
  });

  it('should be able to declare a winner', function() {
    player1.totalScore = 2000;
    expect(game.roundCounter).to.equal(4);
    game.findWinner();
    expect(game.winner.name).to.equal('Steve');
  });

  it.skip('should be able to end the game', function() {
    game.startBonusRound();
    expect(game.roundCounter).to.equal(4);
    //check for defaults of bonus round?
  });

  it('Should be able to create a puzzle block', function() {
    game.assignPuzzleBlock();
    expect(game.puzzleBlock.length).to.equal(4);
  });

  it('Should be able to start a game', function () {
    game.assignPuzzleBlock();
    game.start();
    game.currentRound.newTurn();
    expect(game.currentRound.currentTurn.player.name).to.equal('Steve');
  });
});