// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';


// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png';


$(".user-inputs").on( "click", () => {
	$(".main-content").slideDown();
	$(".user-inputs").hide();
})

const $playerOneName = $('#player-1-name');
const $playerTwoName = $('#player-2-name');

//after 3 guesses are complete show restart game button
$(".player-cards").on("click", () => {
	$(".restart-game").slideDown(300);
})

// $playerOneName.addClass('hidden');

console.log('This is the JavaScript entry file - your code begins here.');
