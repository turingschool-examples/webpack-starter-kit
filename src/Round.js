import Puzzle from './puzzle.js'

class Round{
    constructor(){
        this.rounds = ['one', 'two', 'three', 'four'];
        this.allGameRounds = [];
        this.puzzle = new Puzzle();
    }
    createRound() {
        this.rounds.forEach(round => {
            this.allGameRounds.push(this.puzzle.getRandomAnswer(round))
        })
        console.log(this.allGameRounds)
    }
}

export default Round;