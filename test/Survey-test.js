import chai from 'chai';
import Survey from '../src/Survey'
const expect = chai.expect;

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