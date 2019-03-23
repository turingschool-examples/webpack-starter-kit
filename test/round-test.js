import chai from 'chai';
const expect = chai.expect;

import Round from '../src/Round.js'

describe('Round', function () {
  it('should have a new instance of Round', function () {
    let round = new Round;
  });
  it('should have empty arrays for data to be stored', function () {
    let round = new Round;

    expect(round.categoryName).to.deep.equal([]);
    expect(round.categoryIds).to.deep.equal([]);
    expect(round.clues).to.deep.equal([]);
  });
})