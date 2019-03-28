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
const alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
  'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


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
  if ($('#guess--input').val() === 'levelUP') {
    game.players.map(player=> player.roundCaps = 0);
    game.currentRound.newRound(game);
  } else {
    game.currentRound.skipPuzzle(game);
    game.currentRound.currWheel.wheelSlices = 
      game.currentRound.currWheel.getWheelSlices()
  }
});
$('.nav__end-game').click(function () {
  location.reload();
});  

// * User Input
$('.guess__word--button').click(function () {
  let wrdGuess = $('#guess--input').val();
  let wrdGuessArr = wrdGuess.split('');
  $('#guess--input').val('');
  game.currentRound.currentPlayer.guessWord(game, wrdGuessArr, alphabetArr)
});
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
$('.nav__wheel--button').click(() => {
  let random = Math.floor((Math.random() * 9) + 0);
  game.currentRound.currentPlayer.spinWheel(game, random);
});
$('#consonant').click(function () {
  const round = game.currentRound;
  const player = round.currentPlayer;
  let ltrGuess = $('#guess--input').val();
  if (vowels.includes(ltrGuess.toUpperCase()) || ltrGuess.length !== 1) {
    alert('Please Choose 1 Consonant');
  } else {
    player.ans = ltrGuess.toUpperCase();
    round.answer = round.answer.filter(item => item !== `'` && item !== `-` )
    game.currentRound.conditionalChecking(game, ltrGuess, vowels);
    DomUpdates.updateLettersUsed(game);
  }
});

//* An example of how you tell webpack to apply a CSS file
import './css/base.css';
import './css/normalize.css';

//* An example of how you tell webpack to use an image 
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

//* Import: Font
// import './css/Overseer.otf'
// import './css/Lato-Thin.ttf'