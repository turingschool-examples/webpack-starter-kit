import chai from 'chai';
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/scripts/game.js';
import domUpdates from '../src/scripts/domUpdates.js';


describe('Testing Game methods and properties', function() {
  var game;

  beforeEach(function() {
    game = new Game();
    chai.spy.on(domUpdates, 'displayPlayerNames', () => true);
  });
  
  afterEach(function() {
    chai.spy.restore(domUpdates);
  });

  it('should have correct default properties', function() {
    expect(game.round).to.equal(1);
    expect(game.players).to.deep.equal([]);
    expect(game.wheel).to.deep.equal([]);
    expect(game.puzzleBank).to.deep.equal([]); 
  });

  it('should invoke displayPlayerNames', function() {
    game.startGame();
    expect(domUpdates.displayPlayerNames).to.have.been.called(1);
  });
});