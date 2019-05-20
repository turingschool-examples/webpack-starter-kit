import $ from 'jquery';
import './css/base.scss';
import './images/turing-logo.png'
import Game from './Game'

let game;

$('.start-button').click(function() {
  $('.player-start-page').addClass('hidden');
  $('.dim').addClass('hidden');
  const names = [$('#input-1').val(), $('#input-2').val(), $('#input-3').val()]
  game = new Game;
  game.createPlayers(names);
  game.start();
});