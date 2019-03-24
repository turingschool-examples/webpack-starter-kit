import $ from 'jquery';


export default {

    displayRoundData(question, answers, roundNum) {
        $(".survey-display").text(question);
        $(".round-num-display").text(roundNum);
        answers.sort(function (a, b) {
            return b.respondents - a.respondents;
        });
        answers.forEach((answer, i) => {
            const answerNum = i + 1;
            $(`.answer-${answerNum}-text`).text(answers[i].answer);
            $(`.answer-${answerNum}-score`).text(answers[i].respondents);
        });
    },

    displayCorrectGuess(guess) {
        // console.log($(".answer-text"));
        // $(".answer-text").filter(answer => console.log(answer.text()))
        //     //.parent().removeClass("hidden");

        $.expr[':'].contains = function(a, i, m) {
            return $(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };

        $(`p:contains(${guess})`).parent().removeClass("hidden");
    },

    displayPlayer1() {
        $(".player-1-side").addClass("active-player-area");
        $(".player-2-side").removeClass("active-player-area");
    },

    displayPlayer2() {
        $(".player-2-side").addClass("active-player-area");
        $(".player-1-side").removeClass("active-player-area");
    },

    displayPlayer1Score(score) {
        $(".player-1-score").text(score);
    },

    displayPlayer2Score(score) {
        $(".player-2-score").text(score);
    },

    clearAnswerBoard() {
        $(".answer-data").addClass("hidden");

    }
}
