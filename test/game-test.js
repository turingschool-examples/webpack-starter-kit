import chai from 'chai';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;


describe('Game', function(){
    let game;
    beforeEach(function () {
        game = new Game();
    });
    it('should be an instance of game', function () {
        expect(game).to.be.an.instanceOf(Game);
    });
    it('should have default properties', function (){
        expect(game.players).to.deep.equal([]);
        expect(game.usedLetters).to.deep.equal([]);
        expect(game.stage).to.equal(0);
        expect(game.currentPlayer).to.equal(null);
    });
});
