import domUpdates from "./domUpdates";
import Game from "./Game.js"
// import window.game from "./index.js"
// import Player from "./Player.js"

class Round {
    constructor(survey, surveyAnswers) {
        this.survey = survey;
        this.surveyAnswers = surveyAnswers; 
        this.guesses = [];
        this.correctGuesses = [];
    }

    checkGuess(guess) {
        //check against prev guesses
            //if a previous guess, say it's already been guessed and try again.  clear input.
            //if not guessed before, saveGuess() and checkAnswer()
    }
        
    saveGuess(guess) {
        this.guesses.push(guess);
        // console.log('Saved guesses:', this.guesses);
    }

    checkAnswer(guess) {
        const answers = this.surveyAnswers.map(answerObj => answerObj.answer.toLowerCase());

        if (answers.includes(guess)) {
            domUpdates.displayCorrectGuess(guess);
            this.correctGuesses.push(guess)
            // console.log(this.correctGuesses);
            this.getPoints(guess);
        } else {
            game.toggleActivePlayer();
        }
        
            //if answer and answers.length IS 1
                //check roundNum, and if 3 => checkForWinner()
                //check round, num and if < 3 => game.startNewRound()
            //if not answer, clear the input and toggleActivePlayer()
    }

    getPoints(guess) {

        let points = this.surveyAnswers.reduce((a, obj) => {
            if (obj.answer.toLowerCase() === guess) {
                a = obj.respondents
            }
            return a;
        }, 0)
        game.activePlayer.increaseScore(points)
    }

    toggleActivePlayer() {
        //if active player is p1, active player = p2, else active player is p1.
        //run fn to indicate active player in the dom
    }
    

    displayAnswer() {
        //maybe for Index.js, for updating answer in the dom.
        //sortAnswers();
    }

    sortAnswers() {
        //maybe for Index.js, for sorting answers displayed in the dom by respondent num.
    }
}

export default Round;