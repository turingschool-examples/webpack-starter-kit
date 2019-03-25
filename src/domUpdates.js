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

  animateKnight: function() {

    $(".round-banner").css({'left': '1200px', 'display': 'block'}).animate({'left' : '-1400px'}, 6000);
  }

}

export default domUpdates;