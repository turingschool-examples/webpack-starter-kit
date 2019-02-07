import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Gameboard from '../src/gameboard.js';
import domUpdates from '../src/domUpdates.js';

describe('Gameboard', function() {
  var game;

  beforeEach(function() {
    game = new Gameboard();
    chai.spy.on(domUpdates, 'startGame', returns => true);
    chai.spy.on(domUpdates, 'assignCategories', returns => true)
  });

  afterEach(function() {
    // chai.spy.restore(domUpdates);
  });

  it('should instantiate a game', function() {
    game = new Gameboard;
    expect(game).to.be.an.instanceof(Gameboard);
  })

  it('should have default properties', function() {
    expect(game.round).to.equal(1);
    expect(game.categoryList).to.deep.equal(["unitedStatesHistory", "lifeSciences", "publicHealth", "educationJargon", "nameThatBoardGame", "americanLiterature", "biographies", "americanCities", "food", "cableTV"]);
    expect(game.cluesWithCategories).to.deep.equal([]);
    expect(game.roundClues).to.deep.equal([]);
    expect(game.finalRoundClue).to.deep.equal([]);
    expect(game.roundCategories).to.deep.equal([]);
    expect(game.finalRoundCategory).to.deep.equal([]);
    expect(game.playersArray).to.deep.equal([]);
    expect(game.activePlayer).to.equal(0);
    expect(game.turnCount).to.equal(0);
    expect(game.doubleCount).to.deep.equal([]);
  });

  it('should start a game', function () {
    expect(game.doubleCount).to.have.length(0);
    game.startGame();
    expect(game.doubleCount).to.have.length(1);
  });

  it('should create an array with all clue objects, including category name', function() {
    expect(game.cluesWithCategories).to.have.length(0);
    game.collectClues();
    expect(game.cluesWithCategories).to.have.length(114);
  });

  it('should create 2 arrays, one with playable categories, and one with the final round category', function() {
    expect(game.roundCategories).to.deep.equal([]);
    // expect(game.finalRoundCategory).to.deep.equal([]);
    game.assignCategories();
    expect(game.roundCategories).to.have.length(4);
    // expect(game.finalRoundCategory).to.have.length(1);
  });

  it('should create an array of all clues to be used during gameplay, and one for the fianl round clues to chose from', function() {
    expect(game.roundClues).to.have.length(0);
    expect(game.finalRoundClue).to.have.length(0);
    game.assignCategories();
    expect(game.roundClues).to.have.length(32);
    expect(game.finalRoundClue).to.have.length(4);
  });

  it('should instantiate 3 players', function() {
    expect(game.playersArray).to.deep.equal([]);
    game.createPlayers();
    expect(game.playersArray).to.have.length(3);
  });

  // it('should update the active players score', function() {
  //   game.updateScore();
  // });

  it('should increase the turn count after a player answers', function() {
    expect(game.turnCount).to.equal(0);
    game.updateScore();
    expect(game.turnCount).to.equal(1);
    game.updateScore();
    expect(game.turnCount).to.equal(2);
  });

  it('should increase its round when turnCount reaches 16', function() {
    expect(game.round).to.equal(1);
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    game.updateScore();
    expect(game.round).to.equal(2);
  });

  it('should check rounds and change at the appropriate turn count', function() {
    expect(game.round).to.equal(1);
    game.turnCount = 16;
    game.checkTurnCount();
    expect(game.round).to.equal(2);
  });

  // it('should instantiate a clue when a cluebox is selected', function() {

  // });

  it('should be able to switch active players', function() {
    expect(game.activePlayer).to.equal(0);
    game.startGame();
    expect(game.activePlayer).to.equal(0);
    game.changePlayerTurn();
    expect(game.activePlayer).to.equal(1);
    game.changePlayerTurn();
    expect(game.activePlayer).to.equal(2);
    game.changePlayerTurn();
    expect(game.activePlayer).to.equal(0);
  });

  it('should have two dailydoubles in round 2', function() {
    game.startGame();
    expect(game.doubleCount).to.have.length(1);
    game.changeRound2();
    expect(game.doubleCount).to.have.length(2);
  });



});