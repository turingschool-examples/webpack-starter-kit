// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// // An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


//Change player names
//  add eventlistener for on click 'start'
//  grab value of player name inputs
//  on click - changes name from player and removes input field
// function updatePlayerNames() {

// }

$(".start").click(function() {
  let inputPlayerOne = $(".player-one-input").val();
  $(".player-one-name").text(inputPlayerOne);
  let inputPlayerTwo = $(".player-two-input").val();
  $(".player-two-name").text(inputPlayerTwo);
  let inputPlayerThree = $(".player-three-input").val();
  $(".player-three-name").text(inputPlayerThree);
});