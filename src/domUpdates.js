import $ from 'jquery';

export default {

    displayRoundData(question, roundNum) {
        $(".survey-display").text(question);
        $(".round-num-display").text(roundNum);
    },

    displayAnswer(guess) {
        $(`p:contains(${guess})`).removeClass("hidden");
    }
}
