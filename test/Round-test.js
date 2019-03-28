import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);

import Round from '../src/Round.js';

const assert = chai.assert;

describe('Round', function() {
  it('Round is a function', () => {

  assert.isFunction(Round);
  });

  it('should instantiate a new Round', () => {
    let round = new Round;

    assert.instanceOf(round, Round); 
  });


   it('should have empty array for surveys', () => {
     let round = new Round();

     assert.isArray(round.surveys);
   });

   it('should have a correct answer default of zero', () => {
    let round = new Round();

    assert.equal(round.correctAnswer, 0)
   });

   it.skip('should be able to get survey question', () => {
    let round = new Round();

    round.getSurvey();

    assert.equal();
   });

   it.skip('should be able to get survey answer', () => {
    let round = new Round();

    round.getAnswer(); 

    assert.equal();
   });

   it.skip('should check input answer with survey question answer', () => {
    let round = new Round();

    round.checkAnswer(); 

    assert.equal();
   });

   it.skip('should end the current round', () => {
    let round = new Round();

    round.endRound(); 

    assert.equal();
   });

})