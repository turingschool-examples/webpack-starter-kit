import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game';
import Round from '../src/Round';
import Player from '../src/Player';
import domUpdates from '../src/domUpdates';
import data from '../src/data';


chai.use(spies);
const assert = chai.assert;

describe('Round', () => {

  it.skip('should be able to instantiate a new round', () => {
    round = new Round ()
    assert.instanceOf(round, Round)
  })

  it.skip('should have an id', () => {
    round = new Round(5, { 
      question: 'this is a question',
      responses: []
    });
    assert.equal(round.id, 5);
  });

  it.skip('should have a question', () => {
    round = new Round(5, { 
      question: 'this is a question',
      responses: [
        {answer: "Watch", respondents: 58, surveyId: 3},
        {answer: "Watch", respondents: 58, surveyId: 3},
        {answer: "Watch", respondents: 58, surveyId: 3}
      ]
    });
    assert.equal(round.question, 'this is a question');
  });

  it.skip('should have an array of response objects' () => {

  });

  it.skip('should have a property of isFinished that starts off false' () => {
    round = new Round(5, {
      question: '',
      resonses: [{}, {}, {}]
    });
    assert.equal(round.isFinished, false)
  });

  // should have id, num, no default
  // should have question, string, no default
  // should have responses, array

  // getAnswer?
  // startRound
});