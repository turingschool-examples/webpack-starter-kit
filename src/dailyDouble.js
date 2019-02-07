import Clue from './clue.js'

class Dailydouble extends Clue {
  constructor(answer, categoryId, categoryName, pointValue, question, randomNumber) {
    super(answer, categoryId, categoryName, pointValue, question);
    this.randomNumber = randomNumber;
  };

  doubleCountGenerator(min, max) {
    let randomNumber = Math.floor(Math.random() * 17);
    console.log("Random Number " + randomNumber);
    return randomNumber;
  };
}




export default Dailydouble;