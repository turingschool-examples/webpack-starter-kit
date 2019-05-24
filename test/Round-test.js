import chai from 'chai';
import Round from '../src/Round'
import data from '../data'
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'displayWords', () => true)

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

  it('should hold a random survey', function () {
    expect(round.survey).to.be.an('object')
  })

  // it('should pull 3 random surveys', function () {
  //   round.pullSurveys()
  //   expect(round.survey).to.be.a('object')
  //   // expect(round.surveys[0].id).to.equal(round.turn.answers[0].surveyId)
  // }) 

});