// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file

// import Game from './Game.js';
// import Player from './Player.js';
// import Wheel from './Wheel.js';
// import Puzzle from './Puzzle.js';
import $ from 'jquery';


// $('.start-button').on('click', playGame);

export default {
  getNames: function() {
    let $players = [$('#player1').val(), $('#player2').val(), $('#player3').val()];
    return $players;
  },

  displayNames: function(players) {
    $('#player1-name').text(players[0]);
    $('#player2-name').text(players[1]);
    $('#player3-name').text(players[2]);
  },

  changePuzzle: function() {
    let answer = game.puzzles[0].answer.split('');
    console.log(answer);
    answer.forEach(letter => {
      if (letter === " " || letter === "-" || letter === "&" || letter === "\'") {
        $('.puzzle').append(`<p class="puzzle-letter no-border">${letter.toUpperCase()}</p>`);
      } else {
        $('.puzzle').append(`<p class="puzzle-letter hide">${letter.toUpperCase()}</p>`);
      }
    });
    let category = game.puzzles[0].category;
    $('.category').text(category); 
  },

  changeLetter: function(letter) {
    $('.puzzle-letter:contains("'+letter+'")').removeClass('hide');
    console.log(letter);
  },

  wrongLetter: function(letter) {
    $('.pop-up-letters').append(`<p class="wrong-letter">${letter.toUpperCase()}</p>`);
  },

















  valueMessage: function(currentElement) {
    $('.pop-up-message').text( `${currentElement}`)
  },

  bankruptOrLoseATurnMessage: function(currentElement) {
    if (currentElement === 'BANKRUPT') {
      $('.pop-up-message').text(`You just lost All The Money`)
    } 
    if (currentElement === 'LOSE A TURN') {
      $('.pop-up-message').text(`Wow you suck - lost your turn.`)
    }
  },


}





