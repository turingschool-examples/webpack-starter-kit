
class Game {
  constructor(difficulty, round, players) {
    this.difficulty = difficulty;
    this.round = 1;
    this.players = [];
  }
  changeRound() {
    this.round++
  }
  endGame() {
      // show 'game over' screen
      // display 'back to home screen' button
  }
};

class Player {
  constructor(name) {
    this.name = name;
    this.totalScore = 0;
    this.roundScore = 0;
    this.gameWinner = false;
  }
  winRound() {
    this.totalScore += this.roundScore;
  }
  winGame() {
    this.gameWinner = true;
    // start bonus round
  }
  resetScore() {
    this.roundScore = 0;
  }
  buyVowel() {
    if (this.roundScore >= 100) {
        this.roundScore -= 100;
        // player chooses a vowel;
      }
  }
};

class BonusPlayer extends Player {
  constructor() {
    super(name);
    bonusGuess() {
      // guess 3 consonants
      // guess 1 vowel
    }
  }
}

class Puzzle {
  constructor() {
    this.category = null;
    this.answer = null;
  }
  randomizeCategory() {
    // let rndCategory = random number;
    this.category = rndCategory;
  }
  randomizeAnswer() {
    // let randomAnswer = random number;
    this.answer = randomAnswer;
  }
};

class Wheel {
  constructor() {
      this.wheelElements = []
  }
  randomizeWheel() {
    // randomize wheel array DONE
    // choose 6 elements for wheel from array (indexes 0-5) DONE
    // Need to figure out how to access wheel array in data.js INCOMPLETE
    let newWheel = [];
    
    for(let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * wheel.length);
      newWheel.push(wheel[randomIndex]);
    } 

    console.log(newWheel);
  }
  spinWheel() {
    // choose one of the six wheel elements
    // if land on bankrupt invoke bankrupt method
    // if land on lose a turn invoke loseTurn method
  }
  bankrupt() {
    // reset player roundScore to 0
  }
  loseTurn() {
    // end player turn
    // switch to next player
  }
};

class BonusWheel extends Wheel {
  constructor() {
    super();
      this.prizes = [
        'Trip to Ohio', 
        '2 dollar bill', 
        '7 Eleven Rewards card', 
        'Food court hot dog', 
        'A goat of your choosing'
      ];
  }
  revealConsonants() {
    // reveal a random amount of consonants between 1 and 6
  }
};