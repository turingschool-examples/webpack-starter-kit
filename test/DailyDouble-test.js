import chai from 'chai';
const expect = chai.expect;

import DailyDouble from '../src/DailyDouble';

describe('DailyDouble', () => {
  it('should be a new instance of Daily Double', () => {
    const dailyDouble = new DailyDouble();
    expect(dailyDouble).to.be.an.instanceOf(DailyDouble);
  })

  it('should have default properties', () => {
    const dailyDouble = new DailyDouble('Who\'s there?', 'Nobody', 400, true);
    expect(dailyDouble.question).to.be.a('string');
    expect(dailyDouble.answer).to.be.a('string');
    expect(dailyDouble.score).to.be.a('number');
    expect(dailyDouble.dailyDouble).to.be.equal(true)
  });
})