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

  displayCategories(categories) {
    const categoryTitles = [ 'US History', 'Life Sciences', 'Public Health', 'Education Jargon',
      'Name That Board Game', 'American Literature', 'Biographies', 'American Cities',
      'Food', 'Cable TV' ];
    categories.forEach((category, index) => {
      $(`.cat-title-${index}`).text(`${categoryTitles[category - 1]}`);
      $(`.col.${index}`).attr('id', category);
      });
  },

  showClue(clue, event) {
    const { id, innerText } = event.target;
    $('.question-prompt').show();
    $('.question').text(clue.question);
    
  },
    
  answerQuestion(game) {
    let questionText = $(".question");
    console.log(questionText)
    let answerText = $('#question-input');
    let result = data.clues.reduce((acc, currentClue) => {
      if(questionText.text() === currentClue.question) {
        acc += currentClue.answer;
      }
      return acc
    }, '')
    if(result.toLowerCase() === answerText.val().toLowerCase()) {
     questionText.text('Correct Answer');
     player.changeScore();
    } else {
     questionText.text('Incorrect Answer');
     game.changePlayer();
    }
  },
  
}