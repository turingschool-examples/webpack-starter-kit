import $ from 'jquery';

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
   $(event.target).removeClass("val-btn")
   $(event.target).off("click");
   // $(`#${clue.categoryId}`).append("<p class='.guess-input'>hey</p>")
   $('.clue-card').removeClass("hidden");
   $('.clue-question').text(clue.question)
   $('.game-board, .start-game-form, h1').addClass("opacity");
    console.log('clue', clue)
    console.log('event', event)
    //display the question with and input to place answer 
    // hide the btn that was just clicked on 
  },
  disappearClue() {
    $('.clue-card').addClass("hidden");
    $('.game-board, .start-game-form, h1').removeClass("opacity");
  }
}