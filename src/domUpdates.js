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
        $.expr[':'].contains = function(a, i, m) {
            return $(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
        };
        
        $(`p:contains(${guess})`).parent().removeClass("hidden");
        $(".guess-input").val("");
    }
}
