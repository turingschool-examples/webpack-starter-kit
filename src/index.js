// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';
import Game from './Game'
import Data from './Data'
import Round from './Round'
import Wheel from './Wheel'
import DomUpdates from './DomUpdates';


// An example of how you tell webpack to apply a CSS file
import './css/base.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/WOF-star-background.jpg'



let game = new Game()


//********Event Listeners ********/
$('.begin').on('click', () => {
  event.preventDefault()
  startGameBtn(event, game);
});

$('input.player-names').keyup(function() {
  let pNames = $('.player-names').filter(function() {
    return this.value !== '';
  })
  if (pNames.length === 3) {
    $('button.disabled').addClass('start-btn')
    $('button.disabled').removeClass('disabled')
  }
  event.preventDefault(event)
});
//selects letters from the top//
$('body').on('click', '.single-letter, .single-letter-vowel', (event) =>{
  selectingLetter(event);
  DomUpdates.deactivateLetters();
})

$('body').on('click', '.spinner', () =>{
  playerSpin(game)
})

$('body').on('click', '.player-action-btn', () =>{
  submitGuess(game, event)
})

$('body').on('focus', '.guess-submission', () =>{
  DomUpdates.deactivateLetters()
})

$('body').on('click', '.quit-btn-container', () =>{
  window.location.reload(true)
})

$('body').on('click', '.vowel', () => {
  console.log('hi')
  playerBuyVowel(game);
});

/************Functions******* */
function startGameBtn(event) {
  event.preventDefault(event)
  let playerName1 = $('#player1').val();
  let playerName2 = $('#player2').val();
  let playerName3 = $('#player3').val();
  $('section.input-form').remove()
  game.startGame(playerName1, playerName2, playerName3)
}

function selectingLetter(event) {
  let selectedLetter = $(event.target).text()

  console.log(selectedLetter)
  game.roundInst.checkLetter(selectedLetter, game)
  DomUpdates.disableLetter(event)
  game.roundInst.flipCells(selectedLetter)
}

function playerSpin(game) {
  game.roundInst.wheelInst.spinWheel(game)
}

function playerBuyVowel(game) {
  console.log('buyVowel')
  game.roundInst.buyVowel(game);

}
function submitGuess(game) {
  let playerGuess = $('.guess-submission').val().toLowerCase()
  game.roundInst.playerGuessPuzzle(playerGuess, game)
}
