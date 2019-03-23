// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// An example of how you import jQuery into a JS file if you use jQuery in the file
import $ from 'jquery';

import GameEngine from './game-engine';
import DomUpdates from './dom-updates';
// jQuery selectors
let game = null;
let playersNames = [];
$('.start__start--btn').click(() =>{
  playersNames.push(
    $('.playerinfo__player-1').val(),
    $('.playerinfo__player-2').val(),
    $('.playerinfo__player-3').val()
  )
  // console.log(players)
  
  game = new GameEngine(playersNames);
  game.revEngine();
  // console.log(game.players);
  


  DomUpdates.hidePopup(game);
  getCurrPlayer(game);
  game.newRound();
  game.currentRound.determinePuzzleLength();
  DomUpdates.updateRoundHintCategory(game);
});


let getCurrPlayer = (game => {
  console.log(game.currentRound)
  game.currentRound.getCurrentPlayer(game);
  console.log(game.currentRound)
})

$('.guess__word--button').click(function (game) {
  let wrdGuess = $('#guess--input').val();
  game.currentRound.currentPlayer.ans = wrdGuess.split();
  game.currentRound.getCurrentPlayer(game);
});
$('.guess__letter--button').click(function () {
  if ($('#guess--input').val().length === 1) {
    let ltrGuess = $('#guess--input').val();
    game.currentRound.currentPlayer.ans = ltrGuess.toUpperCase();
    // player ans
    // console.log(game.currentRound.currentPlayer.ans.toUpperCase());
    // round answer
    // console.log(game.currentRound.answer.map((item)=> item.toUpperCase()));
    // compare player ans against round answer
    if(game.currentRound.allRoundGuesses.includes(ltrGuess.toUpperCase())) {
      alert('This letter has already been guessed!')
      // todo: add an error message instead of alert
    }
     else if(game.currentRound.answer.map((item)=> item.toUpperCase()).includes(game.currentRound.currentPlayer.ans.toUpperCase())){
        game.currentRound.correctRoundGuesses.push(game.currentRound.currentPlayer.ans)
        game.currentRound.allRoundGuesses.push(game.currentRound.currentPlayer.ans)
        console.log('CORRECT ARRAY', game.currentRound.correctRoundGuesses);
        console.log('ALL ARRAY', game.currentRound.allRoundGuesses);

    } else {
        console.log(game.currentRound.allRoundGuesses)
        console.log(game.currentRound.allRoundGuesses.includes(ltrGuess))
        game.currentRound.allRoundGuesses.push(game.currentRound.currentPlayer.ans)
        console.log('ALL ARRAY', game.currentRound.allRoundGuesses);
        console.log('CurrentPlayer', game.currentRound.currentPlayer)
    }
    // create a new array
    // push correct guess letter in there
    // find index of answer array to guess letter array
    // change text of that index to the value of the guess index
    game.currentRound.getCurrentPlayer(game);
  } else {
    alert('Please Only Choose 1 Letter');
  }
});




// An example of how you tell webpack to apply a CSS file
// import './css/fonts/overseer.css';
// import './fonts/Lato-Thin.ttf';

import './css/base.css';
import './css/normalize.css';
// import './css/Lato-Thin.ttf'



// An example of how you tell webpack to use an image (also need to link to it in the index.html)
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


// import './css/Overseer.otf'



