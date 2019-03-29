import Game from "../src/Game.js";
import chai from 'chai'
import spies from 'chai-spies';
import domUpdates from "../src/domUpdates.js"
chai.use(spies);
const expect = chai.expect;

// chai.spy.on(domUpdates, '',  () => [{},{},{}]);
chai.spy.on(domUpdates, ['appendPuzzle', 'setCategoryText', 'hiddenBoard'], () => true);


describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });
  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have default properties', () => {
    expect(game.players).to.deep.equal([]);
    expect(game.allData).to.deep.equal([]);
    expect(game.round).to.equal(null);
    expect(game.roundCount).to.equal(0);
  });

  it('should be able to get a random puzzle', ()=> {
    expect(game.startGame).to.be.a('function');
    expect(game.getRandomData).to.be.a('function');
  });

  it('should be able to start a new round', () => {
    expect(game.createRound).to.be.a('function');
    expect(game.createPlayers).to.be.a('function');
  })

  it.skip('should increase rounds by one', () =>{
    expect(game.roundCount).to.equal(0);
    game.createRound(true);
    expect(game.roundCount).to.equal(1);

  })

});

