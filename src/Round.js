import domUpdates from './domUpdates.js';



class Round {
  constructor(survey) {
    this.questionSet = survey;
    this.correctAnswer = 0;
}


checkAnswer(guess, currentPlayer) {
    let answers = this.questionSet.answers;
    let score;
    domUpdates.clearInputField();
    answers.forEach((answer) => {
        if(guess.toLowerCase() === answer.answer.toLowerCase()) {
            console.log('guess correct');
            let score = answer.respondents;
            currentPlayer.addScore(score);
            console.log('bottom of cherckAnswer', score);
            if(score && this.currentPlayer == 1) {
                domUpdates.changeP1Score(score);
            }
            if(score && this.currentPlayer == 2) {
                domUpdates.changeP2Score(score);
            }
        };
// runs switch player even with correct answer, dom not updateing
        if(guess == '') {
            domUpdates.errorMessage();
        };

        return score;

    })
}

    // endRound()
    //when correctAnswer === 3, end round    
    // }
}


export default Round;