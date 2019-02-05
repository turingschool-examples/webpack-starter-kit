import data from './data.js';
import domUpdates from './domUpdates.js';


class Round {
  constructor(currentRound, categories) {
    this.currentRound = currentRound || 1;
    this.categories = categories;
    this.cluesRoundOne = null;
    this.cluesRoundTwo = null;
    this.cluesRoundThree = null;
  }

  gatherClues(array, game) {
    let allClues;
    array.forEach(category => {
      allClues = data.clues.filter(clue => {
        return data.categories[category] === clue.categoryId;
      });
      for (var i = 1; i < 5; i++) {
        let specificPoints = allClues.filter(clue => {
          return clue.pointValue === 100 * i;
        });
        let randomIndex = Math.floor(Math.random() *  specificPoints.length);
        game.allCluesInPlay.push(specificPoints[randomIndex]);
      }
    });
    this.cluesRoundOne = game.allCluesInPlay.slice(0, 16);
    this.cluesRoundTwo = game.allCluesInPlay.slice(16, 32);
    this.cluesRoundThree = game.allCluesInPlay.slice(35);
    this.setDailyDouble(this.cluesRoundOne)
    domUpdates.setClues(this.cluesRoundOne);
  }

  changePointRange() {
    this.cluesRoundTwo.forEach(clue => {
      clue.pointValue *= 2
    });
    domUpdates.setClues(this.cluesRoundTwo);
  }

  setDailyDouble(roundClues) {
    let randomIndexOne = Math.floor(Math.random() *  roundClues.length);
    if (this.currentRound === 1) {
      roundClues[randomIndexOne].dailyDouble = true;
    } else if(this.currentRound === 2) {
      let randomIndexTwo = Math.floor(Math.random() *  roundClues.length);
      roundClues[randomIndexOne].dailyDouble = true;
      roundClues[randomIndexTwo].dailyDouble = true;
    }
  }
}

export default Round;