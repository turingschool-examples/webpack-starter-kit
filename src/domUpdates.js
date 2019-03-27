import $ from 'jquery';

export default {

  enableTabbing() {
    $(".guess-input, #submit-guess-btn, #start-btn").each(function () {
      $(this).attr("tabindex", "0");
    });
  },

  disableBackgroundTabbing() {
    $(".guess-input, #submit-guess-btn, #start-btn").each(function () {
      $(this).attr("tabindex", "-1");
    });
  },

  displayRoundData(question, answers, roundNum) {
    if (roundNum > 3) {
      roundNum = 3;
    }
    
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
      $("#round-winner-msg").delay(2000).fadeOut(); 
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
    $(".tie-screen").removeClass("hidden");
  },

  displayFastroundDialog(playerName) {
    $("strong").text(playerName);
    $(".fastround-ready-screen").removeClass("hidden");
  },

  displayTimer1() {
    let seconds = 30; //would be ideal to tie this to property value
    const interval = setInterval(function() {

      $(".timer-1").html(--seconds);

      if (seconds <= 0 && window.game.currentRound === 3) {
        clearInterval(interval);
        $(".timer-area-1").addClass("hidden");
        $(".fastround-ready-screen").removeClass("hidden");
        window.game.triggerNewRound();
      } else if (seconds <= 0 && window.game.currentRound === 4) {
        clearInterval(interval);
        $(".timer-area-1").addClass("hidden");
      }
    }, 1000);
  },

  displayTimer2() {
    let seconds = 30; //would be ideal to tie this to property value
    const interval = setInterval(function() {
      
      $(".timer-2").html(--seconds);

      if (seconds <= 0 && game.currentRound === 3) {
        clearInterval(interval);
        $(".timer-area-2").addClass("hidden");
        $(".fastround-ready-screen").removeClass("hidden");
        window.game.triggerNewRound();
      } else if (seconds <= 0 && game.currentRound === 4) {
        clearInterval(interval);
        $(".timer-area-2").addClass("hidden");
      }
    }, 1000);
  },

  removeTimers() {
    $(".timer-area-1").addClass("hidden");
    $(".timer-area-2").addClass("hidden");
  },

  blurGuessInput() {
    $(".guess-input").trigger("blur");
  }
    
}
