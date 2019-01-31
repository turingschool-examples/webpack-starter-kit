// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// import Game from './Game.js';
// import Player from './Player.js';
// import Wheel from './Wheel.js';
// import Puzzle from './Puzzle.js';
import domUpdates from './domUpdates.js';
// Tell webpack to use a CSS file
import './css/base.css';


$('.start-button').on('click', function(e) {
  e.preventDefault();
  domUpdates.getNames();
})

