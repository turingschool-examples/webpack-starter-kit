import $ from 'jquery';

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

  showQuestion() {
    $('.question-prompt').show();
  }
}