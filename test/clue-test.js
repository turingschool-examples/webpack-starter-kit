import chai from 'chai';
const expect = chai.expect;

import Clue from '../src/clue.js';


describe('Clue', function() {
  it('should instantiate a clue', function() {
    clue = new Clue;
    expect(clue).to.be.an.instanceof(Clue);
  });

  it('should check the players answer', function() {
    clue.checkAnswer();
    expect();
  });

  it('should show itself to the players', function() {
    expect();
  });
  //not sure about testing that method- just a domUpdate?
});

