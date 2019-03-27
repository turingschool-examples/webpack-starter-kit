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
        this.answerCount++

        // dom updates append answer (answer.answer, answer.respondents)
        // if these things happen, we're done here, get out of the loop, return
    } else {
        console.log('incorrect')
        domUpdates.wrongAnswer();
        game.switchPlayer();   
    };

    console.log(currentPlayer);

    if (guess === '') {
        console.log('empty')
        domUpdates.errorMessage();
    };

    if(this.answerCount === 3){
        this.endRound(game);
    }
};

    
    endRound(game) {
        game.createRound();
        //create new round
        //increase round number to 2,3,4
        //keep player score
        //keep players
        //reset answer count to 0
        //get a new question set
        this.answerCount = 0;
     }

}


export default Round;