import chai from 'chai';
import Turn from '../src/Turn';
import Round from '../src/Round';

const expect = chai.expect;

describe('Turn', function () {
  let round;
  let turn;
  beforeEach(function () {
    const round = new Round()
    turn = new Turn()
  })

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate Turn', function () {
    expect(turn).to.be.an.instanceOf(Turn)
  })

  it('should find the answers', function () {
    expect(turn.answers).to.be.an('array').and.have.length(3)
  })

  it('should increase the players score')

});