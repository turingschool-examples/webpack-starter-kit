import $ from "jquery";

export default {
  createQuestion(element) {
    const $currentQuestion = $("#current-question");
    $currentQuestion.html(element);
  },
  createAnswers(answersObject) {
    answersObject.forEach((solution, index) => {
      const indexPlusOne = index + 1;
      $(`.answer-${indexPlusOne}`).html(solution.answer);
      $(`.answer-${indexPlusOne}-pts`).html(solution.respondents);
    });
  },

  clearInput() {
    $("#player-guess").val("");
  },

  hideAnswers() {
    $(".answer").each(function() {
      $(this).addClass("visHidden");
      $(this)
        .parent()
        .next()
        .children()
        .addClass("visHidden");
    });
  },

  revealCorrectAnswer(correctAnswer) {
    $(".answer").each(function() {
      if ($(this).text() === correctAnswer.answer) {
        $(this).removeClass("visHidden");
        $(this)
          .parent()
          .next()
          .children()
          .removeClass("visHidden");
      }
    });
  }
};
