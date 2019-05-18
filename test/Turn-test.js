import chai from 'chai';
import Turn from '../src/Turn'
const expect = chai.expect;

describe('Turn', function () {

  let turn;

  beforeEach(function () {
    turn = new Turn()
  })

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should instantiate Turn', function () {
    expect(turn).to.be.an.instanceOf(Turn)
  })

});