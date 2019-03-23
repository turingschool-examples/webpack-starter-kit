import $ from 'jquery';

export default {

	generalEvents() { 
		$(".submit-btn").on( "click", () => {
			if($('#player-1-name').val() == '' || $('#player-2-name').val() == ''){
				return;
			} else {
			$(".main-content").slideDown();
			$(".user-inputs").hide();
			}
		})

		// $('#player-1-name').text

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
		console.log('am i real?')
	},

	createAnswers(a1,a1points,a2,a2points,a3,a3points) {
		$(".answer-1").html(a1);
		$(".answer-1-pts").html(a1points);

		$(".answer-2").html(a2);
		$(".answer-2-pts").html(a2points);

		$(".answer-3").html(a3);
		$(".answer-3-pts").html(a3points);
		console.log('dom test answers');
	}

}
