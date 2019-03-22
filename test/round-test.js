import chai from 'chai';
const expect = chai.expect;

import gamedata from '../src/gamedata.js';

import Round from '../src/Round.js';
import Game from '../src/Game.js';


describe('Round', () => {
  let round, game;
  beforeEach(() => {
    game = new Game();
    round = new Round(game);
  });

  describe('New Round', () => {
    it('should have a random survey', () => {
      expect(round).to.have.property('survey');
      expect(round.survey).to.be.an('object');
      expect(round.survey).to.have.all.keys('id','question');
    });
    it('should have an array of answers', () => {
      expect(round).to.have.property('answers');
      expect(round.answers).to.be.an('array');
      expect(round.answers.length).to.equal(3);
    });
  });
  describe('getSurvey', () => {
    it('should return a single survey object', () => {
      const survey = round.getSurvey(gamedata.surveys, game);
      expect(survey).to.be.an('object');
      expect(survey).to.have.all.keys('id','question');
    });
    it('should not repeat a survey', () => {
      const testSurveys = [];
      game.usedSurveys = [];
      for (let i = 0; i < 15; i++) {
        testSurveys.push(round.getSurvey(gamedata.surveys, game, i));
      }
      let testSurveySet = [...new Set(testSurveys)];
      expect(testSurveys.length).to.equal(15);
      expect(testSurveySet.length).to.equal(15);
    });
  });
  describe('getAnswers', () => {
    it('should return an array of answers that match the survey ID', () => {
      const survey = round.getSurvey(gamedata.surveys, game);
      const matchingAnswers = round.getAnswers(gamedata.answers);
      expect(matchingAnswers).to.be.an('array');
      // expect(matchingAnswers[0].surveyId).to.equal(survey.id);
    });
  });
});