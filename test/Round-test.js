import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round.js';
import Game from '../src/Game.js';
import Player from '../src/Player.js';

let game = new Game(new Player('Tiff'), new Player('Lynne'));

let survey = 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?';

let surveyAnswers = [
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
    let round = new Round(survey, surveyAnswers);

    expect(round.surveyAnswers).to.deep.equal([
      { answer: 'Bowling Ball', respondents: 5 },
      { answer: 'Donuts', respondents: 24 },
      { answer: 'Beer', respondents: 67 }
      ]);
  });

  it('should start with no guesses', () => {
    let round = new Round(survey, surveyAnswers);

    expect(round.guesses).to.deep.equal([]);
  });

  it('should have used guesses populate into the guesses property', () => {
    let round = new Round(survey, surveyAnswers);
    let player1Guess = 'shirt';
    let player2Guess = 'beer';

    round.saveGuess(player1Guess);

    expect(round.guesses).to.deep.equal(['shirt']);

    round.saveGuess(player2Guess);

    expect(round.guesses).to.deep.equal(['shirt', 'beer']);
  });

  it('should add guess to correctGuesses if player guessed correctly', () => {
    let round = new Round(survey, surveyAnswers);
    let player1Guess = 'shirt';
    let player2Guess = 'beer';

    round.checkAnswer(player1Guess);

    expect(round.correctGuesses).to.deep.equal([]);

    round.checkAnswer(player2Guess);

    expect(round.correctGuesses).to.deep.equal(['beer']);
  });

  it('should increment player score when they guess correctly', () => {
    let round = new Round(survey, surveyAnswers);
    let player1Guess = 'beer';

    round.checkAnswer(player1Guess);

    expect(player1.score).to.equal(67);
  });

  it('should switch the active player when a player guesses incorrectly', () => {
    let round = new Round(survey, surveyAnswers);
    let player1Guess = 'shirt';

    expect(game.activePlayer).to.equal(game.player1);

    round.checkAnswer(player1Guess)

    expect(game.activePlayer).to.equal(game.player2);


  });

});






  // it('Should be able to save guesses.', () => {
  //   let round = new Round(survey, surveyAnswers);

  //   round.saveGuess('puppies');

  //   expect(round.guesses).to.deep.equal(['puppies']);
  // });

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
