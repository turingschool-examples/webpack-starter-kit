import domUpdates from './domUpdates.js';



class Round {
  constructor(survey) {
    this.questionSet = survey;
    this.correctAnswer = 0;
};


checkAnswer(guess, currentPlayer, game) {
    let answers = this.questionSet.answers;
    let score;
    domUpdates.clearInputField();
    answers.forEach((answer) => {
            debugger;
        if (guess.toLowerCase() === answer.answer.toLowerCase()) {
            let score = answer.respondents;
            currentPlayer.addScore(score);
            domUpdates.changeScore(score, currentPlayer);
            // dom updates append answer (answer.answer, answer.respondents)
            // if these things happen, we're done here, get out of the loop, return
            }
        });




    if (guess !== answer.answer) {
            game.switchPlayer(); // how to fire
            domUpdates.wrongAnswer();
        };

    if (guess == '') {
            domUpdates.errorMessage();
        };


    // endRound()
    //when correctAnswer === 3, end round    
    // }
}
}


export default Round;