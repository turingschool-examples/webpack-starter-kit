import $ from 'jquery';
import dataSet from './dataSet.js';

export default {
  renderNames (players) {
    players.forEach((player, index) => {
      $(`.player-${index}`).text(player.name)
      $(`#input-${index}`).val('')
    });
  },
  renderCategories(categories) { // little array of four
    const categoryTitles = [ 'United States History',
      'Life Sciences', 'Public Health', 'Education Jargon', 'Name That Board Game',
      'American Literature', 'Biographies', 'American Cities', 'Food',
      'Cable TV' ];
    categories.forEach((category, index) => {
      $(`.cat-title-${index}`).text(`${categoryTitles[category - 1]}`);
      $(`.val-btn.${index}`).attr('id', category)
    })
  },
  renderClue(clue, event) {
   $(event.target).removeClass("val-btn").off("click").text('');
   $('.clue-card').removeClass("hidden");
   $('.clue-question').text(clue.question)
   $('.game-board, .start-game-form, h1').addClass("opacity");
   $('.val-btn').off("click");
    console.log('clue', clue)
    console.log('event', event)
  },
  disappearClue() {
    $('.clue-card').addClass("hidden");
    $('.game-board, .start-game-form, h1').removeClass("opacity");
  },
  // click event for submit button
  // prevent default etc
  // grab question text with jquery selector, grab input value
  // reduce function - go into data.clues reduce all clues.question that matches q we got in card
  // push out answer - that will be acc. an empty string.
  // let result = data.clues reduce. get answer in result, if result = input.val then correct, else wrong
  checkAnswer() {
    const questionText = $('.clue-question');
    const guess = $('#guess-input').val();
    const answer = dataSet.clues.reduce((acc, currClue) => {
      if (questionText.text() === currClue.question) {
        acc += currClue.answer;
      }
      return acc;
    }, '')
    if (answer.toLowerCase() === guess.toLowerCase()) {
      alert('correct!');
    } else {
      alert('incorrect');
    }
  }
}