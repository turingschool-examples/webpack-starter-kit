import chai from 'chai';
const expect = chai.expect;

import Gameboard from '../src/GameBoard.js';
import domUpdates from '../src/domUpdates.js';

describe('Gameboard', function() {

  it('should start at round 1', function() {
    const gameboard = new Gameboard();
    expect(gameboard.activeRound).to.equal(1)
  });

  it('should change rounds when clues remaining reaches 0', function() {
    const gameboard = new Gameboard();
    expect(gameboard.changeRound()).to.equal(2);
  });

  it('should have three players', function() { 
    const gameboard = new Gameboard();
    expect(gameboard.players).to.have.lengthOf(3)
  });

  it('should have 16 clues remaining at start', function() {
    const gameboard = new Gameboard();
    expect(gameboard.cluesRemaining).to.equal(16)
  });

  it('should change players when their turn is over', function() {
    expect()
  })

});
