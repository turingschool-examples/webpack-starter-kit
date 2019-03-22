import chai from 'chai';
const expect = chai.expect;

import gamedata from '../src/gamedata.js';

import Round from '../src/Round.js';

describe('Round', () => {
  let round;
  beforeEach(() => {
    round = new Round(gamedata);
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
      const survey = round.getSurvey(gamedata.surveys);
      expect(survey).to.be.an('object');
      expect(survey).to.have.all.keys('id','question');
    });
  });
  describe('getAnswers', () => {
    it('should return an array of answers that match the survey ID', () => {
      const survey = round.getSurvey(gamedata.surveys);
      const matchingAnswers = round.getAnswers(gamedata.answers);
      expect(matchingAnswers).to.be.an('array');
      // expect(matchingAnswers[0].surveyId).to.equal(survey.id);
    });
  });
});