import Game from './Game.js';
import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';
import Player from './Player.js';
import $ from 'jquery';

let domUpdates = {

  displayQuestionSolvePopup(game) {
     $('.popup').append(
      `<section class='question-popup'> 
          <h2 class='card'>Hint: ${game.currentPuzzle.description}</h2>
          <form class='solve-form'> 
            <input class='answer-input' placeholder='Type your answer here'>
            <button class='answer-submit'>Submit</button>
          </form>
          <button class='exit-solve'>Exit Solve Puzzle</button> 
        </section>`
        )
     //need a way to get out of solve puzzle in case they decide to put in another letter 
     //added button above but haven't added an event listener to it yet to remove the .popup
  },

  hideAnswer(game) {
    let answer = game.currentPuzzle.answer.split('');
    answer.forEach((letter) => {
      if (letter === ' ' || '-' || '&') {
        $('.answer-display').append(`<p class = 'letter no-border'>${letter.toUpperCase()}</p>`);
      } else {
        $('.answer-display').append(`<p class = 'letter hidden'>${letter.toUpperCase()}</p>`);
      }
    })
  },

  disableQuit() {
    $('.quit-button').prop('disabled', true);
  },

  displayName() {
    $('.box-name').each((i, name) => {
      $(name).text($('.player-name-input').eq(i).val());
    });
  },

  displayCategoryName(game) {
    $('.category').text(game.currentPuzzle.category.toUpperCase());
  },

// displayScore() {

// },

  startGame(game, wheel) {
    game.createPlayer($('.player-name-input').eq(0).val(), 
      $('.player-name-input').eq(1).val(), 
      $('.player-name-input').eq(2).val());
    game.beginGame(game);
    wheel.getRandomWheel();
  },

  grabCurrentLetter(puzzle) {
    let currentLetter = ($('#js-cons-input').val().toUpperCase());
    console.log('Test current letter', currentLetter);
    return currentLetter;
  },

  displayLetterMatch(letter) {
      $('.letter:contains("'+letter+'")').css('color', 'white' );
  },

  diplayStartMsg() {
    $('.gameplay-message').text('Please spin wheel first before guessing the letter');
  },

  // displayVowelMessage() {
  //   $('.gameplay-message').text('You haven/t bought a vowel yet. Please enter a non-vowel letter');
  // },

  grabVowel() {
    let currentVowel = ($('#js-vowel-input').val().toUpperCase());
    console.log('Test current letter', currentVowel);
    return currentVowel;
  },


  // displayLoseTurn(wheel) {
  //   $('.gameplay-message').text(`'Your spin is worth ${wheel.random}'`)
  // }

  // displayWheelValue(wheel) {
  //   $('.gameplay-message').text('The current value of your wheel spin is`${wheel.values}`)
  // }

  // displayNeedPlayerName() {
  //   if('.player-name-input' === '') {
  //     $('.gameplay-message').text('Please input player name');
  //   }
  // }



}

export default domUpdates;