import chai from 'chai';
const expect = chai.expect;

import Game from '../src/Game.js'
import domUpdates from  '../src/domUpdates';

import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, ['displayPlayerScore', 'toggleSplash'], () => true)

describe('Game', function() {
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

  it('should call upon domUpdates.toggleSplash when game.quitGame is called', function() {
    let game = new Game();

    game.quitGame();

    expect(domUpdates.toggleSplash).to.be.called();
  });
});


