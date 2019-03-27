import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

import Round from '../src/Round.js';
import Player from '../src/Player.js';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js'

let player1 = new Player('Tiff', 1);
let player2 = new Player('Lynne', 2);
let game = new Game(player1, player2);

let survey = 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?';

let surveyAnswers = [
  { answer: 'Bowling Ball', respondents: 5 },
  { answer: 'Donuts', respondents: 24 },
  { answer: 'Beer', respondents: 67 }
];

chai.spy.on(domUpdates, [
  'displayCorrectGuess',
  'showNoMatchMsg',
  'endOfRoundMsg',
  'clearAnswerBoard',
  'removeTimer',
  'displayTimer',
  'displayFastroundDialog',
  'showWinnerScreen',
  'showAlreadyTriedMsg',
  'showMustEnterGuessMsg'
], () => true);

describe('Round', () => {
  it('should have a specified survey question', () => {
    let round = new Round(survey, surveyAnswers);

    expect(round.survey).to.equal('If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?');
  });

  it('should have answers corresponding to the survey question', () => {
    let round = new Round(survey, surveyAnswers);

  expect(round.surveyAnswers).to.deep.equal([
      { answer: 'Bowling Ball', respondents: 5 },
      { answer: 'Donuts', respondents: 24 },
      { answer: 'Beer', respondents: 67 }
    ]);
  });

  it('should remove an answer from the answers array if player guessed correctly', () => {
    let round = new Round(survey, surveyAnswers);
    let player1Guess = 'shirt';
    let player2Guess = 'beer';

    expect(round.surveyAnswers.length).to.equal(3);

    round.checkAnswer(player1Guess);

    expect(round.surveyAnswers.length).to.equal(3);

    round.checkAnswer(player2Guess);

    expect(round.surveyAnswers.length).to.equal(2);
  });

  it('should increment player score when they guess correctly', () => {
    let round = new Round(survey, surveyAnswers);
    let player1Guess = 'beer';

    round.checkAnswer(player1Guess);

    expect(game.player1.score).to.equal(67);
  });

  it('should switch the active player when a player guesses incorrectly', () => {
    let round = new Round(survey, surveyAnswers);
    let player1Guess = 'shirt';

    expect(game.activePlayer).to.equal(game.player1);

    round.checkAnswer(player1Guess)

    expect(game.activePlayer).to.equal(game.player2);
  });

  it('should end the round when there are 3 correct guesses', () => {
    let round = new Round(survey, surveyAnswers);

    expect(round.surveyAnswers.length).to.equal(3);

    round.checkAnswer('bowling ball');
    round.checkAnswer('donuts');
    round.checkAnswer('beer');

    expect(round.surveyAnswers.length).to.equal(0); 
  });

  it('should give the losing player a turn for the next round', () => {
    let round = new Round(survey, surveyAnswers);

    game.activePlayer = game.player1;

    round.checkAnswer('bowling ball');
    round.checkAnswer('donuts');
    round.checkAnswer('beer');

    expect(game.activePlayer).to.equal(game.player2);

  })
});

// it('Should be able to check if a guess has been guessed before and avoid duplicates.', () => {
//   let round = new Round(survey, surveyAnswers);

//   round.saveGuess('puppies');

//   expect(round.guesses).to.deep.equal(['puppies']);

//   round.saveGuess('puppies');

//   expect(round.guesses).to.deep.equal(['puppies']);
// });

// it('Should be able to check if a guess is one of the answers.', () => {
//   //have fn return true or false?
// });
