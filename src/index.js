import $ from 'jquery';

import './css/base.css';

import './images/turing-logo.png';

//import objects
import Game from './Game.js';
import Round from './Round.js';
import Player from './Player.js';
const game = new Game();
const player1 = new Player();
const player2 = new Player();

game.startGame();

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
		$('.current-turn').html(`${player1.name}'s turn!`);
		$(".main-content").slideDown();
		$(".user-inputs").hide();
	}
});


//capture value from guess input
$("#submit-guess").on("click", event => {
	event.preventDefault();

	if (game.currentRound !== 3) {
		game.whoseTurn()

		//let player 1 guess first
		if (game.currentTurn === 'player1') {

			$('.current-turn').html(`${player2.name}'s turn!`)
			let userInput = $("#player-guess").val()
			player1.score += (game.checkAnswers(userInput, game.currentAnswer));
			$(".player-1-score").html(`Score: ${player1.score}`);
		} else if (game.currentTurn === 'player2') {

			$('.current-turn').html(`${player1.name}'s turn!`)
			let userInput = $("#player-guess").val()
			player2.score += (game.checkAnswers(userInput, game.currentAnswer));
			$(".player-2-score").html(`Score: ${player2.score}`);

		}
	} else {
		console.log('Guess button prepped for round 3');

		// $(".round3").removeClass('hidden')
		
		// when this round is entered (round 3) let player choose a multiplier amount;
		// I should first be able to input a multiplier between 1-5
		// run round.generateRoundTimed();

	}
});



//after 3 guesses are complete show restart game button
$(".player-cards").on("click", () => {
	$(".restart-game").slideDown(300);
});


