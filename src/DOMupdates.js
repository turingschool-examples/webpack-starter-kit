import $ from 'jquery';

export default {

	createQuestion(element) {
		const $currentQuestion = $("#current-question");
		$currentQuestion.html(element);
		// console.log('am i real?')
	},

	createAnswers(a1,a1points,a2,a2points,a3,a3points) {
		$(".answer-1").html(a1);
		$(".answer-1-pts").html(a1points);

		$(".answer-2").html(a2);
		$(".answer-2-pts").html(a2points);

		$(".answer-3").html(a3);
		$(".answer-3-pts").html(a3points);
		// console.log('dom test answers');
	}

	// listenForGuess() {
	// 	$("#submit-guess").on("click", event => {
	// 		event.preventDefault();
	// 		let userInput = $("#player-guess").val()
	// 		console.log("userInput: " + userInput);
	// 	})
		//when user clicks submit button (#submit-guess) pass the string in the input into an variable
		//go to Player.js
	// }

}
