import chai from 'chai';
const expect = chai.expect;

import Clue from '../src/Clue.js'

describe ('Clue', function() {
  it('should have an instance of Clue', function() {
    let clue = new Clue;
  })
  it('should be able to have a question, answer, and point value', function () {
    let clue = new Clue;

    expect(clue.question).to.equal('');
    expect(clue.answer).to.equal('');
    expect(clue.pointValue).to.equal(0);
  })
  it('should be able to create a clue object', function () {
    let clue = new Clue;

    clue.getClue({question: 'Today', answer: 'Sunny', pointValue: 10, category: 0});
    expect(clue.clues).to.deep.equal([{ question: 'Today', answer: 'Sunny', pointValue: 10}]);
  })

})