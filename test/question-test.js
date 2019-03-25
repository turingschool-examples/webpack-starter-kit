import chai from 'chai';
import Question from '../src/js/question';

const expect = chai.expect;

describe('Question', () => {
  
  let question;

  beforeEach(() => {
    question = new Question('Hello', 5, [], 'a greeting', 'Salutations');
  });

  it('should have a default state question', () => {
    expect(question.answer).to.equal('Hello')
    expect(question.ansLength).to.equal(5);
    expect(question.ansSplit).to.deep.equal([]);
    expect(question.description).to.equal('a greeting');
    expect(question.category).to.equal('Salutations');
  });
  
})
