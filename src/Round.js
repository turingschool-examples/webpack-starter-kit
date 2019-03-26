import domUpdates from './domUpdates.js';



class Round {
  constructor(survey) {
    this.questionSet = survey;
    this.answerCount = 0;
};


checkAnswer(guess, currentPlayer, game) {
    let answers = this.questionSet.answers;
    let score;
    domUpdates.clearInputField();
    let correctAnswer = answers.find(answer => (guess.toLowerCase() === answer.answer.toLowerCase())); 
    console.log(correctAnswer);
    if (correctAnswer) {
        console.log('if correct')
        let score = correctAnswer.respondents;
        currentPlayer.addScore(score);
        domUpdates.changeScore(score, currentPlayer);
        this.answerCount++
        // dom updates append answer (answer.answer, answer.respondents)
        // if these things happen, we're done here, get out of the loop, return
    } else {
        console.log('incorrect')
        game.switchPlayer();
        domUpdates.wrongAnswer();
    };
    console.log(currentPlayer);
    if (guess === '') {
        console.log('empty')
        domUpdates.errorMessage();
    };
};

    

    // endRound()
    //when correctAnswer === 3, end round    
    // }

}


export default Round;