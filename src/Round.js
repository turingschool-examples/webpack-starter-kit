import Game from './Game'
import Data from './Data'
import DomUpdates from './DomUpdates';

class Round {
  constructor() {
    this.activePlayer = 0
    this.roundsBank = null
    this.roundCards = []
    this.clueAnswer = null
    this.roundClue = {}
  }

  createNewRound(game) {
    this.roundsBank = Object.entries(Data.puzzles)
    this.roundCards = this.roundsBank[game.stage][1].puzzle_bank
    game.stage ++
    this.shuffle(this.roundCards)
    this.getRandomClue(this.roundCards)
    
  }


  shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var m = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[m];
      array[m] = temp;
    }
  }

  getRandomClue(cards) {  
    this.roundClue = cards[Math.floor(Math.random()) * cards.length]
    this.clueAnswer = this.roundClue.correct_answer.toLowerCase().split('')
    console.log(this.clueAnswer)
    console.log(this.roundClue)
  }

  checkLetter(userLetter){
    if(this.clueAnswer.includes(userLetter)){
      console.log('go to bed')
    }
    

    // function removeItem(item){
    //   for(let i = 0; i < this.length; i++){
    //       if(this.[i]==item) {
    //           array.splice(i,1);
    //           i--


    console.log(userLetter)
    console.log(this.clueAnswer)
  }

}

export default Round