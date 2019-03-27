// import Game from './Game.js';
import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';
import Player from './Player.js';
import $ from 'jquery';

let domUpdates = {

  // displayQuestionSolvePopup(game) {
  //    $('.popup').append(
  //     `<section class='question-popup'> 
  //         <h2 class='card'>Hint: ${game.currentPuzzle.description}</h2>
  //         <form class='solve-form'> 
  //           <input class='answer-input' placeholder='Type your answer here'>
  //           <button class='answer-submit'>Submit</button>
  //           <button class='exit-solve'>Exit Solve Puzzle</button> 
  //         </form>
  //       </section>`
  //       )
     // to get player input to check against the correct answer this may be the best option
//copy and past template literal into HTML, give new class, new class has rule of display none
//when submit solve button is clicked remove css class 
//once done with popup add class back 

     //need a way to get out of solve puzzle in case they decide to put in another letter 
     //added button above but haven't added an event listener to it yet to remove the .popup
  // },

  showPopup() {
    $('.popup').removeClass('hidden');
  },

  hidePopup() {
    $('.popup').addClass('hidden');
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

  enableButton() {
    $('#js-e-button').remove('disabled');
    $('#js-spin-button').remove('disabled');
  },

  enableQuit() {
    $('.quit-button').on('click', function() {
      location.reload(true);
    });
  },

  displayName() {
    $('.box-name').each((i, name) => {
      $(name).text($('.player-name-input').eq(i).val());
    });
  },

  displayCategoryName(game) {
    $('.category').text(game.currentPuzzle.category.toUpperCase());
  },

  startGame(game) {
    game.createPlayer($('.player-name-input').eq(0).val(), 
      $('.player-name-input').eq(1).val(), 
      $('.player-name-input').eq(2).val());
    game.beginGame(game);
    game.getPrize();
  },

  grabCurrentLetter(puzzle) {
    let currentLetter = ($('#js-cons-input').val().toUpperCase());
    return currentLetter;
  },

  grabAnswerInput(player) {
    let answerInput = ($('.answer-input').val().toUpperCase());
    return answerInput;
  },

  displayScore(game) {
    game.players.forEach((player, index) => {
      console.log('index:', index + 1, 'player.roundScore', player.roundScore)
      $(`.js-points-${index + 1}`).text(player.roundScore);
    })
    //take players array and map over each player and index
    //change text for each player ` js-points${index + 1} ...taking 0 + 1 and then jspoints will be +1
    //set text equal to whatever that player.score is
      // $('.js-points').text(`${score}`);
  },

  displayWinMessage() {
    $('.answer-message').text('Great job! You won the round!')
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
    return currentVowel;
  },


  displayLoseTurn(wheel) {
    $('.gameplay-message').text('Your spin was LOSE A TURN, onto the next player');
  },

  displayBankrupt() {
    $('.gameplay-message').text('Your spin was BANKRUPT, onto the next player')

  },

  displayWheelValue(wheel) {
    $('.gameplay-message').text(`The current value of your wheel spin is ${wheel.currentIndex}`)
  },

 changeActivePlayer() {
    $('.player-box').css('border', '1px solid red');
  },

  displayWrongAnswerMessage() {
    $('.gameplay-message').text(`Sorry! Wrong Answer! Next player's guess`)
  },

  displayGuessedLetters(puzzle) {
    $('.guessed-letters').text(`${puzzle.guessedBank}`);

  },



}

export default domUpdates;