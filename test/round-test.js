import chai from 'chai';
const expect = chai.expect;

import gamedata from '../src/gamedata.js';

import Round from '../src/Round.js';

describe('Round', function() {
  describe('Properties', function() {
    describe('Survey Property', function() {
      it('should have a survey property', function() {
        const round = new Round();
        expect(round).to.have.property('survey');
      });
      it('should have a survey object assigned to the survey property', function() {
        const round = new Round();
        expect(round.survey).to.be.an('object');
        expect(round.survey).to.have.all.keys('id','question');
      });
    });
    describe('Answer Property', function() {
      it('should have an answers property', function() {
        const round = new Round();
        expect(round).to.have.property('answers');
      });
      it('should be an array', function() {
        const round = new Round();
        expect(round.answers).to.be.an('array');
      });
      it('should have answer objects nested inside that array', function() {
        const round = new Round();
        round.answers.forEach( answer => {
          expect(answer).to.be.an('object');
          expect(answer).to.have.all.keys('answer','respondents','surveyId');
        });
      });
      describe('Answer Objects', function() {
        it('should all have an id that matches the survey property\'s id vale', function() {
          const round = new Round();
          round.answers.forEach( answer => {
            expect(answer.surveyId).to.equal(round.survey.id);
          });
        });
      });
    });
  });
  describe('Methods', function() {
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
      it('should return answers that all match the round\'s survey id', function() {
        const round = new Round();
        const matchingAnswers = round.getAnswers(gamedata.answers);
        matchingAnswers.forEach(answer => {
          expect(answer.surveyId).to.equal(round.survey.id);
        });
      });
    });
  });
});