import chai from 'chai';
const expect = chai.expect;

import Gameboard from '../src/GameBoard.js';
import domUpdates from '../src/domUpdates.js';

describe('Gameboard', function() {

  it('should be an instance of Game', () => {
    const gameboard = new Gameboard();
    expect(gameboard).to.be.an.instanceOf(Gameboard);
  });

  it('should have default properties', () => {
    const gameboard = new Gameboard();
    expect(gameboard.players).to.deep.equal([]);
    expect(gameboard.activeRound).to.equal(1);
    expect(gameboard.cluesRemaining).to.equal(16);
    expect(gameboard.clues).to.deep.equal([]);
    expect(gameboard.catNames).to.deep.equal([]);
  })

  it('should start at round 1', function() {
    const gameboard = new Gameboard();
    expect(gameboard.activeRound).to.equal(1)
  });

  it('should change rounds when clues remaining reaches 0', () => {
    const gameboard = new Gameboard();
    expect(gameboard.activeRound).to.equal(1)
    gameboard.changeRound();
    expect(gameboard.activeRound).to.equal(2)
  });

  it('should have three players', function() { 
    const gameboard = new Gameboard();
    gameboard.createPlayers();
    expect(gameboard.players).to.have.lengthOf(3);
  });

  it('should change players when their turn is over', () => {
    const gameboard = new Gameboard();
    expect(gameboard.activePlayer).to.equal(1);
    gameboard.changeTurn();
    expect(gameboard.activePlayer).to.equal(2);
  })

  it('should have an array of categories', () => {
    const gameboard = new Gameboard();
    expect(gameboard.catNames).to.deep.equal(4);
  });

});
