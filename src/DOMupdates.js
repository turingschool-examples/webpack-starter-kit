import $ from "jquery";

export default {
	createQuestion(element) {
		const $currentQuestion = $("#current-question");
		$currentQuestion.html(element);
	},

	// createAnswers(a1, a1points, a2, a2points, a3, a3points) {
	//   $(".answer-1").html(a1);
	//   $(".answer-1-pts").html(a1points);

	//   $(".answer-2").html(a2);
	//   $(".answer-2-pts").html(a2points);

	//   $(".answer-3").html(a3);
	//   $(".answer-3-pts").html(a3points);
	// }

	createAnswers(answersObject) {
		answersObject.forEach((solution, index) => {
			const indexPlusOne = index + 1;
			$(`.answer-${indexPlusOne}`).html(solution.answer);
			$(`.answer-${indexPlusOne}-pts`).html(solution.respondents);
		});
	}
};
