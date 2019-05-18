 import chai from 'chai';
import Round from '../src/Round'
import data from '../data'
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

  it('should hold surveys', function () {
    expect(round.surveys).to.be.an('array')
  })

  it('should pull 3 random surveys', function () {
    round.pullSurveys()
    expect(round.surveys).to.have.length(3)
    expect(round.surveys[0].id).to.equal(round.turn.answers[0].surveyId)
  }) 

});