import Round from "../src/Round.js";
import chai from 'chai'
import spies from 'chai-spies';
import domUpdates from "../src/domUpdates.js"
chai.use(spies);
const expect = chai.expect;
chai.spy.on(domUpdates, ['turnOrder', 'buyAVowel', 'displayScores', 'displayCorrectAnswers', 'displaySolvedPuzzle' ], () => true);


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



// broken
  // it('should change activePlayer', () =>{
  //   expect(round.activePlayer).to.equal(0);
  //   round.changeActivePlayers();
  //   expect(round.activePlayer).to.equal(1);
  //   expect(domUpdates.turnOrder).to.have.been.called();
  // });


  
//needs to be written VVVV ////
  // it('should update activePlayer's score', () =>{
  //   expect(round.activePlayer).to.equal(0);
  //   round.changeActivePlayers();
  //   expect(round.activePlayer).to.equal(1);
  //   expect(domUpdates.turnOrder).to.have.been.called();
  // });

  // it('should check if a guess is a vowel or consonant', () =>{
  //   expect(round.activePlayer).to.equal(0);
  //   round.changeActivePlayers();
  //   expect(round.activePlayer).to.equal(1);
  //   expect(domUpdates.turnOrder).to.have.been.called();
  // });

  // it('should check if a guess is correct', () =>{
  //   expect(round.activePlayer).to.equal(0);
  //   round.changeActivePlayers();
  //   expect(round.activePlayer).to.equal(1);
  //   expect(domUpdates.turnOrder).to.have.been.called();
  // });

  // it('update the totalScore of the roundWinner'', () =>{
  //   expect(round.activePlayer).to.equal(0);
  //   round.changeActivePlayers();
  //   expect(round.activePlayer).to.equal(1);
  //   expect(domUpdates.turnOrder).to.have.been.called();
  // });



});



