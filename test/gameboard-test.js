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
    chai.spy.restore(domUpdates);
  });

  it('should have default properties', function() {
    expect(game.round).to.equal(1);
    expect(game.categoryList).to.deep.equal(["unitedStatesHistory", "lifeSciences", "publicHealth", "educationJargon", "nameThatBoardGame", "americanLiterature", "biographies", "americanCities", "food", "cableTV"]);
    expect(game.firstRoundCategories).to.deep.equal([]);
    expect(game.secondRoundCategories).to.deep.equal([]);
    expect(game.finalRoundCategory).to.deep.equal([]);
    expect(game.cluesWithCategories).to.deep.equal([]);
  });

  it('should start a game', function () {
    game.startGame();
    game.collectClues();
    game.assignCategories();
  });

  it('should create an array with all clue objects, including category name', function() {
    expect(game.cluesWithCategories).to.have.length(0);
    game.collectClues();
    expect(game.cluesWithCategories).to.have.length(114);
  });
  
  it('should create 3 arrays with categories for each round and assign to dom', function() {
    expect(game.firstRoundCategories).to.deep.equal([]);
    expect(game.secondRoundCategories).to.deep.equal([]);
    expect(game.finalRoundCategory).to.deep.equal([]);
    game.assignCategories();
    expect(game.firstRoundCategories).to.have.length(4);
    expect(game.secondRoundCategories).to.have.length(4);
    expect(game.finalRoundCategory).to.have.length(1);
  });

  

});