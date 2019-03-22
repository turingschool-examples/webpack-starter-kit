import $ from 'jquery';

export default {

  updateScore(player) {
    // etc.
  },

  revealAnswer(response) {
    // response.answer
    // response.respndents
    // etc.
  },

  updateNames(p1name, p2name) {
    $(".player-one-name").text(p1name);
    $(".player-two-name").text(p2name);
  },

  displayCurrentQuestion(question) {
    $('#current-question').text(question);
  }

}