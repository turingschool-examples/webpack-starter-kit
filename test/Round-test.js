import chai from 'chai';
import Round from '../src/Round'
const expect = chai.expect;

describe('Round', function () {

  let round;

  beforeEach(function () {
    round = new Round()
  })

  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should instantiate Round', function () {
    expect(round).to.be.an.instanceOf(Round)
  })

});