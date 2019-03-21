import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round.js';

let survey = 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?';

let answers = [
{ answer: 'Bowling Ball', respondents: 5 },
{ answer: 'Donuts', respondents: 24 },
{ answer: 'Beer', respondents: 67 }
];

describe('Round', () => {
  it('should have a specified survey question', () => {
    let round = new Round(survey);

    expect(round.survey).to.equal('If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?');
  });

  it('should have answers corresponding to the survey question', () => {
    let round = new Round(survey, answers);

    expect(round.surveyAnswers).to.deep.equal([
      { answer: 'Bowling Ball', respondents: 5 },
      { answer: 'Donuts', respondents: 24 },
      { answer: 'Beer', respondents: 67 }
      ]);
  });

  it('should start with no guesses', () => {
    let round = new Round(survey, answers);

    expect(round.guesses).to.deep.equal([]);
  });

  it('should start with a round number of 0 or have', () => {
    expect(round.guess.to.equal(0))
  });
});