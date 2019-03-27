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
  'removeTimers',
  'blurGuessInput',
  'displayTimer',
  'displayFastroundDialog',
  'showWinnerScreen',
  'showAlreadyTriedMsg',
  'showMustEnterGuessMsg'
], () => true);

describe('Round', () => {
  it('should have a specified survey question', () => {
    let round = new Round(survey, surveyAnswers, game);

    expect(round.survey).to.equal('If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?');
  });

  it('should have answers corresponding to the survey question', () => {
    let round = new Round(survey, surveyAnswers, game);

  expect(round.surveyAnswers).to.deep.equal([
      { answer: 'Bowling Ball', respondents: 5 },
      { answer: 'Donuts', respondents: 24 },
      { answer: 'Beer', respondents: 67 }
    ]);
  });

  it('should have a property referencing the game it is in', () => {
    let round = new Round(survey, surveyAnswers, game);

    expect(round.game).to.be.instanceOf(Game);
  });


  it('should remove an answer from the answers array if player guessed correctly', () => {
    let round = new Round(survey, surveyAnswers, game);
    let player1Guess = 'shirt';
    let player2Guess = 'beer';

    expect(round.surveyAnswers.length).to.equal(3);

    round.checkAnswer(player1Guess);

    expect(round.surveyAnswers.length).to.equal(3);

    round.checkAnswer(player2Guess);

    expect(round.surveyAnswers.length).to.equal(2);
  });

  //I think we might have to test this in the Player-test.js file, since 
  it('should increment player score when they guess correctly', () => {
    let round = new Round(survey, surveyAnswers, game);
    game.activePlayer = player2;
    let playerGuess = 'beer';

    round.checkAnswer(playerGuess);

    expect(game.player2.score).to.equal(67);
  });

  it('should switch the active player when a player guesses incorrectly', () => {
    let round = new Round(survey, surveyAnswers, game);
    let player1Guess = 'shirt';

    expect(game.activePlayer).to.equal(game.player1);

    round.checkAnswer(player1Guess)

    expect(game.activePlayer).to.equal(game.player2);
  });

  it('should end the round when there are 3 correct guesses', () => {
    let surveyAnswers = [
      { answer: 'Bowling Ball', respondents: 5 },
      { answer: 'Donuts', respondents: 24 },
      { answer: 'Beer', respondents: 67 }
    ];
    
    let round = new Round(survey, surveyAnswers, game);

    expect(round.surveyAnswers.length).to.equal(3);

    round.checkAnswer('bowling ball');
    round.checkAnswer('donuts');
    round.checkAnswer('beer');

    expect(round.surveyAnswers.length).to.equal(0);
  });

  it('should give the losing player a turn for the next round', () => {
    let round = new Round(survey, surveyAnswers, game);

    game.activePlayer = game.player1;

    round.checkAnswer('bowling ball');
    round.checkAnswer('donuts');
    round.checkAnswer('beer');

    expect(game.activePlayer).to.equal(game.player2);

  })
});
