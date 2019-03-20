import chai from 'chai';
import Question from '../src/js/question';

const expect = chai.expect;

describe('Question', () => {
  
  let question;

  beforeEach(() => {
    question = new Question();
  });

  it('should have a default state question', () => {
    let question = new Question('Aren’t you a little short for a stormtrooper?');

    expect(question.question).to.equal('Aren’t you a little short for a stormtrooper?');
  });

  it('should have a default state answer', () => {
    let question = new Question('Knock knock', 'Who\'s there?');

    expect(question.answer).to.equal('Who\'s there?')
  });

  it('should have a default answer length', () => {
    let question = new Question('Hi?', 'Yo', 2)

    expect(question.ansLength).to.equal(2);
  });

  it('should have an array with the letters of the answer', () => {
    let question = new Question();

    expect(question.ansSplit).to.deep.equal([]);
  })

  it('should have a default description', () => {
    let question = new Question('Greeting?', 'Hello', 5, '','a greeting');

    expect(question.description).to.equal('a greeting');
  });

  it('should have a default state category', () => {
    let question = new Question('Greeting?', 'Hello', 5, '','a greeting', 'Salutations');

    expect(question.category).to.equal('Salutations');
  });
})
