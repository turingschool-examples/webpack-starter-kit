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
    
    expect(game.players).to.deep.equal([{name:'a', score: 0}, {name:'b', score: 0}, {name:'c', score: 0}]);
    expect(game.currentPlayer).to.equal(game.players[0]);
    expect(domUpdates.displayPlayerScore).to.be.called(1);
  });

  it('should call upon toggleSplash when quitGame is called & set clues to an empty array', function() {
    let game = new Game();

    game.quitGame();

    expect(domUpdates.toggleSplash).to.be.called();
    expect(game.cluesThisRound).to.deep.equal([]);
  });

  it('should switch between players', function() {
    let game = new Game();
    game.gatherPlayers('bob', 'jim', 'tom');
  
    game.switchPlayer(game.currentPlayer);
    expect(game.currentPlayer).to.deep.equal(game.players[1]);

    game.switchPlayer(game.currentPlayer);
    expect(game.currentPlayer).to.deep.equal(game.players[2]);

    game.switchPlayer(game.currentPlayer);
    expect(game.currentPlayer).to.deep.equal(game.players[0]);
  });
});


