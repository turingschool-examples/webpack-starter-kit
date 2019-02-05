import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
import data from '../src/data.js';
import Game from '../src/Game.js';
import Puzzle from '../src/Puzzle.js';
import Player from '../src/Player.js';
import Wheel from '../src/Wheel.js';

chai.spy.on(domUpdates, 'getNames', () => ['amy', 'mimi', 'callie'])
chai.spy.on(domUpdates, 'displayNames', () => true);

describe('Game', function() {
  let game; 

  beforeEach(function() {
    game = new Game();
  })

  afterEach(function() {
    chai.spy.restore(domUpdates);
  })

  //testing startGame 
  // it ('should should initialize the game with players, puzzles, and wheels', function() {
  //   game.startGame();
  //   expect(domUpdates.displayNames()).to.have.been.called(1);
  // })

  //testing createPlayers
  it ('should instantiate three new Players', function() {
    let names = ['tim', 'taylor', 'bill'];
    game.createPlayers(names);
    expect(game.players).to.have.length(3);
    expect(game.players[0]).to.be.an.instanceof(Player);
    expect(game.players[0].name).to.equal('tim');
  });

  //testing createPuzzles
  it('should instantiate four Puzzles for the instance of Game', function() {
    let puzzles = game.findPuzzles();
    game.createPuzzles(puzzles);
    expect(game.puzzles).to.have.length(4);
    expect(game.puzzles[0]).to.be.an.instanceof(Puzzle);
  });

  //testing findPuzzles
  it('should pull out the keys in the Puzzle object', function() {
    let puzzleKeys = Object.keys(data.puzzles);
    game.findPuzzles();
    expect(puzzleKeys).to.have.length(4);
    expect(game.findPuzzles()).to.have.length(4);
  });

  //testing collectWheels
  it('should call findWheels four times', function() {
    // let wheels = game.collectWheels();
    expect(game.collectWheels()).to.have.length(4);
  });

  //testing findWheels
  it('should iterate through the wheel object and assign six random elements to a new wheel', function () {
    game.findWheels();
    expect(game.findWheels()).to.have.length(6);
  })

  //testing createWheels 
  it('should instantiate four Wheels', function() {
    let wheels = game.collectWheels();
    game.createWheels(wheels);
    expect(game.wheels[0]).to.be.an.instanceof(Wheel);
  })

  //testing createPuzzles
  it('shoud instantiate four Puzzles', function() {
    let puzzles = game.findPuzzles();
    game.createPuzzles(puzzles);
    expect(game.puzzles[0]).to.be.an.instanceof(Puzzle);
  })

})