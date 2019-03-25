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
    game.newRound(game);
    // console.log(game.currentRound.currWheel);
    // // game.currentRound.determinePuzzleLength();
    // DomUpdates.updateRoundHintCategory(game);
  });
  
  let getCurrPlayer = (game => {
    game.currentRound.getCurrentPlayer(game);
  })

  let toggleButtons = () => {
    //Toggle: Consonant
   $('#consonant').attr("disabled") ? $('#consonant').removeAttr("disabled") : $('#consonant').attr("disabled",'true');
    //Toggle: Wheel
   $('.nav__wheel--button').attr("disabled") ? $('.nav__wheel--button').removeAttr("disabled") : $('.nav__wheel--button').attr("disabled",'true');
    //Toggle: Word & Vowel
    if ($('.guess__word--button').attr("disabled") && $('#vowel').attr("disabled")) {
      $('.guess__word--button').removeAttr("disabled");
      $('#vowel').removeAttr("disabled");
    } else {
      $('.guess__word--button').attr("disabled",'true');
      $('#vowel').attr("disabled",'true');
    }
  }

  const vowels = ['A','E','I','O','U'];
// Conflict Res
  $('.guess__word--button').click(function () {
    // ! change the array of array to the globally defined one
    const alphabetArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let wrdGuess = $('#guess--input').val();
    let wrdGuessArr = wrdGuess.split('');
    // * Unfiltered Array
    // console.log(wrdGuessArr);
    // * Filtered Array
    wrdGuessArr = wrdGuessArr.map(letter => letter.toUpperCase());
    wrdGuessArr = wrdGuessArr.filter(letter => alphabetArr.includes(letter));
    DomUpdates.updatePlayerScore(game);
    game.currentRound.wholeWord = game.currentRound.wholeWord.filter(letter => alphabetArr.includes(letter))
    game.currentRound.wholeWord.join('') == wrdGuessArr.join('') ? 
    // ! end round here
    game.newRound(game) : getCurrPlayer(game);
    
    // console.log(game);
    // game.currentRound.currentPlayer.ans = wrdGuess.split('');
    
    // game.currentRound.getCurrentPlayer(game);
  });

// Conflict-Res

$('.guess__letter--button').click(function () {
    const round = game.currentRound;
    const player = round.currentPlayer;
    // !  nested if to separate helper function invoked within first if
    if ($('#guess--input').val().length === 1) {
      let ltrGuess = $('#guess--input').val();
      player.ans = ltrGuess.toUpperCase();
      round.answer = round.answer.filter(item => item != `'` && item != `-` )
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
    } else {
      alert('Please Only Choose 1 Letter');
    }
    DomUpdates.updateLettersUsed(game);
  });

  let conditionalChecking = (round, player, ltrGuess) => {
     if (round.allRoundGuesses.includes(ltrGuess.toUpperCase())) {
        alert('This letter has already been guessed!');
        // todo: add an error message instead of alert
      }
      else if (vowels.includes(ltrGuess.toUpperCase())) {
        console.log("It's a Vowel!")
        buyVowel(round, player, ltrGuess);
      }
      else if (compareAns(round, player)) {
        correctAnsFunc(round, player, ltrGuess);
        toggleButtons();
      }
        // console.log('CORRECT ARRAY', game.currentRound.correctRoundGuesses);
        // console.log('ALL ARRAY', game.currentRound.allRoundGuesses);
        
     else {
        // console.log(game.currentRound.allRoundGuesses)
        // console.log(game.currentRound.allRoundGuesses.includes(ltrGuess))
        round.allRoundGuesses.push(player.ans)
        round.getCurrentPlayer(game);
        toggleButtons();
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
    DomUpdates.createPuzzleClassArr(ltrGuess);
    round.getCurrentPlayer(game);
    round.answer = round.answer
      .filter(letter => letter.toUpperCase() != ltrGuess.toUpperCase());
    console.log(game.currentRound.answer);
  }

let buyVowel = (round, player, letter) => {
  if (player.roundCaps < 100) {
    alert('Insufficient Funds!');
  } else {
    player.roundCaps -= 100;
    console.log(player.roundCaps)
    correctAnsFunc(round, player, letter)
  }
}
  
// End Conflict-Res

  $('.nav__wheel--button').click(() => {
    toggleButtons();
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
    getCurrPlayer(game);
    toggleButtons();
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
  
  
  
  