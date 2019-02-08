import Gameboard from '../src/GameBoard';
import domUpdates from '../src/domUpdates';
import Player from '../src/Players'

import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);
chai.spy.on(domUpdates, ["changeCatTitles", "b", "c"], () => true);

describe('Gameboard', function() {
  
  it('should be an instance of Game', () => {
    const gameboard = new Gameboard();
    expect(gameboard).to.be.an.instanceOf(Gameboard);
  });
  
  it('should have default properties', () => {
    const gameboard = new Gameboard();
    expect(gameboard.players).to.deep.equal([]);
    expect(gameboard.activeRound).to.deep.equal(null);
    expect(gameboard.cluesRemaining).to.deep.equal(16);
    expect(gameboard.clues).to.deep.equal([]);
    expect(gameboard.catNames).to.deep.equal([]);
  })
  
  it('should start at round 1', function() {
    const gameboard = new Gameboard();
    gameboard.instRound();
    expect(gameboard.activeRound).to.deep.equal(gameboard.allRounds[0]);
  });
  
  it('should instatiate 3 rounds', function () {
    const gameboard = new Gameboard();
    gameboard.instRound();
    expect(gameboard.roundOne).to.be.a('object');
    expect(gameboard.roundTwo).to.be.a('object');
    expect(gameboard.roundThree).to.be.a('object');
  });
  
  it('Rounds 1 & 2 should have 4 categories', function () {
    const gameboard = new Gameboard();
    gameboard.instRound();
    expect(gameboard.roundOne.catNames).to.be.lengthOf(4);
    expect(gameboard.roundTwo.catNames).to.be.lengthOf(4);
  });
  
  it('Rounds 1 & 2 should have 16 clues', function () {
    const gameboard = new Gameboard();
    gameboard.instRound();
    expect(gameboard.roundOne.clues).to.be.lengthOf(16);
    expect(gameboard.roundTwo.clues).to.be.lengthOf(16);
  });

  it('RoundOne & roundTwo should have differnet catNames', function () {
    const gameboard = new Gameboard();
    gameboard.instRound();
    expect(gameboard.roundOne.catNames).to.not.equal(gameboard.roundTwo.catNames)
  });
  
  it('Should have three players', function() { 
    const gameboard = new Gameboard();
    let playerInt = ["Squirtel", "bulbasaur", "Charmander"];
    gameboard.createPlayers(playerInt);
    expect(gameboard.players).to.have.lengthOf(3);
  });
  
  it('Should change players when their turn is over', () => {
    const gameboard = new Gameboard();
    expect(gameboard.activePlayer).to.equal(0);
    gameboard.changeTurn()
    expect(gameboard.activePlayer).to.equal(gameboard.players[1]);
  })
  
  it('Should have an array of categories', () => {
    const gameboard = new Gameboard();
    gameboard.instRound();
    gameboard.roundOne.startRound(gameboard);
    gameboard.roundOne.getCatNames();
    expect(gameboard.roundOne.catNames).to.have.lengthOf(4);
  });
  
  it.skip('Should change rounds when clues remaining reaches 0', () => {
    const gameboard = new Gameboard();
    gameboard.instRound();
    expect(gameboard.roundOne.length).to.equal(0);
    gameboard.changeRound();
    expect(gameboard.roundTwo.length).to.equal(16);
  });
});