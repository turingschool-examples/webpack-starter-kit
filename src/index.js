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

const dataset = data.surveys.reduce( (total, { id, question }) => {
  total.push({
    id,
    question,
    responses: data.answers.filter(({ surveyId }) => id === surveyId).sort((a, b) => b.respondents - a.respondents)
  })
  return total
}, []);

let game;

startBtn.on('click', (e) => {
  e.preventDefault();
  const p1name = $('#player-one-input').val();
  const p2name = $('#player-two-input').val();
  const player1 = new Player(p1name);
  const player2 = new Player(p2name);
  game = new Game(player1, player2, dataset);
  game.startGame();
  domUpdates.startGame(game);
});

submitBtn.on('click', (e) => {
  e.preventDefault();
  const guess = $('#guess-input').val().toLowerCase();
  game.currentRound.submitGuess(game.currentPlayer, guess, game);
  domUpdates.clearguess();
  if (game.currentRound.isFinished) {
    setTimeout(() => {
      if (game.round < 2) {
        game.startNextRound();
      } else if (game.round < 3) {
        console.log('lightning round next');
      } else {
        const winner = game.getWinner();
        console.log(winner);
      }
    }, 5000);
  }
});
