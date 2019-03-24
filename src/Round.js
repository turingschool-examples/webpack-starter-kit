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
    createNewRound(stage) {
        if(this.allCorrectAnswers.length === 0) {
            this.rounds.forEach(round => {
                let roundObject = this.puzzle.getRandomAnswer(round)
                this.allCorrectAnswers.push(roundObject.correct_answer.toUpperCase().split(''))
                this.answerClues.push(roundObject.description)
                this.answerCategories.push(roundObject.category)
            });
        }
        this.showCategoriesClues(stage)
        console.log(this.allCorrectAnswers)
        // console.log(this.answerClues)
        // console.log(this.answerCategories)
    }

    showCategoriesClues(stage) {
        domUpdates.changeCategory(this.answerCategories[stage])
        domUpdates.changeClue(this.answerClues[stage])     
    }

    incrementRound() {

    }
}

export default Round;