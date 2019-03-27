import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, 'startGame', () => true);
chai.spy.on(domUpdates, 'displayName', () => true);
chai.spy.on(domUpdates, 'changeActivePlayer', () => true);


describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  })
  
  it('should have default properties', function() {
    expect(game.allPuzzles).to.deep.equal([]);
    expect(game.players).to.deep.equal([]);
    expect(game.currentPlayer).to.equal(game.players[game.players])
    game.currentRound = 0;
    expect(game.currentPuzzle).to.equal(null);
  })

  it('should be an instance of game', function() {

    expect(game).to.be.an.instanceof(Game);
  });

  it('should have three players per game', function() {

    game.createPlayer('Sally', 'Bridgett', 'Bob');
    expect(game.players.length).to.deep.equal(3);
  });

  it('should set the current player', function() {
    game.setCurrentPlayer();
    expect(game.currentPlayer).to.equal(game.players[0]);
  });

  it('should switch players', function() {
    game.switchPlayers();
    expect(game.currentPlayer).to.equal(game.players[0], game.players[1], game.players[2]);
  });
})