// import?
// all in separate files
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
// new instances test
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

console.log(data.wheel);



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