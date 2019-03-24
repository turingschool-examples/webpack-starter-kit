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
    $(".survey").text(round.survey.question)
  },

  populateAnswers: function(round) {
    round.answers.forEach((answer, i) => {
      $(`.answer${i}`).text(answer.answer);
      $(`.answer${i}-num`).text(answer.respondents);
    })
  }


}

export default domUpdates;