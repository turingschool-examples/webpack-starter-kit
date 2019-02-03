import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import domUpdates from '../src/domUpdates.js';
import data from '../src/data.js';
import Game from '../src/Game.js';
import Puzzle from '../src/Puzzle.js';
import Player from '../src/Player.js';


describe('Game', function() {

beforeEach(function() {
  chai.spy.on(domUpdates, ['getNames', 'displayNames'], () => true);
})

afterEach(function() {
  chai.spy.restore(domUpdates);
})

  it('Make Sure Testing is working', function() {
    expect(true).to.equal(true);
      });

  // Players //

  //testing getNames
  it('should get names from inputs', function() {
    let inputNames = ['taylor', 'tim', 'bob'];
    domUpdates.getNames(inputNames);
    expect(domUpdates.getNames).to.have.been.called.with(['taylor', 'tim', 'bob']);
  })

  //testing displayNames
  it ('should display names on the DOM', function() {
    let passedNames = ['taylor', 'tim', 'bob']
    domUpdates.displayNames(passedNames);
    expect(domUpdates.displayNames).to.have.been.called.with(['taylor', 'tim', 'bob']);
  });

  //testing createPlayers
  it ('should instantiate three new Players', function() {
    let game = new Game;
    let $names = ['tim', 'taylor', 'bill'];
    game.createPlayers($names);
    expect(game.players).to.have.length(3);
  });

  // Puzzles //

  //testing createPuzzles

  it('should instantiate four Puzzles for the instance of Game', function() {
    let game = new Game;
    let puzzles = game.findPuzzles();
    game.createPuzzles(puzzles);
    expect(game.puzzles).to.have.length(4);
  });

  //testing findPuzzles

  it('should pull out the keys in the Puzzle object', function() {
    let game = new Game;
    let puzzleKeys = Object.keys(data.puzzles);
    game.findPuzzles();
    expect(puzzleKeys).to.have.length(4);
  });

  // Wheels //

  //testing collectWheels

  it('should instantiate four Wheels for the instance of Game', function() {
    let game = new Game;
    let wheels = game.collectWheels();
    game.createWheels(wheels);
    expect(game.wheels).to.have.length(4);
  });

  //testing findWheels

  it('should iterate through the wheel object and assign six random elements to a new wheel', function () {
    let game = new Game;
    let wheelLength = data.wheel.length;
    let randomIndices = [];
    game.findWheels();
    expect(game.findWheels()).to.have.length(6);
  })

})