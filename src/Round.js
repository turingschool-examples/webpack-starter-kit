class Round {
  constructor() {
         this.surveys = [];
         this.correctAnswer = 0;
  }
         getSurvey() {

          // const question = surveys.map.random.splice;
            // splice returns our one question/answers
            // update the DOM - survey
      }

        getAnswer() {
         let guess = $('.answerInput').val();
        checkAnswer(guess);
        console.log('happy');
        
        }

   //  checkAnswer() {
   //  if(answerInput != //answer from dataset ) {
   //  $('.answerInput').reset()
   //  //wrong answer error message
   //  game.switchPlayers()
   //  }

   // if(answerInput ==== //answer from dataset ) {
   //  $('.answerInput').reset()
   //  appendAnswer()
   //  game.addScore()
       
   //   }
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