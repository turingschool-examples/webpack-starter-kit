import $ from 'jquery';
import Game from './Game';
import Player from './Player';
import Round from './Round';
import domUpdates from './domUpdates';
import data from './data';

import './css/normalize.css';
import './css/base.css';

import './images/turing-logo.png'

const startBtn = $('#start-game-btn')
const submitBtn = $('.submit-btn')

const surveys = data.surveys.reduce( (total, { id, question }) => {
  total.push({
    id,
    question,
    responses: data.answers.filter(({ surveyId }) => id === surveyId).sort((a, b) => b.respondents - a.respondents)
  })
  return total
}, []);

let game;

window.onload = () => {
  domUpdates.hidePopUps();
}

startBtn.on('click', (e) => {
  e.preventDefault();
  const p1name = $('#player-one-input').val();
  const p2name = $('#player-two-input').val();
  const player1 = new Player(p1name);
  const player2 = new Player(p2name);
  game = new Game(player1, player2, surveys);
  game.startGame();
  domUpdates.startGame(game);
});

submitBtn.on('click', (e) => {
  e.preventDefault();
  const guess = $('#guess-input').val().toLowerCase();
  game.currentRound.submitGuess(game.currentPlayer, guess, game);
  domUpdates.clearguess();
  checkRoundStatus(game.currentRound);
});

function checkRoundStatus(round) {
  if (round.isFinished) {
    if (game.round < 2) {
      setTimeout(() => {
        domUpdates.updateRoundPopUpNames(game.players);
        domUpdates.toggleNextRoundPopUp();
      }, 3000)
    } else if (game.round < 3) {
      setTimeout(() => {
        domUpdates.updateLightningRoundPopUpNames(game.players);
        domUpdates.toggleLightningRoundPopUp();
      }, 3000);
    }
  }
}

$("#new-game-btn").on('click', (e) => {
  e.preventDefault();
  domUpdates.toggleStartPopUp();
});

$(".next-round-btn").on('click', (e) => {
  e.preventDefault();
  domUpdates.toggleNextRoundPopUp();
  game.startNextRound();
});

$(".lightning-round-btn").on('click', (e) => {
  e.preventDefault();
  domUpdates.toggleLightningRoundPopUp();
  game.startNextLightningRound();
  setTimeout(() => { // TODO OR all guesses correct
    domUpdates.toggleSwitchPlayerPopUp();
    game.switchPlayers();
  }, 30000);
});

$(".continue-btn").on('click', (e) => {
  e.preventDefault();
  domUpdates.toggleSwitchPlayerPopUp();
  game.startNextLightningRound();
  setTimeout(() => { // OR all guesses correct
    domUpdates.toggleEndGamePopUp();
  }, 30000);
});

// TODO End game popup
// } else {
//   const winner = game.getWinner();
// }