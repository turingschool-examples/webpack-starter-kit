import chai from 'chai';
const expect = chai.expect;
import Gameboard from '../src/gameboard.js';

describe('Gameboard', function() {
  it('should instantiate a new gameboard', function() {
    var gameboard = new Gameboard();
    gameboard.appendGameboard();
    expect(true).to.equal(true);
  });

  it('should create an array of the categories', function () {
    var gameboard = new Gameboard();
    gameboard.assignCategories();
    console.log(gameboard.categoryList);
    expect(gameboard.categoryList).to.have.length(10);
  });

  
});