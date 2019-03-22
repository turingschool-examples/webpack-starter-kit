import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(domUpdates, 'startGame', () => true);
chai.spy.on(domUpdates, 'displayName', () => true);


describe('Game', function() {
  let game;
  beforeEach(function() {
    game = new Game();
  })
  
  it('should have default properties', function() {
    expect(game.players).to.deep.equal([]);
    expect(game.rounds).to.deep.equal([]);
    game.score = 0;
    expect(game.categories).to.deep.equal([]);
  })

  it('should be an instance of game', function() {

    expect(game).to.be.an.instanceof(Game);
  });

  it('should have three players per game', function() {

    game.createPlayer('Sally', 'Bridgett', 'Bob');
    expect(game.players.length).to.deep.equal(3);

  });
})