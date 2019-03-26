import domUpdates from './domUpdates.js';
import Game from './Game.js';


class Round {
  constructor(survey) {
    this.questionSet = survey;
    this.correctAnswer = 0;
  }
      
   
    checkAnswer(guess, player, game) {
        let answers = this.questionSet.answers;
        domUpdates.clearInputField();
        answers.forEach((answer) => {
            if(guess.toLowerCase() === answer.answer.toLowerCase()) {
                player.addScore(answer.respondents);
                console.log('wow');
                //takes some answers but not others
            } else {
                console.log('heyyy');
                game.switchPlayer();
            }

            if(guess == '') {
             domUpdates.errorMessage();
            };
        })
    }

    // endRound()
    //when correctAnswer === 3, end round    
    // }
}


export default Round;