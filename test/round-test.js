import chai from 'chai';
const expect = chai.expect;

describe('Round class tests', function() {
  desribe('Property Tests', function() {
    it('should have a survey property', function() {
      const round = new Round();
      expect(round).to.have.property(survey);
    });
    it('should have answers property', function() {
      const round = new Round();
      expect(round).to.have.property(answers);
    });
    it('should have a survey object assigned to the survey property', function() {
      const round = new Round();
      expect(round.survey).to.be.an('object');
      expect(round.survey).to.have.property('id');
      expect(round.survey).to.have.property('question');
    });
  });
  describe('Method Tests', function() {
    it('should have a getSurvey method', function() {
      const round = new Round();
      expect(round).to.respondTo('getSurvey');
    });
    it('should have a getAnswers method', function() {
      const round = new Round();
      expect(round).to.respondTo('getAnswers');
    });
  });
});