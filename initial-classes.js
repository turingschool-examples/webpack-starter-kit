class Players {
  constructor(name, score, winner) {
    this.name = name;
    this.score = score || 0;
    this.winner = false;
  }
  isWinner() {

  }
  score() {
  
  }
}

class Cards {
  constructor(category, question, answer, value) {
    this.category = category;
    this.question = question;
    this.answer = answer;
    this.value = value;
  }
}

class RoundOne extends Cards {
  constructor(category, question, answer, value) {
    super(category, question, answer, value);
    this.dailyDouble = 1;
  }
} 

class RoundTwo extends Cards {
  constructor(category, question, answer, value) {
    super(category, question, answer, value);
    this.dailyDouble = 2;
  }
  changeValue() {
    value * 2;
  }
}

class DailyDouble extends Cards {
  constructor(category, question, answer, value) {
    super(category, question, answer, value);
  }
  changeValue() {
    userInput;
  }
} 
//Possibly same class as DailyDouble
class ThirdRound extends Cards {
  constructor(category, question, answer, value) {
    super(category, question, answer, value);
  }
  changeValue() {
    userInput;
  }
}  