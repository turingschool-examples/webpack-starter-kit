import chai from 'chai';
import Turn from '../src/Turn';
import Round from '../src/Round';
import Player from '../src/Player'
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'displayWords', () => true)

describe('Turn', function () {
  let round;
  let turn;
  let player
  beforeEach(function () {
    round = new Round()
    turn = new Turn(round)
    player = new Player(1, 'Patrick', 'hello')
  })

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate Turn', function () {
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should find the answers', function () {
    expect(turn.answers).to.be.an('array').and.have.length(3)
    expect(round.turn.answers[0].surveyId).to.equal(round.surveys[0].id)
  })

  it('should check the guess', function() {
    expect(turn.checkGuess(player))
    console.log(player.guess);
    
  })

});