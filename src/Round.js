import domUpdates from "./domUpdates";
import Game from "./Game.js"
// import window.game from "./index.js"
// import Player from "./Player.js"

class Round {
    constructor(survey, surveyAnswers) {
        this.survey = survey;
        this.surveyAnswers = surveyAnswers; 
        this.guesses = [];
        this.correctGuesses = 0;
    }

    checkGuess(guess) {
        //check against prev guesses
            //if a previous guess, say it's already been guessed and try again.  clear input.
            //if not guessed before, saveGuess() and checkAnswer()
    }
        
    saveGuess(guess) {
        this.guesses.push(guess);
    }

    checkAnswer(guess, game) {
        const match = this.surveyAnswers
            .find(answerObj => answerObj.answer.toLowerCase()
            .includes(guess.toLowerCase()));

        if (match) {
            domUpdates.displayCorrectGuess(match.answer);
            this.correctGuesses++; 
            this.getPoints(guess, game);
            this.surveyAnswers.splice(this.surveyAnswers.indexOf(match), 1);
        } else {
            domUpdates.showNoMatch();
            game.toggleActivePlayer();
        }

        if (this.correctGuesses === 3) { //could also use how many guesses are left in the array
            this.endRound(game);
        }
    }

    getPoints(guess, game) {
        //now that i refactored my code above to find a matching obj =>
            //we could just directly call increaseScore with match.points arg
        let points = this.surveyAnswers.reduce((a, obj) => {
            if (obj.answer.toLowerCase() === guess) {
                a = obj.respondents;
            }
            return a;
        }, 0);
        game.activePlayer.increaseScore(points);
    }

    endRound(game) {
        domUpdates.clearAnswerBoard();
        game.toggleActivePlayer();
        game.startNewRound();
    }
}

export default Round;