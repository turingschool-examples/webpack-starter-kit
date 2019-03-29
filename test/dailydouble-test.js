import chai from 'chai';
const expect = chai.expect;

import Player from '../src/Player.js';
import DailyDouble from '../src/DailyDouble.js';

describe('DailyDouble', function () {
  it('should be able to create an instance of DailyDouble with question answer and pointvalue ', function () {
    let dailyDouble = new DailyDouble('Scope?', 'Chain!', 3000);

    expect(dailyDouble.question).to.equal('Scope?');
    expect(dailyDouble.answer).to.equal('Chain!');
    expect(dailyDouble.pointValue).to.equal(3000);
  })
  it('Should change point value based on string being passed', function () {
    let dailyDouble = new DailyDouble('Scope?', 'Chain!', 3000);

    dailyDouble.updatePointValue('4000');

    expect(dailyDouble.pointValue).to.equal(4000);
  })
})