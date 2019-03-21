// class Round {
//   constructor(surveys) {
        // this.surveys = [];
        // correctAnswer = 0;
//   }
        // getSurvey() {
          // const question = surveys.map.random.splice;
            // splice returns our one question/answers
            // update the DOM - survey
      //}

        // checkAnswer() {
        //   if(answer ==== answer) {
        //     update DOM to change answer, correctAnswer ++, player.score ++
        //   } else {
        //      wrong answer pop up 
        //      switchPlayer()
        //   }
        // }
        //for new player
        //keep checking answers
        // }

// } when correctAnswer === 3, end round




manipulate the original datasets to pair questions with their correct responses
 -- responses are sorted in order of highest respondents to lowest
on instatiation of a new game:
iterate over original combined datasets
push into new array in Game class
every call for a new survey question (every round) splices from the array in Game
when instantiation deletes (game is over), the copy array goes with it
