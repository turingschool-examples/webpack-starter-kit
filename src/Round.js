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
        const answers = this.surveyAnswers.map(answerObj => answerObj.answer.toLowerCase());

        if (answers.includes(guess)) {
            domUpdates.displayCorrectGuess(guess);
            this.correctGuesses ++
            this.getPoints(guess, game);
        } else {
            game.toggleActivePlayer();
        }

        if (this.correctGuesses === 3) {
            this.endRound(game);
        }
    }

    getPoints(guess, game) {
        let points = this.surveyAnswers.reduce((a, obj) => {
            if (obj.answer.toLowerCase() === guess) {
                a = obj.respondents
            }
            return a;
        }, 0);
        game.activePlayer.increaseScore(points)
    }

    endRound(game) {
        domUpdates.clearAnswerBoard();
        game.toggleActivePlayer();
        game.startNewRound();
    }
}

export default Round;