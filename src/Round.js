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

        checkAnswer(guess) {
        // if(guess != game.surveys['answers'].val(answer)) {
        // $('.answerInput').reset()
        // //wrong answer error message
        // game.switchPlayers()
        // }

        // if(guess ==== //answer from dataset ) {
        // $('.answerInput').reset()
        // appendAnswer()
        // game.addScore()
         
        // }

         if(guess == '') {
           $('.errorMessage').css('visibility', 'visible');
        }
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