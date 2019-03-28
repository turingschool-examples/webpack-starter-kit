import $ from 'jquery';

import './css/normalize.css';
import './css/base.css';

import './images/FFLsm.png';

import { data } from './dataset.js';

import Game from './Game.js';
import domUpdates from './domUpdates.js'
// import lightningRound from './LightningRound.js';
// import domUpdates from './domUpdates.js';

domUpdates.popUp()

const dataSet = data.surveys.reduce((acc, survey) => {
  acc.push({
    id: survey.id,
    question: survey.question,
    answers: data.answers.filter((answer) => answer.surveyId === survey.id).sort((a, b) => b.respondents - a.respondents)
  });
  return acc;
}, [])


$('#startBtn').on('click', startPlaying);
$('#newGameBtn').click(() => {
  location.reload(true);
});
$('#newGameBtn').on('click', startPlaying);
$('#resetBtn').click(() => {
  location.reload(true);
});
$('#submitBtn').on('click', inputValue);
$('.answerInput').on('keyup', removeWrongAnswer);
$('.answerInput').on('keyup', removeErrorMessage);
$('.answerInput').on('keyup', removeTryAgain);

function startPlaying() {
  let playerOne = $('.nameOne').val();
  $('#nameOne').text(playerOne);
  let playerTwo = $('.nameTwo').val();
  $('#nameTwo').text(playerTwo);
  $('.wrapper').css('height', '1450px');
  $('.wrapper').css('grid-template-rows', '0% 50% 25% 25%');
  $('.gamePopUp').css('visibility', 'hidden');
  createGame(dataSet);
  game.createPlayer(playerOne, playerTwo);
  game.createRound();
}


let game;

function createGame(dataset) {
  game = new Game(dataset);
  console.log(game);
}

function inputValue() {
  let guess = $('.answerInput').val();
  game.getAnswer(guess);
}

function removeWrongAnswer() {
 domUpdates.removeWrongAnswer();
}

function removeTryAgain() {
 domUpdates.removeTryAgain();
}

function removeErrorMessage() {
 domUpdates.removeErrorMessage();
}


export default dataSet;