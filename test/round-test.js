import chai from 'chai';
const expect = chai.expect;

import gamedata from '../src/gamedata.js';

import Round from '../src/Round.js';

describe('Round', function() {
  describe('Properties', function() {
    it('should have a survey property', function() {
      const round = new Round();
      expect(round).to.have.property('survey');
    });
    it('should have an answers property', function() {
      const round = new Round();
      expect(round).to.have.property('answers');
    });
    it('should have a survey object assigned to the survey property', function() {
      const round = new Round();
      expect(round.survey).to.be.an('object');
      expect(round.survey).to.have.all.keys('id','question');
    });
    it.skip('should have an array of answer objects assigned to the answers property', function() {
      const round = new Round();
      expect(round.answers).to.be.an('array');
      expect(round.answers[0]).to.be.an('object');
      expect(round.answers[0]).to.have.all.keys('answer','respondents','surveyId');
    });
    describe('Answer Objects', function() {
      it.skip('should have an id that matches the round survey', function() {
        const round = new Round();
        expect(round.survey.id).to.equal(round.answers[0].surveyId);
      });
    });
  });
  describe('Method', function() {
    it('should have a getSurvey method', function() {
      const round = new Round();
      expect(round).to.respondTo('getSurvey');
    });
    describe('getSurvey method', function() {
      it('should return a survey object from surveys', function() {
        const round = new Round();
        expect(round.getSurvey(gamedata.surveys)).to.be.an('object');
        expect(round.getSurvey(gamedata.surveys)).to.have.all.keys('id','question');
      });
    });
    it('should have a getAnswers method', function() {
      const round = new Round();
      expect(round).to.respondTo('getAnswers');
    });
    describe('getAnswers method', function() {
      it('should return an array of answer objects from answers', function() {
        const round = new Round();
        const matchingAnswers = round.getAnswers(gamedata.answers);
        expect(matchingAnswers).to.be.an('array');
        expect(matchingAnswers[0]).to.be.a('object');
        expect(matchingAnswers[0]).to.have.all.keys('answer','respondents','surveyId');
      });
    });
  });
});