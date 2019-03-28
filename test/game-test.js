import chai from 'chai';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);

const expect = chai.expect;

chai.spy.on(domUpdates, ['enableButton', "clearAnswerBoard"],  () => true);

describe('Game', function(){
    let game;
    beforeEach(function () {
        game = new Game();
    });
    it('should be an instance of game', function() {
        expect(game).to.be.an.instanceOf(Game);
    });
    it('should have default properties', function(){
        expect(game.players).to.deep.equal([]);
        expect(game.usedLetters).to.deep.equal([]);
        expect(game.stage).to.equal(0);
        expect(game.currentPlayer).to.equal(null);
    });
    it('should push clicked letter to array', function(){
        game.fillUseLetters({target: {innerText: "a"}});
        expect(game.usedLetters).to.deep.equal(['a']);
    })
    it('it should increment rounds', function (){
        expect(game.stage).to.equal(0);
        game.incrementStage();
        expect(game.stage).to.equal(1);
    })
    it.skip('should change players turns', function (){
        expect(game.currentPlayer).to.equal(null);
        game.playerTurns();
        expect(game.currentPlayer.name).to.equal('colby');
    })

});
