import $ from 'jquery';


class Round {
  constructor(survey) {
    this.questionSet = survey;
    this.correctAnswer = 0;
  }
      
    getAnswer() {
        let guess = $('.answerInput').val();
        this.checkAnswer(guess);
    };

    checkAnswer(guess) {
        let answers = this.questionSet.answers;
        let answerSet = [];
        answers.forEach((answer) => {
            answerSet.push(answer.answer);
        });
        $('.answerInput').val('');
        
        // if (answerSet.includes(guess)) {
        //     appendAnswer(); // easy win on the DOM!
        //     player.addScore(); // method of Player or Game?
        // } else {
        //     $('.wrongAnswer').css('visibility', 'visible');
        //     game.switchPlayers() // method of Game
        // }
    };

    // if(guess == '') {
    //     $('.errorMessage').css('visibility', 'visible');
    // };
}





    //appendAnswer() {


//remove 1
        // $('#responseOne').append();  
       // }
    // endRound()     
    // }
// }

// } when correctAnswer === 3, end round


export default Round;