import domUpdates from './domUpdates.js';
import Player from './Player.js';
import Round from './Round.js';

class Game {
  constructor(player1, player2) {
    this.currentRound = 0; 
    this.usedSurveys = []; //note: will go up to 4 cus each player gets one in round 3
    this.player1 = player1;
    this.player2 = player2;
    this.activePlayer = 1;
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
        { answer: 'Cold Cereal', respondents: 67, surveyId: 15 },
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

  startNewGame() {
    //will add reset page defaults here
    this.startNewRound();
  }

  getRandomSurveyId() {
    const randomId = Math.floor(Math.random() * 15) + 1;

    if (!this.usedSurveys.includes(randomId)) {
      this.usedSurveys.push(randomId);
      return randomId;
    } else {
      this.getRandomSurveyId();
    }
  }

  startNewRound() {
    this.currentRound++;
    if (this.currentRound > 3) {
      this.endGame();
    } else  {
      const randomId = this.getRandomSurveyId();
      const question = this.surveyData.surveys.find(survey => survey.id === randomId).question;
      const answers = this.surveyData.answers.filter(answer => answer.surveyId === randomId);
      this.round = new Round(question, answers);
      domUpdates.displayRoundData(question, answers, this.currentRound); //will move to round class eventually
    } //will need to add another condition for FastRound
  }

  endGame() {
    //show a play again dialog?
    //if they play again, we should show the enter names dialog again to start fresh
  }
} 

export default Game;