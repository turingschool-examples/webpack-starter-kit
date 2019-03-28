import $ from 'jquery';
import Game from './Game';
import Player from './Player';
import domUpdates from './domUpdates';
import data from './data';

import './css/normalize.css';
import './css/base.css';

import './images/turing-logo.png'

const surveys = data.surveys.reduce((total, {
  id,
  question
}) => {
  total.push({
    id,
    question,
    responses: data.answers.filter(({
      surveyId
    }) => id === surveyId).sort((a, b) => b.respondents - a.respondents)
  })
  return total
}, []);

let game;

window.onload = () => {
  domUpdates.hideModals();
}

$('.start-game-btn').on('click', (e) => {
  e.preventDefault();
  const p1name = $('#player-one-input').val();
  const p2name = $('#player-two-input').val();
  const player1 = new Player(p1name);
  const player2 = new Player(p2name);
  game = new Game(player1, player2, surveys);
  game.startGame();
  domUpdates.startGame(game.players);
});

$('.submit-btn').on('click', (e) => {
  e.preventDefault();
  const guess = $('#guess-input').val().toLowerCase();
  game.currentRound.submitGuess(game.currentPlayer, guess, game);
  domUpdates.clearGuess();
  game.checkRoundStatus(game.currentRound);
});

$('.start-game-form input:text').on('input', () => {
  if ($(this).val() === '') {
    domUpdates.toggleStartBtn(true);
  } else {
    domUpdates.toggleStartBtn(false);
  }
})

$(".new-game-btn").on('click', (e) => {
  e.preventDefault();
  domUpdates.toggleStartModal();
});

$(".next-round-btn").on('click', (e) => {
  e.preventDefault();
  domUpdates.toggleNextRoundModal();
  game.startNextRound();
});

$(".lightning-round-btn").on('click', (e) => {
  e.preventDefault();
  domUpdates.toggleLightningRoundModal();
  game.startNextLightningRound();
  setTimeout(() => { // TODO OR all guesses correct
    domUpdates.toggleSwitchPlayerModal(game.players);
    domUpdates.updateModal(game.players);
    game.switchPlayers();
  }, 30000);
});

$(".continue-btn").on('click', (e) => {
  e.preventDefault();
  domUpdates.toggleSwitchPlayerModal();
  game.startNextLightningRound();
  setTimeout(() => { // TODO OR all guesses correct
    const winner = game.getWinner();
    domUpdates.toggleEndGameModal(game.players);
    domUpdates.updateModal(game.players);
    domUpdates.toggleWinner(winner, game.players)
  }, 30000);
});

$(".end-game-btn").on('click', (e) => {
  e.preventDefault()
  domUpdates.toggleEndGameModal();
  domUpdates.toggleStartModal();
});
