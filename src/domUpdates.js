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
        console.log('hello')
        $($cards[i]).hide()
      }
    })
  },

  clearguess() {
    $('#guess-input').val('');
  },

  startGame({ players, currentPlayer}) {
    this.updateNames(players[0].name, players[1].name);
    this.displayCurrentPlayer(currentPlayer);
    this.disableStartButton();
  },

  updateNames(p1name, p2name) {
    $(".player-one-name").text(p1name);
    $(".player-two-name").text(p2name);
  },

  startRound(round) {
    $('#current-question').text(round.question);
    this.loadReaponses(round.responses);
  },

  disableStartButton() {
    $("#start-game-btn").attr("disabled", true);
  },

  displayCurrentPlayer(player) {
    $(".current-player").text(player.name);
    this.updateScores(player)
  },

  updateScores(player) {
    const $score = player.name === $('.player-one-name').text() ? $('.player-one-score') : $('.player-two-score'); 
    $score.text(player.score)
    $("#current-round-total h2").text(player.score);
  }

}