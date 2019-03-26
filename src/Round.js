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
            score = currentPlayer.addScore(answer.respondents);
            console.log(currentPlayer.score); //undefined, why?
            // domUpdates.appendAnswer(answer.answer, answer.respondents);//needs to be called from game
            // return score;
        };

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