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
    // console.log(game.currentRound.currWheel);
    game.currentRound.determinePuzzleLength();
    // DomUpdates.updateRoundHintCategory(game);
    game.currentRound.displayDomPuzzle(game);
  });
  
  
  let getCurrPlayer = (game => {
    game.currentRound.getCurrentPlayer(game);
  })
  
  $('.guess__word--button').click(function (game) {
    let wrdGuess = $('#guess--input').val();
    game.currentRound.currentPlayer.ans = wrdGuess.split();
    game.currentRound.getCurrentPlayer(game);
  });
  $('.guess__letter--button').click(function () {
    // !  nested if to separate helper function invoked within first if
    if ($('#guess--input').val().length === 1) {
      let ltrGuess = $('#guess--input').val();
      game.currentRound.currentPlayer.ans = ltrGuess.toUpperCase();
      game.currentRound.answer = game.currentRound.answer.filter(item => item != `'` && item != `-` )
      //TODO: update letters used array
      
      
      // player ans
      // console.log(game.currentRound.currentPlayer.ans.toUpperCase());
      // round answer
      // console.log(game.currentRound.answer.map((item)=> item.toUpperCase()));
      // compare player ans against round answer
      if (game.currentRound.allRoundGuesses.includes(ltrGuess.toUpperCase())) {
        alert('This letter has already been guessed!');
        // todo: add an error message instead of alert
      }
      else if (game.currentRound.answer.map((letter)=> letter.toUpperCase()).includes(game.currentRound.currentPlayer.ans.toUpperCase())) {
        game.currentRound.correctRoundGuesses.push(game.currentRound.currentPlayer.ans);
        game.currentRound.allRoundGuesses.push(game.currentRound.currentPlayer.ans);
        DomUpdates.createPuzzleClassArr(ltrGuess);
        game.currentRound.getCurrentPlayer(game);
        game.currentRound.answer = game.currentRound.answer.filter(letter => letter.toUpperCase() != ltrGuess.toUpperCase())
        console.log(game.currentRound.answer);
      }
        // console.log('CORRECT ARRAY', game.currentRound.correctRoundGuesses);
        // console.log('ALL ARRAY', game.currentRound.allRoundGuesses);
        
     else {
        // console.log(game.currentRound.allRoundGuesses)
        // console.log(game.currentRound.allRoundGuesses.includes(ltrGuess))
        game.currentRound.allRoundGuesses.push(game.currentRound.currentPlayer.ans)
        game.currentRound.getCurrentPlayer(game);
        // console.log('ALL ARRAY', game.currentRound.allRoundGuesses);
        // console.log('CurrentPlayer', game.currentRound.currentPlayer);
      }
      // create a new array
      // push correct guess letter in there
      // find index of answer array to guess letter array
      // change text of that index to the value of the guess index
    } else {
      alert('Please Only Choose 1 Letter');
    }
    DomUpdates.updateLettersUsed(game);
  });
  $('.nav__wheel--button').click(() => {
    const slice = game.currentRound.currWheel.wheelSlices[Math.floor((Math.random() * 7) + 0)];
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
      DomUpdates.updatePlayerScore(game);
    }
    game.currentRound.getCurrentPlayer(game);
  };
  
  
  
  
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
  
  
  
  