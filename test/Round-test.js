import chai from 'chai';
import Round from '../src/Round.js';
const expect = chai.expect;
import spies from 'chai-spies';
import domUpdates from '../src/DOMupdates.js';
chai.use(spies);
chai.spy.on(domUpdates, 'createAnswers', () => true);
chai.spy.on(domUpdates, 'createQuestion', () => true);

describe('Round', function() {
let round;
beforeEach(function() {
round = new Round();
});

it('should have a current round of 0 as default', function() {
expect(round.currentRound).to.equal(0);
});

it('should have an array with a length of 0 as default', function(){
expect(round.currentAnswers.length).to.equal(0);
})

it('Should have answers in decending respondents order', function(){
let answersArray = round.generateAnswers();
expect(answersArray[0].respondents >=
answersArray[1].respondents).to.equal(true);
expect(answersArray[1].respondents >=
answersArray[2].respondents).to.equal(true);
});

});