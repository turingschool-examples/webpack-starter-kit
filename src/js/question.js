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

  guessConsonent() {
    this.answer.split('').forEach(ltr => {
      if (domUpdates.split().includes(ltr)) {
        player.answer = true
      }
    })
  }

}

export default Question;