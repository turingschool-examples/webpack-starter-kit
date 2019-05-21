import chai from 'chai';
import Survey from '../src/Survey'
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'displayWords', () => true)

describe('Survey', function () {

  let survey;

  beforeEach(function () {
    survey = new Survey()
  })

  it('should be a function', function () {
    expect(Survey).to.be.a('function');
  });

  it('should instantiate Survey', function () {
    expect(survey).to.be.an.instanceOf(Survey)
  })

});