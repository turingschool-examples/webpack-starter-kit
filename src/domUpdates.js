/*eslint-disable*/
import $ from 'jquery';

const domUpdates = {
  updateNames: function(name1, name2) {
    $(".player1-name > h4").text(name1);
    $(".player2-name > h4").text(name2);
  },
  
  revealGame: function() {
    $(".name-input-container").css("display", "none");
    $(".game-area").css("display", "grid");
  },

  hideGame: function() {
    $(".game-area").css("display", "none");
    $(".name-inputs").css("display", "none");
    $(".multiplier-inputs").css("display", "block");
    $(".name-input-container").css("display", "block");
  },

  populateSurvery: function(round) {
    $(".survey").text(round.survey.question);
  },

  populateAnswers: function(round) {
    round.answers.forEach((answer, i) => {
      $(`.answer${i}`).text(answer.answer);
      $(`.answer${i}`).addClass("hidden");
      $(`.answer${i}-num`).text(answer.respondents);
      $(`.answer${i}-num`).addClass("hidden");
    });
  },

  revealCorrectAnswer: function(correctAnswer) {
    $(".answer").each(function() {
      if($(this).text() === correctAnswer.answer) {
        $(this).removeClass("hidden");
        $(this).parent().next().children().removeClass("hidden");
      }
    });
  },

  updateScore: function(player, score) {
    player === 1 ? $(".sb-one > h6").text(score) : $(".sb-two > h6").text(score);
  },

  toggleActivePlayer: function(player1Turn) {
    if(player1Turn) {
      $(".pb-one").addClass("active");
      $(".pb-two").removeClass("active");
    } else {
      $(".pb-two").addClass("active");
      $(".pb-one").removeClass("active");
    }
  },

  clearInput: function() {
    $(".guess-input").val('');
  },

  showGuessMessage: function(guessType) {
    $(`.${guessType}-guess`).removeClass("hidden");
  },

  hideGuessMessages: function() {
    $(".correct-guess").addClass("hidden");
    $(".wrong-guess").addClass("hidden");
  },

  animateKnight: function(currentRound) {
    let src = "./images/round-one.png";
    if(currentRound === 2) {
      src = "./images/round-two.png";
    } else if (currentRound === 3) {
      src = "./images/final-round.png";
    }
    $(".round-banner-text").attr("src", src);
    $(".round-banner").css({'right': '0px', 'display': 'block'}).animate({'right' : '3000px'}, 6000);
  },

  revealTimer: function() {
    $(".timer").removeClass('hidden');
    $(".start-timer-btn").removeClass('hidden');
  },

  toggleUserInput: function() {
    $(".user-input").toggleClass('hidden');
    $(".incorrectGuess-holder").toggleClass('hidden');
  },

  showIncorrectGuessPoints: function (incorrectGuessText, incorrectGuessPoints) {
    $("#incGuess-num").text(incorrectGuessText);
    $("#incGuess-points").text(incorrectGuessPoints)
  },

  resetTimer: function () {
    $(".timer").text(30);
  },

  showWinner: function(winner) {
    $(".multiplier-inputs").css("display", "none");
    $(".winner-holder").removeClass("hidden");
    $("#winner-name").text(winner.name);
    $("#winner-score").text(winner.score);
  }

}

export default domUpdates;