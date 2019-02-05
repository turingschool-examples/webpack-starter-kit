import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round'

describe('Round', function() {

  it('should have default properties', () => {
    const round = new Round();
    expect(round.catNames).to.deep.equal([]);
    expect(round.catIds).to.deep.equal([]);
    expect(round.clues).to.deep.equal([]);
    expect(round.pointValues).to.deep.equal([]);
    expect(round.questions).to.deep.equal([]);
    expect(round.dailyDouble).to.equal(1);
  });

  it('should have one Daily Double for Round 1', function() {
    const round = new Round();
    expect(round.dailyDouble).to.equal(1)
  });

  it('should start a round', () => {
    
  })

})