import $ from 'jquery';


class Round {
  constructor(survey) {
         this.questionSet = survey ;
         this.correctAnswer = 0;
  }
      
        getAnswer() {
         let guess = $('.answerInput').val();
        this.checkAnswer(guess);
        }

        checkAnswer() {
          console.log('hooray!');
        // if(answerInput != //answer from dataset ) {
        // $('.answerInput').reset()
        // //wrong answer error message
        // game.switchPlayers()
        // }

        // if(answerInput ==== //answer from dataset ) {
        // $('.answerInput').reset()
        // appendAnswer()
        // game.addScore()
         
        // }
        }

        //appendAnswer() {
//remove 1
        // $('#responseOne').append();  
       // }

    // endRound() {
        
    // }
}

// } when correctAnswer === 3, end round


export default Round;