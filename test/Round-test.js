import Round from "../src/Round.js";
import chai from 'chai'
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;


describe('Round', () => {
  let round;
  beforeEach(() => {
    round = new Round();
  });
  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have default properties', () => {
    expect(round.activePlayer).to.equal(0);
    expect(round.roundCountDown).to.equal(0);

    
  });

  it('should be able to get a select a single random puzzle', ()=> {
    expect(round.getPuzzle).to.be.a('function');
  });

  
});

