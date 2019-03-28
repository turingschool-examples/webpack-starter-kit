import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import DomUpdates from '../src/DomUpdates.js'
import Game from '../src/Game.js';

chai.use(spies);



describe('Game', function() {
  let game;

  beforeEach(function () {
    game = new Game();
  });

  chai.spy.on(DomUpdates, ['createPlayerBox'], () => true)

  it('Game should be an object', () => {
    expect(game).to.be.an('object');
  })

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  })

  it('the length of players should start as 0', function() {
    expect(game.players.length).to.equal(0);
  })


  it('the stage should have a default value of 0', function() {
    expect(game.stage).to.equal(0)
  })

  it('the stage should be able to change its value', function() {
    game.stage++
    expect(game.stage).to.equal(1)
  })

  it('The clue bank have a default value of null', function() {
    expect(game.gameRoundsClueBank).to.deep.equal(null);
  })

  it('Round Cards to have a default property of an empty array', function() {
    expect(game.roundCards).to.deep.equal([]);
  })

  it('The clue bank to be an object', function() {

    game.createPlayerBox()
    expect(DomUpdates.createPlayerBox).to.have.been.called(1);
  })

  it('The clue bank to be an object', function() {
    game.createPlayerBox()
    game.createClues()
    expect(DomUpdates.createPlayerBox).to.have.been.called(2)
    expect(game).to.be.an('object');
  })

  it('The clue bank should be an object', function() {
    game.createClues();
    expect(game.gameRoundsClueBank.length).to.equal(4);
  })

  it('After game starts players length should deep equal 3', function() {
    game.createPlayers();
    expect(game.players.length).to.equal(3);
  })
  
  it('Game clue bank to become an array with a length of four', function () {
    game.createPlayers()
    game.createClues()
    expect(game.gameRoundsClueBank.length).to.deep.equal(4)
  })

})