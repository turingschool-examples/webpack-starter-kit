// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';


// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';

//import objects
import Game from './Game.js';
import Round from './Round.js';
let a = new Game();
let b = new Round();

//is this right??? i dont think so
a.startGame();


import events from './DOMupdates.js'
// events.listenForGuess();


//listeners
$("#submit-names").on( "click", () => {
	if($('#player-1-name').val() == '' || $('#player-2-name').val() == ''){
		return;
	} else {
		$(".main-content").slideDown();
		$(".user-inputs").hide();
	}
});

//capture value from guess input
$("#submit-guess").on("click", event => {
	event.preventDefault();
	let userInput = $("#player-guess").val()
	console.log("userInput: " + userInput);
	b.checkAnswers(userInput);
});

//after 3 guesses are complete show restart game button
$(".player-cards").on("click", () => {
	$(".restart-game").slideDown(300);
});


// $playerOneName.addClass('hidden');

console.log('This is the JavaScript entry file - your code begins here.');
