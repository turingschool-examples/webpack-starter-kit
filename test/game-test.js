import chai from 'chai';
import Game from '../src/Game.js';
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
        expect(game.turn).to.equal(0);
        expect(game.stage).to.equal(0);
    });
});
