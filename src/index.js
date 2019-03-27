import $ from 'jquery';

import './css/base.css';
import './css/normalize.css';

import './images/FFLsm.png';

import { data } from './dataset.js';
import Game from './Game.js';
import Player from './Player.js';
import Round from './Round.js';
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
$('#resetBtn').click(() => {
  location.reload(true);
});
$('#submitBtn').on('click', inputValue);

$('.answerInput').on('keyup', removeWrongAnswer);


function startPlaying() {
  let playerOne = $('.nameOne').val();
  $('#nameOne').text(playerOne);
  let playerTwo = $('.nameTwo').val();
  $('#nameTwo').text(playerTwo);
  $('.wrapper').css('height', '1300px');
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
};

function inputValue() {
  let guess = $('.answerInput').val();
  game.getAnswer(guess);
}

function removeWrongAnswer() {
 domUpdates.removeWrongAnswer();
}





export default dataSet;