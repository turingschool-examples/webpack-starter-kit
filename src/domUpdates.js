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

  toggleStartPopUp() {
    $(".start-game-pop-up").toggle();
  },

  hidePopUps() {
    $(".next-round-pop-up").hide();
    $(".lightning-round-pop-up").hide();
    $('.switch-player-pop-up').hide();
    $('.end-game-pop-up').hide();
  },

  toggleSwitchPlayerPopUp() {
    // TODO change to switch player
    $(".toggleLightningRoundPopUp").toggle();
  },

  toggleEndGamePopUp() {
    // TODO
  },

  clearguess() {
    $('#guess-input').val('');
  },

  updateRoundPopUpNames(players) {
    $("#player-one-name-round-pop-up").text(players[0].name);
    $("#player-two-name-round-pop-up").text(players[1].name);
  },

  updateLightningRoundPopUpNames(players) {
    $("#player-one-name-lightning-round-pop-up").text(players[0].name);
    $("#player-two-name-lightning-round-pop-up").text(players[1].name);
  },

  toggleNextRoundPopUp() {
    $(".next-round-pop-up").toggle();
  },

  toggleLightningRoundPopUp() {
    $(".lightning-round-pop-up").toggle();
  },

  toggleSwitchPlayerPopUp() {
    $(".switch-player-pop-up").toggle();
  },

  startGame({ players, currentPlayer }) {
    this.toggleStartPopUp();
    this.updateNames(players[0].name, players[1].name);
    this.updateScores(players[0]);
    this.updateScores(players[1]);
    this.displayCurrentPlayer(currentPlayer);
  },

  updateNames(p1name, p2name) {
    $(".player-one-name").text(p1name);
    $(".player-two-name").text(p2name);
  },

  startRound({ question, responses }, player) {
    $('#current-question').text(question);
    this.loadReaponses(responses);
    this.hideResponses();
    this.displayCurrentPlayer(player);
  },

  hideResponses() {
    $('.response-card').each((i, card) => $(card).show());
  },

  displayCurrentPlayer({ name, score }) {
    $(".current-player span").text(name);
    $("#current-round-total h2").text(score);
  },

  updateScores({ name, score }) {
    const $scoreToUpdate = name === $('.player-one-name').text() ? $('.player-one-score') : $('.player-two-score'); 
    $scoreToUpdate.text(score)
    $('#current-round-total h2').text(score);
  }

}