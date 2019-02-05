// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// Tell webpack to use a CSS file
import './css/base.css';

//  Tell webpack to use an image (link to it in index.html)
import './images/turing-logo.png';
import './images/background.jpg';
import './images/background2.png';

// Tell webpack to use a JS file
import domUpdates from './domUpdates.js';
import data from './data.js';
import Game from './Game.js';
import $ from 'jquery';


// jQuery Variables
const $playerOneOutput = $('#player1-output');
const $playerTwoOutput = $('#player2-output');
const $playerThreeOutput = $('#player3-output');

const $player1Name = $('#player1');
const $player2Name = $('#player2');
const $player3Name = $('#player3');



const $submitNames = $('.submit-names');


// JS variables
const difficulty1 = data.puzzles.one_word_answers;
const difficulty2 = data.puzzles.two_word_answers;
const difficulty3 = data.puzzles.three_word_answers;
const difficulty4 = data.puzzles.four_word_answers;

const game = new Game();




// jQuery Event Listeners
$submitNames.on( 'click', playGame );

// change to arrow function
function playGame(e) {
  e.preventDefault();
  if ( $player1Name[0].value && $player2Name[0].value && $player3Name[0].value ) {
    buildGame();
    $(".name-input").fadeOut(1000);
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
  displayPlayerNames();
  game.scoreUpdate();
}

function displayPlayerNames() {
  $playerOneOutput.text($player1Name[0].value);
  $playerTwoOutput.text($player2Name[0].value);
  $playerThreeOutput.text($player3Name[0].value);
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

