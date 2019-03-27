import $ from 'jquery';
import dataSet from './dataSet.js'
import Rounds from './Rounds.js'
import Game from './Game.js'

export default {
  removeMe() {
    $(".start-up-screen").remove();
  },

  publishCategories () {
    const categories = '<header class="categories" id="category-one">' +
    'Category' + 1 + '</header>' + '<header class="categories" id="category-two">'
    + 'Category' + 2 + '</header>' + '<header class="categories" id="category-three">'
    + 'Category' + 3 + '</header>' + '<header class="categories" id="category-four">'
    + 'Category' + 4 + '</header>';

    $(".category-wrapper").append(categories);
  },

  publishRoundClues () {
    const scoreBoard = '<article class="clues cat-1 ind-0">' +
    100 +
    '</article>' +
    '<article class="clues cat-2 ind-0">' +
    100 +
    '</article>' +
    '<article class="clues cat-3 ind-0" >' +
    100 +
    '</article>' +
    '<article class="clues cat-4 ind-0">' +
    100 +
    '</article>' +
    '<article class="clues cat-1 ind-1">' +
    200 +
    '</article>' +
    '<article class="clues cat-2 ind-1">' +
    200 +
    '</article>' +
    '<article class="clues cat-3 ind-1">' +
    200 +
    '</article>' +
    '<article class="clues cat-4 ind-1">' +
    200 +
    '</article>' +
    '<article class="clues cat-1 ind-2">' +
    300 +
    '</article>' +
    '<article class="clues cat-2 ind-2">' +
    300 +
    '</article>' +
    '<article class="clues cat-3 ind-2">' +
    300 +
    '</article>' +
    '<article class="clues cat-4 ind-2">' +
    300 +
    '</article>' +
    '<article class="clues cat-1 ind-3">' +
    400 +
    '</article>' +
    '<article class="clues cat-2 ind-3">' +
    400 +
    '</article>' +
    '<article class="clues cat-3 ind-3">' +
    400 +
    '</article>' +
    '<article class="clues cat-4 ind-3">' +
    400 +
    '</article>'

    $(".box-wrapper").append(scoreBoard);
  },

  publishScoreBoard () {
    const board = '<form class="answer">' + '<label for="user-answer">Answer</label>'
    + '<input type="text" name="user-answer" id="user-answer" class="answer-input">'
    + '<button class="answer-btn">Submit</button>' + '</form>' +
    '<footer class="player-wrapper">' + '<section class="players">' +
    '<span id="player1-name">' + 'Player ' + 1 + '</span>' + '<br>' + 'Score ' +
    '<span id="player1-score">' + 0 + '</span>' + '</section>' +
    '<section class="players">' + '<span id="player1-name">' + 'Player ' + 2 +
    '</span>' + '<br>' + 'Score' + '<span id="player2-score"> ' + 0 + '</span>' +
    '</section>' + '<section class="players">' + '<span id="player1-name"> ' +
    'Player ' + 3 + '</span>' + '<br>' + 'Score' + '<span id="player3-score"> ' + 0
    + '</span>' + '</section>' + '</footer>';
    $(".answer-wrapper").append(board);
  }

}
