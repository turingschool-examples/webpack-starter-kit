import $ from 'jquery';
import data from './data-set.js';

export default {
  updateNames(names) {
    $('#player-one-name').text(names[0].name).show();
    $('#player-two-name').text(names[1].name).show();
    $('#player-three-name').text(names[2].name).show();
    $('#player-one-input').hide(500);
    $('#player-two-input').hide(500);
    $('#player-three-input').hide(500);
  },

  updateCategories(categories) {
    $('.cat0').text(categories[0]);
    $('.cat1').text(categories[1]);
    $('.cat2').text(categories[2]);
    $('.cat3').text(categories[3])
  },

  assignClue(clues) {
    $('#0').text(clues[0][0].question);
  },

  showQuestion(game, id, text) {
    $('.question-prompt').show();
    $('#' + id).text(' '); 
    let column = 0;
    if (id <= 3) {
      column = 0;
    } else if (id > 3 && id <= 7) {
      column = 1;
    } else if (id > 7 && id <= 11) {
      column = 2;
    } else if (id > 11) {
      column = 3;
    }
    $('.question').text(game.roundOne.clues[column].filter(clue => clue.pointValue === Number(text)).pop().question); 
  },

  answerQuestion(game) {
    let questionText = $(".question");
    let answerText = $('#question-input');
    let result = data.clues.reduce((acc, currentClue) => {
      if(questionText.text() === currentClue.question) {
        acc += currentClue.answer;
      }
      return acc
    }, '')
    if(result.toLowerCase() === answerText.val().toLowerCase()) {
     questionText.text('Correct Answer');
    } else {
     questionText.text('Incorrect Answer');
     game.changePlayer();
    }
  },

}