import domUpdates from "./domUpdates";

class Round {
    constructor(survey, surveyAnswers) {
        this.survey = survey;
        this.surveyAnswers = surveyAnswers; 
        this.guesses = [];
    }

    checkGuess(guess) {
        //check against prev guesses
            //if a previous guess, say it's already been guessed and try again.  clear input.
            //if not guessed before, saveGuess() and checkifAnswer()
    }
        
    saveGuess(guess) {
        //push guess into guesses array
    }

    checkIfAnswer(guess) {
        const answers = this.surveyAnswers.map(answerObj => answerObj.answer.toLowerCase());

        if (answers.includes(guess.toLowerCase())) {
            domUpdates.displayCorrectGuess(guess);
        }
        //compare against answer array
            //if answer and answers.length is < 1
                //display on board
                //sort answers on board
                //increment player score
                //clear input
                //pop answer out of answer array
            //if answer and answers.length IS 1
                //check roundNum, and if 3 => checkForWinner()
                //check round, num and if < 3 => game.startNewRound()
            //if not answer, clear the input and toggleActivePlayer()
    }
}

export default Round;