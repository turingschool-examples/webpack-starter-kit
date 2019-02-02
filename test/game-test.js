import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/scripts/game.js';
import domUpdates from '../src/scripts/domUpdates.js';


describe('Testing Game methods and properties', () => {
  var game;

  beforeEach(function() {
    game = new Game();
    chai.spy.on(domUpdates, 'displayPlayerNames', () => true);
  });
  
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should have correct default properties',() => {
    expect(game.round).to.equal(1);
    expect(game.players).to.deep.equal({});
    expect(game.wheel).to.deep.equal([]);
    expect(game.puzzleBank).to.deep.equal([]); 
  });

  it('should be taking an array of names and reassign players property of game to contain a key value pair of name and player object', () => {
    let playerNames = ['Kim']
    expect(game.players).to.deep.equal({});
    game.createPlayers(playerNames);
    expect(game.players).to.deep.equal({'Kim':{name: "Kim", roundCoins: 0, totalCoins: 0}});
  })
});