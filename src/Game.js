import domUpdates from './domUpdates.js';
import Round from './Round.js';
import FastRound from './FastRound.js';

class Game {
  constructor(player1, player2) {
    this.currentRound = 0; 
    this.usedSurveys = []; 
    this.player1 = player1;
    this.player2 = player2;
    this.activePlayer = this.player1;
    this.surveyData = {
      response_code: {
        version: '1.5',
        termsofService: 'http://frontend.turing.io/projects/family-feud.html',
        features: {
          surveys: 1,
          answers: 1
        },
      },
      surveys: [
        { id: 1, question: 'If you drew Homer Simpson’s name in a secret santa exchange, what would you buy him?' },
        { id: 2, question: 'Name something you do to an item before giving it as a gift' },
        { id: 3, question: 'Name a good gift for someone who is always late.' },
        { id: 4, question: 'Why might a family move into a bigger house?' },
        { id: 5, question: 'Other than movie tickets, name something a crowded movie theatre might run out of.' },
        { id: 6, question: 'Name something you should probably book ahead of time if you’re going on vacation.' },
        { id: 7, question: 'Name a city where you’d hate the long commute to work.' },
        { id: 8, question: 'What might you ask to borrow from someone at the laundromat?' },
        { id: 9, question: 'On a resume, what might a person claim they can do quickly?' },
        { id: 10, question: 'Name a phrase that often appears in children’s stories' },
        { id: 11, question: 'Name something that can be pumped' },
        { id: 12, question: 'Other than illness, name an acceptable excuse for missing work.' },
        { id: 13, question: 'Name a crime that some people probably commit every day.' },
        { id: 14, question: 'Name something tourists point up at' },
        { id: 15, question: 'Name something you might add milk to in the morning.' }
      ],
      answers: [
        { answer: 'Alarm Clock', respondents: 34, surveyId: 3 },
        { answer: 'Beer', respondents: 67, surveyId: 1 },
        { answer: 'Bowling Ball', respondents: 5, surveyId: 1 },
        { answer: 'Buy It', respondents: 4, surveyId: 2 },
        { answer: 'Calendar', respondents: 3, surveyId: 3 },
        { answer: 'Can Afford More', respondents: 5, surveyId: 4 },
        { answer: 'Candy', respondents: 8, surveyId: 5 },
        { answer: 'Car', respondents: 3, surveyId: 6 },
        { answer: 'Car Trouble', respondents: 30, surveyId: 12 },
        { answer: 'Change', respondents: 24, surveyId: 8 },
        { answer: 'Chicago', respondents: 18, surveyId: 7 },
        { answer: 'Coffee', respondents: 17, surveyId: 15 },
        { answer: 'Cereal', respondents: 67, surveyId: 15 },
        { answer: 'Detergent', respondents: 69, surveyId: 8 },
        { answer: 'Donuts', respondents: 24, surveyId: 1 },
        { answer: 'Dryer Sheets', respondents: 6, surveyId: 8 },
        { answer: 'Family Has Grown', respondents: 61, surveyId: 4 },
        { answer: 'Finish Tasks', respondents: 12, surveyId: 9 },
        { answer: 'Flight', respondents: 23, surveyId: 6 },
        { answer: 'Funeral', respondents: 61, surveyId: 12 },
        { answer: 'Gas', respondents: 58, surveyId: 11 },
        { answer: 'Happily Ever After', respondents: 9, surveyId: 10 },
        { answer: 'Hotel', respondents: 73, surveyId: 6 },
        { answer: 'Iron', respondents: 8, surveyId: 11 },
        { answer: 'Jaywalking', respondents: 18, surveyId: 13 },
        { answer: 'Jury Duty', respondents: 8, surveyId: 12 },
        { answer: 'Learn', respondents: 21, surveyId: 9 },
        { answer: 'Littering', respondents: 18, surveyId: 13 },
        { answer: 'Los Angeles', respondents: 21, surveyId: 7 },
        { answer: 'Mountains', respondents: 6, surveyId: 14 },
        { answer: 'New York City', respondents: 53, surveyId: 7 },
        { answer: 'Oatmeal', respondents: 3, surveyId: 15 },
        { answer: 'Once Upon A Time', respondents: 79, surveyId: 10 },
        { answer: 'Popcorn', respondents: 51, surveyId: 5 },
        { answer: 'Remove Price Tag', respondents: 27, surveyId: 2 },
        { answer: 'Space', respondents: 30, surveyId: 5 },
        { answer: 'Speeding', respondents: 62, surveyId: 13 },
        { answer: 'Statues', respondents: 14, surveyId: 14 },
        { answer: 'Tall Buildings', respondents: 68, surveyId: 14 },
        { answer: 'The End', respondents: 10, surveyId: 10 },
        { answer: 'Tire', respondents: 24, surveyId: 11 },
        { answer: 'Type', respondents: 53, surveyId: 9 },
        { answer: 'Want More Space', respondents: 33, surveyId: 4 },
        { answer: 'Watch', respondents: 58, surveyId: 3 },
        { answer: 'Wrap It', respondents: 61, surveyId: 2 }
      ]
    }
  }

  startNewGame(startingPlayer) {
    domUpdates.resetPageDefaults();
    this.triggerNewRound();
    if (this.player1.player === startingPlayer) {
      this.activePlayer = this.player1;
    } else {
      this.activePlayer = this.player2;
    }
  }

  triggerNewRound() {
    this.currentRound++;
    if (this.currentRound === 5) {
      this.endGame();
    } else {
      domUpdates.clearAnswerBoard();
      this.toggleActivePlayer();
      this.getSurvey();
    } 
  }

  getSurvey() {
    const randomIndex = Math.floor(Math.random() * this.surveyData.surveys.length);
    const survey = this.surveyData.surveys[randomIndex];
    const answers = this.surveyData.answers.filter(answer => answer.surveyId === survey.id);
    this.createRound(survey.question, answers);
    this.surveyData.surveys.splice(randomIndex, 1);
  }

  createRound(question, answers) {
    domUpdates.displayRoundData(question, answers, this.currentRound);
    if (this.currentRound < 3) {
      this.round = new Round(question, answers, this);
    } else if (this.currentRound < 5) {
      this.round = new FastRound(question, answers, this);
      domUpdates.blurGuessInput();
      domUpdates.removeTimers();
      domUpdates.displayFastroundDialog(this.activePlayer.name);
      domUpdates.disableBackgroundTabbing();
    } else {
      this.endGame;
    }
  }

  toggleActivePlayer() {
    if (this.activePlayer === this.player1) {
      this.activePlayer = this.player2;
      domUpdates.displayPlayer2();
    } else {
      this.activePlayer = this.player1;
      domUpdates.displayPlayer1();
    }
  }

  endGame() {
    domUpdates.removeTimers();
    domUpdates.blurGuessInput();
    if (this.player1.score === this.player2.score) {
      domUpdates.showTieScreen();
    } else if (this.player1.score > this.player2.score) {
      var winnerName = this.player1.name;
      domUpdates.showWinnerScreen(winnerName);
    } else {
      var winnerName = this.player2.name;
      domUpdates.showWinnerScreen(winnerName);
      domUpdates.disableBackgroundTabbing();
    }
  }
} 

export default Game;