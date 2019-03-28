import chai from 'chai';
import Player from '../src/Player.js';
const expect = chai.expect;

describe('Player', function() {
    let player;
    beforeEach(function () {
        player = new Player();
    });
    it('should be an instance of player', function (){
        expect(player).to.be.an.instanceof(Player);
    });
    it('should have default properties', function (){
        expect(player.name).to.equal(player.name);
        expect(player.score).to.equal(0);
        expect(player.bank).to.equal(0);
    });
});

