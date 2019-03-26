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
  }
};
