import chai from 'chai';
const expect = chai.expect;

import Question from '../src/Question';


describe('Question', () => {

  it('should be an instance of Question', () => {
    const question = new Question();
    expect(question).to.be.an.instanceOf(Question);
  })
  
  it('should have default properties', () => {
    const question = new Question('What\'s up?', 'Nothing', 25);

    expect(question.question).to.be.a('string');
    expect(question.answer).to.be.a('string');
    expect(question.score).to.be.a('number');
  });

})