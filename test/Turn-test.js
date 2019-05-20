import chai from 'chai';
import Turn from '../src/Turn';
import Round from '../src/Round';
import Player from '../src/Player'
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;
chai.use(spies)
// chai.spy.on(Turn, 'increaseScore', () => true)

describe('Turn', function () {
  let round;
  let turn;
  let player
  beforeEach(function () {
    round = new Round(2)
    turn = new Turn(round)
    player = new Player(1, 'Patrick', 'Wrap It')
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
    turn.checkGuess(player)
    expect(player.score).to.equal(61)
    let player2 = new Player(2, 'Aidan', 'What up')
    turn.checkGuess(player2)
    expect(player2.score).to.equal(0)
  })

  it('should increase score on correct answer by the amount of respondents', function () {

  })

});