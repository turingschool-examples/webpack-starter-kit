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
        $($cards[i]).fadeOut()
      }
    })
  },

  toggleStartModal() {
    $(".start-game-modal").fadeToggle();
  },

  hideModals() {
    $(".next-round-modal").hide();
    $(".lightning-round-modal").hide();
    $(".switch-player-modal").hide();
    $(".end-game-modal").hide();
  },

  toggleEndGameModal() {
    $(".end-game-modal").fadeToggle();
  },

  toggleWinner(winner, players) {
    if (winner.name === players[0].name) {
      $('.p1-winner').addClass('winner');
      $('.p2-winner').removeClass('winner');
    } else {
      $('.p2-winner').addClass('winner');
      $('.p1-winner').removeClass('winner');
    }
  },

  clearGuess() {
    $('#guess-input').val('');
  },

  updateRoundModalNames(players) {
    $("#player-one-name-round-modal").text(players[0].name);
    $("#player-two-name-round-modal").text(players[1].name);
  },

  updateLightningRoundModalNames(players) {
    $("#player-one-name-lightning-round-modal").text(players[0].name);
    $("#player-two-name-lightning-round-modal").text(players[1].name);
  },

  toggleNextRoundModal() {
    $(".next-round-modal").fadeToggle();
  },

  toggleLightningRoundModal() {
    $(".lightning-round-modal").fadeToggle();
  },

  toggleSwitchPlayerModal() {
    $(".switch-player-modal").fadeToggle();
  },

  startGame(players) {
    this.toggleStartModal();
    this.updateNames(players[0].name, players[1].name);
    this.updateScores(players[0]);
    this.updateScores(players[1]);
    $('#player-one-input').val('');
    $('#player-two-input').val('');
  },

  updateNames(p1name, p2name) {
    $(".player-one-name").text(p1name);
    $(".player-two-name").text(p2name);
  },

  startRound(round, { question, responses }, player) {
    $('#current-question').text(question);
    this.loadReaponses(responses);
    this.hideResponses();
    this.updateRoundText(round);
    this.toggleInitialPlayer(round, player);
  },

  hideResponses() {
    $('.response-card').each((i, card) => $(card).show());
  },

  updateScores({ name, score }) {
    let $scoreToUpdate;
    if ( name === $('.player-one-name').text()) {
      $scoreToUpdate = $('.player-one-display-score');
    } else {
      $scoreToUpdate = $('.player-two-display-score'); 
    }
    $scoreToUpdate.text(score)
  },

  toggleStartBtn(status) {
    $(".start-game-btn").attr("disabled", status) 
  },

  updateModal(players) {
    $('.player-one-name-modal').text(players[0].name);
    $('.player-two-name-modal').text(players[1].name);
    $('.player-one-score-modal').text(players[0].score);
    $('.player-two-score-modal').text(players[1].score);
  },

  updateRoundText(round) {
    let value;
    if (round === 1) {
      value = 'Round 1';
    } else if (round === 2) {
      value = 'Round 2';
    } else {
      value = 'Final Round';
    }
    $('.current-round-text').text(value);
  },

  toggleInitialPlayer(round, { name }) {
    if (round === 1) {
      $('.player-one-display-score').addClass('active');
      $('.player-two-display-score').removeClass('active');
    } else if (round === 2) {
      $('.player-one-display-score').removeClass('active');
      $('.player-two-display-score').addClass('active');
    } else if (round === 3) {
      if (name === $('.player-one-name').text()) {
        $('.player-one-display-score').addClass('active');
        $('.player-two-display-score').removeClass('active');
      } else {
        $('.player-one-display-score').removeClass('active');
        $('.player-two-display-score').addClass('active');
      }
    }
  },

  switchPlayer() {
    $('.player-one-display-score').toggleClass('active');
    $('.player-two-display-score').toggleClass('active');
  }

}