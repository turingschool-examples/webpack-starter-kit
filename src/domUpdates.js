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

  clearInput: function() {
    $(".guess-input").val('');
  },

  showGuessMessage: function(guessType) {
    $(`.${guessType}-guess`).removeClass("hidden");
  },

  hideGuessMessages: function () {
    $(".correct-guess").addClass("hidden");
    $(".wrong-guess").addClass("hidden");
  }

}

export default domUpdates;