import chai from 'chai'
const expect = chai.expect;

import spies from 'chai-spies';
chai.use(spies);

import Game from '../src/Game.js';
import Round from '../src/Round.js';
import domUpdates from '../src/domUpdates.js';

chai.spy.on(domUpdates, 'renderNames', () => true);


describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  });

  it('should have default properties', function() {
    expect(game.players).to.deep.equal([]);
    expect(game.round).to.deep.equal({});
   
  });
  
  it('should create new players', function() {
    let mockNames = ['playerOne', 'playerTwo', 'playerThree'];

    game.createPlayers(mockNames);

    expect(game.players[0].name).to.equal('playerOne');
    expect(game.players[1].name).to.equal('playerTwo');
    expect(game.players[2].name).to.equal('playerThree');
  });

  it('should instantiate new round', function() {
    game.createRound();
    expect(game.round.clues).to.deep.equal([]);
    expect(game.round.categoryIds).to.deep.equal([ 1, 2, 3, 4 ]);
  });
})
