import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Player from '../src/Player.js';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import data from '../src/gamedata.js';
import domUpdates from '../src/domUpdates.js';

chai.spy.on(domUpdates, ['revealCorrectAnswer', 'updateScore', 'showGuessMessage', 'toggleActivePlayer'], () => true);

describe('Player', function() {
  let round, game, player1, player2;
  beforeEach(() => {
    player1 = new Player('Steve', 1);
    player2 = new Player('Becky', 2);
    game = new Game(player1, player2);
    round = new Round(game);
  });
  it('should be an instance of Player', function() {
    expect(player1).to.be.instanceof(Player);
  });
  describe('Properties', function() {
    it('should be able to take a name as an argument', function() {
      expect(player1.name).to.equal('Steve');
    });
    it('should have a score that defaults to 0', function() {
      expect(player1.score).to.equal(0);
    });
    it('should have a isTurn property', function() {
      expect(player1).to.have.property('isTurn');
    });
    it('should start game being Player One\'s turn', function() {
      expect(player1.isTurn).to.be.true;
      expect(player2.isTurn).to.be.false;
    });
    it('should have a playerNum property', function () {
      expect(player1.playerNum).to.equal(1);
      expect(player2.playerNum).to.equal(2);
    });
    it('Each player should start with a multiplier of 1', () => {
      expect(player1.multiplier).to.equal(1);
      expect(player2.multiplier).to.equal(1);

    });
  });
  describe('Methods', function() {
    it('should be able to make a guess', function() {
      expect(player1).to.respondTo('makeGuess');
    });
    it('should only accept strings in a guess', function() {
      expect(player1.makeGuess(10)).to.equal('Error: Argument Not String');
      expect(player1.makeGuess(true)).to.equal('Error: Argument Not String');
      expect(player1.makeGuess([1, 2])).to.equal('Error: Argument Not String');
      expect(player1.makeGuess({name: 'Ryan'})).to.equal('Error: Argument Not String');
      expect(player1.makeGuess('hi', game, round)).to.not.equal('Error: Argument Not String');
    });
    it('should switch players after making a guess', function () {
      player1.makeGuess('guess', game, round);
      expect(player1.isTurn).to.equal(false);
      expect(player2.isTurn).to.equal(true);
      player2.makeGuess('guess', game, round);
      expect(player1.isTurn).to.equal(true);
      expect(player2.isTurn).to.equal(false);
    });
    it('should increase score if guess is correct', function () {
      let testRound = new Round(game);
      testRound.survey = data.surveys[0];
      testRound.answers = data.answers.filter(answer => answer.surveyId === 1);
      player1.makeGuess('Beer', game, testRound)
      expect(player1.score).to.equal(67);
    });
    it('should allow correct guess of any case', function () {
      let testRound = new Round(game);
      testRound.survey = data.surveys[0];
      testRound.answers = data.answers.filter(answer => answer.surveyId === 1);
      player1.makeGuess('BEER', game, testRound);
      expect(player1.score).to.equal(67);
    });
    it('Each player should be able to reassign multiplier with user input', () => {
      player1.getMultiplier(4);
      expect(player1.multiplier).to.equal(4);
      player2.getMultiplier(3);
      expect(player2.multiplier).to.equal(3);
    });
  });
});