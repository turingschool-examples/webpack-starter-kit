import $ from 'jquery';

export default {

  displayRoundData(question, answers, roundNum) {
    $(".survey-display").text(question);
    $(".round-num-display").text(roundNum);
    answers.sort(function (a, b) {
      return b.respondents - a.respondents;
    });
    answers.forEach((answer, i) => {
      const answerNum = i + 1;
      $(`.answer-${answerNum}-text`).text(answers[i].answer);
      $(`.answer-${answerNum}-score`).text(answers[i].respondents);
    });
  },

  displayCorrectGuess(answer) {
    $(`p.answer-text:contains(${answer})`).parent().removeClass("hidden");
  },

  displayPlayer1() {
    $(".player-1-side").addClass("active-player-area");
    $(".player-2-side").removeClass("active-player-area");
  },

  displayPlayer2() {
    $(".player-2-side").addClass("active-player-area");
    $(".player-1-side").removeClass("active-player-area");
  },

  displayPlayer1Score(score) {
    $(".player-1-score").text(score);
  },

  displayPlayer2Score(score) {
    $(".player-2-score").text(score);
  },

  resetPageDefaults() {
    $(".answer-data").addClass("hidden");
    $(".player-1-score").text("0");
    $(".player-2-score").text("0");
  },

  showNoMatchMsg() {
    $("#no-match-msg").fadeIn("fast", function() {
      $("#no-match-msg").delay(850).fadeOut(); 
    });
  },

  showMustEnterGuessMsg() {
    $("#must-enter-guess-msg").fadeIn("fast", function() {
      $("#must-enter-guess-msg").delay(850).fadeOut(); 
    });
  },

  showAlreadyTriedMsg() {
    $("#already-tried-msg").fadeIn("fast", function() {
      $("#already-tried-msg").delay(850).fadeOut(); 
    });
  },

  endOfRoundMsg() {
    $("#round-winner-msg").fadeIn("fast", function() {
      $("#round-winner-msg").delay(850).fadeOut(); 
    });
  },
    
  clearAnswerBoard() {
    $(".answer-data").addClass("hidden");
  },

  showWinnerScreen(winnerName) {
    winnerName = winnerName;
    $(".winner-name").text(winnerName.toUpperCase()+'!');
    $(".winner-screen").removeClass("hidden");
  },

  showTieScreen() {

  }
}
