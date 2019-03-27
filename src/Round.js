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
    domUpdates.highlightPlayer(currentPlayer.playerId);
    //needs to iluminate upon game creation for player 1 and should be removed when player switches
    console.log(correctAnswer);
    if (correctAnswer) {
        console.log('if correct')
        let score = correctAnswer.respondents;
        currentPlayer.addScore(score);
        this.answerCount++
        domUpdates.appendAnswer(answers, correctAnswer.answer, correctAnswer.respondents);
    } else {
        console.log('incorrect')
        domUpdates.wrongAnswer();
        // domupdates.unhighlightPlayer(currentPlayer.playerId);
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
        this.answerCount = 0;
    }


    lightningRound(currentPlayer) {
    console.log('create lightning round');
    domUpdates.multiplierMessage(this.player1, this.player2);
    const survey = this.surveys[Math.floor(Math.random() * this.surveys.length)];
    this.lightningRound = new LightningRound();
//we will have to pass everything into this
//what is the point of having a new instance?
    };
}


export default Round;