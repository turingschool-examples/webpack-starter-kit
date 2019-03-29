import DomUpdates from './DomUpdates'


class Puzzle {
  constructor(category, number_of_words, description, correct_answer) {
    this.category = category
    this.number_of_words = number_of_words
    this.description = description
    this.correct_answer = correct_answer
    this.remainingLetters = []
  }
  

  checkLetter(userLetter, game) {
   
    let roundClue = this.correct_answer.toLowerCase().split('').join('').replace(/[-' ]/g, '').split('')
    const answerLength = roundClue.length 
    // let cleanClueAnswer = this.clueAnswer.join('').replace(/[-' ]/g, '').split('')
    // console.log(cleanClueAnswer)
    if (roundClue.includes(userLetter)) {
      this.remainingLetters = this.remainingLetters.filter(letter=>{
        if (letter !== userLetter) {
          return letter
        }
      })
     if (this.remainingLetters.length === 0) {
        game.players[game.roundNumber].updatePlayerScore()
        console.log(game.roundInst[roundNumber].wheelInst)
        game.roundInst.wheelInst.createWheel()
        game.checkRoundNum(game)

      } else {
        game.updatePlayerBank();
        DomUpdates.resetWheelValue()
        this.wheelInst.selectedValue = 0;
        DomUpdates.gameMessage("spin again");
      }
    } else {
      DomUpdates.gameMessage("next player")
      DomUpdates.resetWheelValue();
      this.wheelInst.selectedValue = 0;
      this.switchPlayer(game)

    }
    }
  }
  


export default Puzzle