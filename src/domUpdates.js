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
      $(`.answer${i}-num`).text(answer.respondents);
    });
  },

  revealCorrectAnswer: function(correctAnswer) {
    $(".answer").each(function() {
      if($(this).text() === correctAnswer.answer) {
        $(this).css("background-color", "red");
      }
    });
  },

  updateScore: function(player, score) {
    player === 1 ? $(".sb-one > h6").text(score) : $(".sb-two > h6").text(score);
  }


}

export default domUpdates;