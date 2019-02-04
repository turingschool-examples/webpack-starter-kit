// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/background.jpg';
import './images/background2.png';

// Tell webpack to use a JS file
// import data from './data.js';
import domUpdates from './domUpdates.js';
// import Puzzle from './Puzzle.js';
import Game from './Game.js';
// import data from './data.js';
// import Wheel from './Wheel.js';

import $ from 'jquery';

console.log('This is the JavaScript entry file - your code begins here.');

let game = new Game();
let wheel = new Wheel();
console.log(game.changeRound())

// jQuery Variables
let $playerOneOutput = $('player1-output');
let $playerTwoOutput = $('player2-output');
let $playerThreeOutput = $('player3-output');



// JS variables
let difficulty1 = data.puzzles.one_word_answers;
let difficulty2 = data.puzzles.two_word_answers;
let difficulty3 = data.puzzles.three_word_answers;
let difficulty4 = data.puzzles.four_word_answers;




// jQuery Event Listeners


// Functions
// function addNames() {
//   // console.log("Did this work?");
//   $playerOneOutput.text($player1Name);
//   $playerTwoOutput.text($player2Name);
//   $playerThreeOutput.text($player3Name);
// };


// PSUEDOCODING
// ------------
const $player1Name = $('#player1');
const $player2Name = $('#player2');
const $player3Name = $('#player3');

const $submitNames = $('.submit-names');
// 

$submitNames.on( 'click', playGame );

// change to arrow function
function playGame(e) {
  e.preventDefault();
  if ( $player1Name[0].value && $player2Name[0].value && $player3Name[0].value ) {
    const game = new Game();
    buildGame();
    addNames();
    // $openingPrompt.toggle;
  } else {
    console.log('fill in names');
    // $promptWarning.toggle;
  }
}

function buildGame() {
  createPlayerNames();
  game.createWheel();
  game.createPuzzle();
}

function createPlayerNames() {
  const playerNames = [];
  playerNames.push($player1Name.value);
  playerNames.push($player2Name.value);
  playerNames.push($player3Name.value);
  game.createPlayers(playerNames);
}



// newWheel() {
//   const wheel = new Wheel();
//   wheel.randomizeWheel();
  //   display wheel on DOM;
// }

// newPuzzle() {
//   const puzzle = new Puzzle(difficulty);
//   puzzle.randomPuzzle();
//   display puzzle, category, and hint on DOM;
// }


// Player ‘x’ turn
// ---------------

// $spinWheelButton.on( 'click', spinWheel() );

// wheel.spinWheel() {
//   spin wheel;
//   let currentSpin = spin value;
//   player.wheelResults(currentSpin);
// }

// player.wheelResults(spin) {
//   if ( spin === 'bankrupt' ) {
//     player.roundScore = 0; 
//   } else if ( spin.type === number ) {
//     player.roundScore += spin;
//     player.chooseConsonant();
//   }
//   player.endTurn();
// }


// $solvePuzzleButton.on( 'click', solvePuzzle() );

// puzzle.solvePuzzle() {
//   prompt player to attempt to solve;
//   $submitGuessButton.on( 'click', submitGuess() );
// }

// puzzle.submitGuess() {
//   if ( guess !== this.answer ) {
//     console.log('incorrect answer');
//     player.endTurn();
//   } else if ( guess === this.answer ) {
//     this.totalScore += this.roundScore;
//     game.roundOver();
//   }
// }


// game.roundOver() {
//   if ( round === 4 )
//     this.bonusRound();
//   else if ( round === bonus )
//     this.endGame();
//   else
//     this.round++;
//     this.startRound();
// }


// game.bonusRound() {
//   new BonusWheel object;
//   disable non-1st-place players
// }


// game.startRound() {
// }


// player.endTurn() {
// }


// game.endGame() {
// }

