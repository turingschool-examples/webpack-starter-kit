import $ from 'jquery';

import './css/base.css';

import './images/turing-logo.png';

//import objects
import Game from './Game.js';
import Round from './Round.js';
import Player from './Player.js';
const a = new Game();
const player1 = new Player();
const player2 = new Player();
//is this right??? i dont think so
a.startGame();

import events from './DOMupdates.js'

//listeners
$("#submit-names").on( "click", () => {
	if($('#player-1-name').val() == '' || $('#player-2-name').val() == ''){
		return;
	} else {
		player1.name = $('#player1-name-input').val();
		player2.name = $('#player2-name-input').val();
		$('.player-1-name').html(player1.name);
		$('.player-2-name').html(player2.name);
		$(".main-content").slideDown();
		$(".user-inputs").hide();
	}
});


//capture value from guess input
$("#submit-guess").on("click", event => {
	event.preventDefault();
	let userInput = $("#player-guess").val()
	player1.score += (a.checkAnswers(userInput, a.currentAnswer));
	console.log('player1 score: ' + player1.score);
});

//after 3 guesses are complete show restart game button
$(".player-cards").on("click", () => {
	$(".restart-game").slideDown(300);
});


