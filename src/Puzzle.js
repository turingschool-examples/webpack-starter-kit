import data from './data.js'

class Puzzle {
    constructor(){
        this.correctAnswer = '';
        this.splitUpWord = []
        this.clues = '';
    }
    
    getRandomAnswer(roundData){
        let randomIndex = Math.floor(Math.random() * (data.puzzles[`${roundData}_word_answers`].puzzle_bank.length-1) + 0)
        let newAnswer = data.puzzles[`${roundData}_word_answers`].puzzle_bank.find( (cur, idx) => {
            return idx === randomIndex
        })
        this.correctAnswer = newAnswer.correct_answer;
        return this.correctAnswer
    }

    findAnswerLength(){
        
    }
}

export default Puzzle;