import $ from 'jquery';

export default {

	generalEvents() { 
			$(".user-inputs").on( "click", () => {
			$(".main-content").slideDown();
			$(".user-inputs").hide();
		})

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
	}

}
