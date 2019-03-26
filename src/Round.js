import $ from 'jquery';


class Round {
  constructor(survey) {
    this.questionSet = survey;
    this.correctAnswer = 0;
  }
      
    getAnswer() {
        let guess = $('.answerInput').val();
        this.checkAnswer(guess);
    };

    checkAnswer(guess) {
        let answers = this.questionSet.answers;
        let answerSet = [];
        answers.forEach((answer) => {
            answerSet.push(answer.answer, answer.respondents);
        });
            console.log('ouranswers', answerSet);
        $('.answerInput').val('');
        
        let correctGuess = [];
        if (answerSet.find((guess) => {
            correctGuess.push(answer.answer, answer.respondents);
            console.log('correct guess', correctGuess);
            // domUpdates.appendAnswer(correctGuess);
            player.addScore(answer.respondents);
        });
            console.log('respondent value', answer.respondents);
        // } else {
        //     $('.wrongAnswer').css('visibility', 'visible');
        //     game.switchPlayers() // method of Game
        // }
    );
}
}
    // getRespondents(guess) {

    // }
    // if(guess == '') {
    //     $('.errorMessage').css('visibility', 'visible');
    // };



    // endRound()     
    // }
// }

// } when correctAnswer === 3, end round


export default Round;