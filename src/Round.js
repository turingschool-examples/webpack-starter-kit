import Puzzle from './puzzle.js'
import domUpdates from './domUpdates.js'

class Round{
    constructor(){
        this.roundNumber = 1
        this.rounds = ['one', 'two', 'three', 'four', 'four'];
        this.allCorrectAnswers = [];
        this.answerClues = [];
        this.correctSplit = [];
        this.answerCategories = []
        this.puzzle = new Puzzle();
    }
    createRound() {
        this.rounds.forEach(round => {
            let roundObject = this.puzzle.getRandomAnswer(round)
            this.allCorrectAnswers.push(roundObject.correct_answer.toUpperCase().split(''))
            this.answerClues.push(roundObject.description)
            this.answerCategories.push(roundObject.category)
        });
        // this.puzzle.splitAllAnswers(this.correctSplit, this.allCorrectAnswers)
        domUpdates.changeCategory(this.answerCategories[0])
        domUpdates.changeClue(this.answerClues[0])
        console.log(this.allCorrectAnswers)
        // console.log(this.answerClues)
        // console.log(this.answerCategories)
    }
}

export default Round;