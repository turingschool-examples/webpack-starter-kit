import Puzzle from './puzzle.js'

class Round{
    constructor(){
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
            this.allCorrectAnswers.push(roundObject.correct_answer)
            this.answerClues.push(roundObject.description)
            this.answerCategories.push(roundObject.category)
        });
        this.puzzle.splitAllAnswers(this.correctSplit, this.allCorrectAnswers)
        console.log(this.allCorrectAnswers)
        console.log(this.answerClues)
        console.log(this.answerCategories)
    }
}

export default Round;