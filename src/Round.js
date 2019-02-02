import Game from './Game.js'

class Round{
  constructor(baseData, currentRound){
    this.turnNum = 1;
    this.currentRound = currentRound;
    this.baseData = baseData;
    this.roundClues = [];
    this.pointValues = [100, 200, 300, 400];

  }
  sortClues () {
    this.baseData.forEach(cat => {
       this.pointValuesArr.forEach(value => {
        this.roundClues.push(cat.find(clue => clue.pointValue === value))
    })
  })
  }
}

export default Round;