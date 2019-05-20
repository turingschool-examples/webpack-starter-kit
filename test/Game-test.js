import chai from 'chai';
import Game from '../src/Game'
import Round from '../src/Round'
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'displayWords', () => true)

describe('Game', function () {

  let game;
  let round;
  beforeEach(function () {
    game = new Game('Aidan', 'Patrick')
    round = new Round()
  })

  it('should be a function', function () {
    expect(Game).to.be.a('function');
  });

  it('should instantiate Game', function () {
    expect(game).to.be.an.instanceOf(Game)
  })

  it('should instantiate a new Round', function () {
    expect(game.round).to.be.an.instanceOf(Round)
  })

  it('should instantiate 2 players', function () {
    expect(game.players).to.be.an('array')
    expect(game.players).to.be.eql([
      { id: 1, name: 'Aidan', score: 0, guess: undefined }, 
      { id: 2, name: 'Patrick', score: 0, guess: undefined }])
  })



});