import domUpdates from './domUpdates';
import Player from './player'

class Question {
  constructor(answer, ansLength, splitAns, description, category) {
    // this.question = question;
    this.answer = answer;
    this.ansLength = ansLength;
    this.ansSplit = splitAns;
    this.description = description;
    this.category = category;
  }

  splitAnswer() {
    this.ansSplit = this.answer.split('');
  }

  static validateAnswer(playerGuess, answer) {
    if (playerGuess.toUpperCase() === answer.toUpperCase()) {
      console.log('correct!')
      Player.addScore();
      // alert player was correct
      // change round, instantiate new round with new question
    } else {
      console.log('incorrect!')
      Player.subtractScore();
      // change player turn
    }
  }

  guessConsonent() {
    this.answer.split('').forEach(ltr => {
      if (domUpdates.split().includes(ltr)) {
        player.answer = true
      }
    })
  }

}

export default Question;