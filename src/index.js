// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

import GameEngine from './game-engine';
import DomUpdates from './dom-updates';
// jQuery selectors

// ** Global Variables ** //
let game = null;
const vowels = ['A', 'E', 'I', 'O', 'U'];


// ** Event Listeners ** //
$('.start__start--btn').click(() =>{
  let playersNames = [];
  playersNames.push(
    $('.playerinfo__player-1').val(),
    $('.playerinfo__player-2').val(),
    $('.playerinfo__player-3').val()
  )

  game = new GameEngine(playersNames);
  game.revEngine(game);

  DomUpdates.hidePopup(game);
});

// * Nav Buttons
$('.nav__end-round').click(function () {
  if ($('#guess--input').val() == 'levelUP') {
    game.currentRound.newRound(game);
    console.log(game.currentRound)
  } else {
    game.currentRound.skipPuzzle(game);
  }
});
$('.nav__end-game').click(function () {
  location.reload();
});  

// Conflict Res
$('.guess__word--button').click(function () {
  console.log(game.currentRound.roundPuzzle);
  // ! change the array of array to the globally defined one
  const alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let wrdGuess = $('#guess--input').val();
  let wrdGuessArr = wrdGuess.split('');
  $('#guess--input').val('');
  // * Unfiltered Array
  // console.log(wrdGuessArr);
  // * Filtered Array
  wrdGuessArr = wrdGuessArr.map(letter => letter.toUpperCase());
  wrdGuessArr = wrdGuessArr.filter(letter => alphabetArr.includes(letter));
  DomUpdates.updatePlayerScore(game);
  game.currentRound.wholeWord = game.currentRound.wholeWord
    .filter(letter => alphabetArr.includes(letter))
  if (game.currentRound.wholeWord.join('') == wrdGuessArr.join('')) { 
    DomUpdates.appendWinner(game)
    game.currentRound.newRound(game)
  } else {
     game.currentRound.getCurrentPlayer(game)
   }
    
  // console.log(game);
  // game.currentRound.currentPlayer.ans = wrdGuess.split('');
    
  // game.currentRound.getCurrentPlayer(game);
});

// Conflict-Res
$('#vowel').click(function() {
  const round = game.currentRound;
  const player = round.currentPlayer;
  let ltrGuess = $('#guess--input').val();

  if (!vowels.includes(ltrGuess.toUpperCase()) || ltrGuess.length !== 1) {
    alert('Please Choose 1 Vowel');    
  } else {
    player.buyVowel(game, round, player, ltrGuess, vowels);
  }
});

$('#consonant').click(function () {
  const round = game.currentRound;
  const player = round.currentPlayer;
  let ltrGuess = $('#guess--input').val();

  // !  nested if to separate helper function invoked within first if
  if (vowels.includes(ltrGuess.toUpperCase()) || ltrGuess.length !== 1) {
    alert('Please Choose 1 Consonant');
  } else {
    player.ans = ltrGuess.toUpperCase();
    round.answer = round.answer.filter(item => item !== `'` && item !== `-` )
    game.currentRound.conditionalChecking(game, ltrGuess, vowels);
    DomUpdates.updateLettersUsed(game);
  }
});

// todo: remove after refactor
// let conditionalChecking = (round, player, ltrGuess) => {
//   if (round.allRoundGuesses.includes(ltrGuess.toUpperCase())) {
//     alert('This letter has already been guessed!');
//     // todo: add an error message instead of alert
//   } else if (game.currentRound.compareAns() && !vowels.includes(ltrGuess.toUpperCase())) {
//     game.currentRound.correctAnsFunc(game, ltrGuess);
//     DomUpdates.toggleButtons();
//   } else if (game.currentRound.compareAns() && vowels.includes(ltrGuess.toUpperCase())) {
//     game.currentRound.correctAnsFunc(game, ltrGuess)
//   } else if (!game.currentRound.compareAns() && vowels.includes(ltrGuess.toUpperCase())) {
//     round.allRoundGuesses.push(player.ans);
//     round.allRoundGuesses.sort();
//     DomUpdates.appendIncorrect();
//     round.getCurrentPlayer(game);
//   } else {
//     round.allRoundGuesses.push(player.ans);
//     round.allRoundGuesses.sort();
//     DomUpdates.appendIncorrect();
//     round.getCurrentPlayer(game);
//     DomUpdates.toggleButtons();
//   }
// }

// todo: remove after refactor
// let compareAns = (game) => {
//   return round.answer.map((letter)=> letter.toUpperCase())
//     .includes(player.ans.toUpperCase());
// }

// todo: remove after refactor
// let correctAnsFunc = (round, player, ltrGuess) => {
//   round.correctRoundGuesses.push(player.ans);
//   round.allRoundGuesses.push(player.ans);
//   round.allRoundGuesses.sort();
//   DomUpdates.createPuzzleClassArr(ltrGuess);
//   DomUpdates.appendCorrect();
//   round.answer = round.answer
//   .filter(letter => letter.toUpperCase() !== ltrGuess.toUpperCase());
//   if (game.currentRound.answer.length === 0) {
//     game.currentRound.newRound(game);
//     DomUpdates.appendWinner(game);
//   }
//   round.getCurrentPlayer(game);
//   console.log(game.currentRound.answer)
//   game.currentRound.answer = game.currentRound.answer
//     .filter(char => char !== ' ' ? char : char = '');
// }

// let buyVowel = (round, player, ltrGuess) => {
//   if (player.roundCaps < 100) {
//     alert('Insufficient Funds!');
//   } else {
//     player.roundCaps -= 100;
//     player.ans = ltrGuess.toUpperCase();
//     round.answer = round.answer.filter(item => item !== `'` && item !== `-` && item !== `&`)
//     game.currentRound.conditionalChecking(game, ltrGuess, vowels);
//     DomUpdates.updateLettersUsed(game);
//   }
// }
  
// End Conflict-Res

$('.nav__wheel--button').click(() => {
  let random = Math.floor((Math.random() * 7) + 0);
  DomUpdates.toggleButtons();
  const slice = game.currentRound.currWheel.wheelSlices[random];
  DomUpdates.appendWheelValue(slice);
  console.log("Slice:", slice)
  $.type(slice) === "number" ? spinNum(slice) : spinNotNum(slice);
  // ! REMOVE CONSOLE: LATER !
  console.log("CurrPlayer: ", game.currentRound.currentPlayer.name)
});

let spinNum = (slice) => {
  game.currentRound.currentPlayer.roundCaps += slice;
  DomUpdates.updatePlayerScore(game);
}
  
let spinNotNum = (slice) => {
  if (slice === 'BANKRUPT') {
    game.currentRound.currentPlayer.roundCaps = 0;
    game.currentRound.currentPlayer.totalCaps = 0;
    DomUpdates.appendBankrupt(game);
    DomUpdates.updatePlayerScore(game);
  }
  else {
    DomUpdates.appendLoseTurn(game);
  }
  game.currentRound.getCurrentPlayer(game);
  DomUpdates.toggleButtons(game);
};

// An example of how you tell webpack to apply a CSS file
// import './css/fonts/overseer.css';
// import './fonts/Lato-Thin.ttf';

import './css/base.css';
import './css/normalize.css';
// import './css/Lato-Thin.ttf'

// An example of how you tell webpack to use an image (also need to link to it inthe index.html)
//* Background
import './images/terminal2.jpg';
//* Characters
import './images/characters/mad_max-removebg.png';
import './images/characters/radroach.png';
import './images/characters/thumbs.png';
//* Dom Resources
import './images/Dom_Resources/smallvaultec.png';
import './images/Dom_Resources/smartypants.png';
import './images/Dom_Resources/vaultDoor.png';
import './images/Dom_Resources/yesMan.jpg';
import './images/Dom_Resources/bottleCaps.png';
import './images/Dom_Resources/incorrect.png';
import './images/Dom_Resources/bankrupt.png';
import './images/Dom_Resources/loseTurn.png';
//* Prizes
import './images/Prizes/BB_gun.png';
import './images/Prizes/Fat_Man.png';
import './images/Prizes/laser_rifle.png';
import './images/Prizes/lunchbox.png';
import './images/Prizes/Mister_Handy.png';
import './images/Prizes/nightwear.png';
import './images/Prizes/power_armor.png';
import './images/Prizes/RadAway.png';
import './images/Prizes/radiation_suit.png';
import './images/Prizes/stimpak.png';
import './images/Prizes/teddy_bear.png';


// import './css/Overseer.otf'
  
  
  
  