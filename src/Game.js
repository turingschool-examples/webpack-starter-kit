import Player from './Player.js';
import Wheel from './Wheel.js';
import Round from './Round.js';
import domUpdates from './domUpdates.js';

class Game {
    constructor() {
        this.players = [];
        this.wheel = new Wheel();
        this.round = new Round();
        this.usedLetters = [];
        this.stage = 0;
        this.vowels =['a','e','i','o','u'];
        this.currentPlayer = null;
    }
    
    fillUseLetters(letter) {
        this.usedLetters.push(letter.target.innerText);
    }

    fillVowels(vowel) {
        this.usedLetters.push(vowel.target.innerText);
    }

    startGame(name1, name2, name3) {
        this.round.createRound(this.stage)
        this.wheel.getWheelValues()
        if(this.players.length === 0) {
            let player1 = new Player(0, name1);
            let player2 = new Player(1, name2);
            let player3 = new Player(2, name3);
            this.players.push(player1, player2, player3)
        }
        this.currentPlayer = this.players[0]
        domUpdates.showCurrentPlayer(this.currentPlayer.name)
    }
    incrementStage() {
        this.stage++; 
        domUpdates.clearAnswerBoard();
        this.usedLetters = [];
    }

    playerTurns() {
        domUpdates.enableButton()
        if (this.currentPlayer === this.players[0]){
            this.currentPlayer = this.players[1];
        }else if(this.currentPlayer === this.players[1]){
            this.currentPlayer = this.players[2];
        }else if(this.currentPlayer === this.players[2]){
            this.currentPlayer = this.players[0];
        }
        domUpdates.showCurrentPlayer(this.currentPlayer.name)
    }

    checkGuess(e) {
        if(this.round.allCorrectAnswers[this.stage].includes(e.target.innerText)) {
            domUpdates.continueMsg();
        } else {
            this.playerTurns();
        }
    }
    
    resetGame(){
        this.usedLetters = [];
        this.stage = 0;
        this.players = [];
        this.currentPlayer = this.players[0];
        domUpdates.resetNames()
        this.round.resetRound();
    }

}

export default Game;