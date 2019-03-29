import chai from 'chai';
const expect = chai.expect;

import Clue from '../src/Clue.js'

describe ('Clue', function() {
  it('should be able to accept a question, answer, and point value', function () {
    let clue = new Clue('You good?', 'Yes', 1000);

    expect(clue.question).to.equal('You good?');
    expect(clue.answer).to.equal('Yes');
    expect(clue.pointValue).to.equal(1000);
  })
})