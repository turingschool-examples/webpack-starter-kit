import Game from './Game.js';
import Wheel from './Wheel.js';
import Puzzle from './Puzzle.js';
import $ from 'jquery';

let domUpdates = {

// newGame() {

// },
  displayQuestion(description) {
     $('.popup').append(
      `<section class='question-popup'> 
          <h2 class='card'>${description}</h2>
          <form class='solve-form'> 
            <input class='answer-input' placeholder='Type your answer here'>
            <button class='answer-submit'>Submit</button>
          </form>
        </section>`
        )
  },

  disableQuit() {
    $('.quit-button').prop('disabled', true);
  },

  displayName() {
    $('.box-name').each((i, name) => {
      $(name).text($('.player-name-input').eq(i).val());
    });
  },

  // displayCategoryName(game) {
    // $('.category').text(game.allPuzzles.category);
  // },

// displayScore() {

// },

  startGame(game, wheel) {
    game.createPlayer($('.player-name-input').eq(0).val(), 
      $('.player-name-input').eq(1).val(), 
      $('.player-name-input').eq(2).val());
    game.beginGame(game);
    wheel.getRandomWheel();
  }

}

export default domUpdates;