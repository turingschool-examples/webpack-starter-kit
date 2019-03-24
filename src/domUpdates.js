import $ from 'jquery';

export default {

  loadReaponses(responses) {
    const $responses = $('.revealed-response');
    $responses.each((i, card) => {
      $(card).find('.response-text').text(responses[i].answer);
      $(card).find('.respondents').text(responses[i].respondents);
    })
  },

  revealResponse(response) {
    const $responses = $('.response-text');
    const $cards = $('.response-card')
    $responses.each((i, card) => {
      if ($(card).text() === response) {
        $($cards[i]).hide()
      }
    })
  },

  clearguess() {
    $('#guess-input').val('');
  },

  startGame({ players, currentPlayer }) {
    this.updateNames(players[0].name, players[1].name);
    this.displayCurrentPlayer(currentPlayer);
    this.disableStartButton();
  },

  updateNames(p1name, p2name) {
    $(".player-one-name").text(p1name);
    $(".player-two-name").text(p2name);
  },

  startRound({ question, responses }) {
    $('#current-question').text(question);
    this.loadReaponses(responses);
    this.hideResponses();
  },

  hideResponses() {
    $('.response-card').each((i, card) => $(card).show());
  },

  disableStartButton() {
    $("#start-game-btn").attr("disabled", true);
  },

  displayCurrentPlayer({ name, score }) {
    $(".current-player span").text(name);
    $("#current-round-total h2").text(score);
  },

  updateScores({ name, score }) {
    const $scoreToUpdate = name === $('.player-one-name').text() ? $('.player-one-score') : $('.player-two-score'); 
    $scoreToUpdate.text(score)
  }

}