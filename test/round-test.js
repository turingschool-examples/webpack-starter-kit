import chai from 'chai';
const expect = chai.expect;

describe('Round class tests', function() {
  it('should have a question property', function() {
    const round = new Round();
    expect(round).to.have.property(question);
  });
  it('should have answers property', function() {
    const round = new Round();
    expect(round).to.have.property(answers);
  });
});