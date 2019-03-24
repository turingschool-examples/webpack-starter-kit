import data from './data.js'

class Puzzle {
    constructor(){
        
    }
    
    getRandomAnswer(roundData){
        let randomIndex = Math.floor(Math.random() * (data.puzzles[`${roundData}_word_answers`].puzzle_bank.length-1) + 0)
        let newAnswer = data.puzzles[`${roundData}_word_answers`].puzzle_bank.find( (cur, idx) => {
            return idx === randomIndex
        })
        return newAnswer
    }

    // splitAllAnswers(splitAnswers, correctArray) {
    //     correctArray.forEach(correct => {
    //         splitAnswers.push(correct.split(''))
    //     })
    // }
}

export default Puzzle;