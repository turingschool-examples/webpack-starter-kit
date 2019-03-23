import $ from 'jquery';

export default {

	generalEvents() { 
		$(".submit-btn").on( "click", () => {
			if($('#player-1-name').val() == '' || $('#player-2-name').val() == ''){
				return;
			} else {
			let p1Name = $('#player-1-name').val();
			let p2Name = $('#player-2-name').val();
			$('.player-1-name').text(p1Name);
			$('.player-2-name').text(p2Name);
			$(".main-content").slideDown();
			$(".user-inputs").hide();
			}
		})

		// $('.player-1-name').text() = $('#player-1-name').val();

		// const $playerOneName = $('#player-1-name');
		// const $playerTwoName = $('#player-2-name');

		//after 3 guesses are complete show restart game button
		$(".player-cards").on("click", () => {
			$(".restart-game").slideDown(300);
		})
	},

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
	},

	listenForGuess() {
		$("#submit-guess").click( event => {
			event.preventDefault();
			let userInput = $("#player-guess").val()
			console.log("userInput: " + userInput);
		})
		//when user clicks submit button (#submit-guess) pass the string in the input into an variable
		//go to Player.js
	}

}
