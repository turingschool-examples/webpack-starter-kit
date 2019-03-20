import chai from 'chai';
const expect = chai.expect;

describe('Round class tests', function() {
  it('should have a survey property', function() {
    const round = new Round();
    expect(round).to.have.property(survey);
  });
  it('should have answers property', function() {
    const round = new Round();
    expect(round).to.have.property(answers);
  });
  it('should by default retrieve a survey object from gamedata and assign it to the round\'s survey property', function() {
    const round = new Round();
    expect(round.survey).to.be.an('object');
    expect(round.survey).to.have.property('id');
    expect(round.survey).to.have.property('question');
  });
});