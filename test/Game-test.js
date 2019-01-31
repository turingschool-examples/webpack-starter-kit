import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js'

describe('Game', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should instantiate a new game', function() {
    let game = new Game()
    expect(game).to.be.an('object');
  });

  it('should gather players into players array and set current player', function() {
    let game = new Game();
    game.gatherPlayers('a', 'b', 'c');
    
    expect(game.players).to.deep.equal(['a', 'b', 'c']);
    expect(game.currentPlayer).to.equal(game.players[0])
  });
});


