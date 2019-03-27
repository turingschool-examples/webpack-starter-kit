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
  game.currentRound.skipPuzzle(game);
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
    buyVowel(round, player, ltrGuess);
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
    //TODO: update letters used array
    // player ans
    // console.log(game.currentRound.currentPlayer.ans.toUpperCase());
    // round answer
    // console.log(game.currentRound.answer.map((item)=> item.toUpperCase()));
    // compare player ans against round answer
    conditionalChecking(round, player, ltrGuess);
    // create a new array
    // push correct guess letter in there
    // find index of answer array to guess letter array
    // change text of that index to the value of the guess index
    DomUpdates.updateLettersUsed(game);
  }
});

let conditionalChecking = (round, player, ltrGuess) => {
  if (round.allRoundGuesses.includes(ltrGuess.toUpperCase())) {
    alert('This letter has already been guessed!');
    // todo: add an error message instead of alert
  } else if (compareAns(round, player) && !vowels.includes(ltrGuess.toUpperCase())) {
    correctAnsFunc(round, player, ltrGuess);
    DomUpdates.toggleButtons();
  } else if (compareAns(round, player) && vowels.includes(ltrGuess.toUpperCase())) {
    correctAnsFunc(round, player, ltrGuess)
  } else if (!compareAns(round, player) && vowels.includes(ltrGuess.toUpperCase())) {
    round.allRoundGuesses.push(player.ans);
    round.allRoundGuesses.sort();
    DomUpdates.appendIncorrect();
    round.getCurrentPlayer(game);
  } else {
    // console.log(game.currentRound.allRoundGuesses)
    // console.log(game.currentRound.allRoundGuesses.includes(ltrGuess))
    round.allRoundGuesses.push(player.ans);
    round.allRoundGuesses.sort();
    DomUpdates.appendIncorrect();
    console.log("this needs to be sorted:", round.allRoundGuesses)
    round.getCurrentPlayer(game);
    DomUpdates.toggleButtons();
    // console.log('ALL ARRAY', game.currentRound.allRoundGuesses);
    // console.log('CurrentPlayer', game.currentRound.currentPlayer);
  }
}

let compareAns = (round, player) => {
  return round.answer.map((letter)=> letter.toUpperCase())
    .includes(player.ans.toUpperCase());
}

let correctAnsFunc = (round, player, ltrGuess) => {
  round.correctRoundGuesses.push(player.ans);
  round.allRoundGuesses.push(player.ans);
  round.allRoundGuesses.sort();
  DomUpdates.createPuzzleClassArr(ltrGuess);
  round.answer = round.answer
  .filter(letter => letter.toUpperCase() !== ltrGuess.toUpperCase());
  if (game.currentRound.answer.length === 0) {
    game.currentRound.newRound(game);
    DomUpdates.appendWinner(game);
  }
  round.getCurrentPlayer(game);
  console.log(game.currentRound.answer)
  game.currentRound.answer = game.currentRound.answer
    .filter(char => char !== ' ' ? char : char = '');
}

let buyVowel = (round, player, ltrGuess) => {
  if (player.roundCaps < 100) {
    alert('Insufficient Funds!');
  } else {
    player.roundCaps -= 100;
    player.ans = ltrGuess.toUpperCase();
    round.answer = round.answer.filter(item => item !== `'` && item !== `-` && item !== `&`)
    conditionalChecking(round, player, ltrGuess);
    DomUpdates.updateLettersUsed(game);
  }
}
  
// End Conflict-Res

$('.nav__wheel--button').click(() => {
  let random = Math.floor((Math.random() * 7) + 0);
  DomUpdates.toggleButtons();
  const slice = game.currentRound.currWheel.wheelSlices[random];
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
import './images/turing-logo.png';
import './images/terminal2.jpg';
import './images/mad_max-removebg.png';
import './images/mysteriousStranger.png';
import './images/radroach.png';
import './images/raider.png';
import './images/smallvaultec.png';
import './images/smartypants.png';
import './images/thumbs.png';
import './images/vaultDoor.png';
import './images/vaultTec.jpg';
import './images/yesMan.jpg';
import './images/bottleCaps.png';
import './images/deathclaw.jpg';
import './images/incorrect.png';
import './images/bankrupt.png';
import './images/loseTurn.png';


// import './css/Overseer.otf'
  
  
  
  