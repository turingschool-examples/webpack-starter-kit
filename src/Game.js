import Player from './Player.js';
import Wheel from './Wheel.js';
import Round from './Round.js'

class Game {
    constructor() {
        this.turn = 0;
        this.players = [];
        this.wheel = new Wheel();
        this.round = new Round();
        this.useLetters = [];
    }
    
    fillUseLetters(letter) {
        this.useLetters.push(letter.target.innerText);
        console.log(this.useLetters);
    }

    fillVowels(vowel) {
        this.useLetters.push(vowel.target.innerText);
        console.log(this.useLetters);
    }

    startGame(name1, name2, name3) {
        this.round.createRound()
        this.wheel.getWheelValues()
        if(this.players.length === 0) {
            let player1 = new Player(name1);
            let player2 = new Player(name2);
            let player3 = new Player(name3);
            this.players.push(player1, player2, player3)
        }
    }
    guessChecker() {}

}

export default Game;