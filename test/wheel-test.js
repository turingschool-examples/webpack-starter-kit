import chai from 'chai';
import Wheel from '../src/Wheel.js';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, 'showCurrentPlayer', () => true);
chai.spy.on(domUpdates, 'startGame', () => true);
chai.spy.on(domUpdates, 'changeNames', () => true);
chai.spy.on(domUpdates, 'changeCategory', () => true);
chai.spy.on(domUpdates, 'changeClue', () => true);
chai.spy.on(domUpdates, 'checkLetterGuess', () => true);
chai.spy.on(domUpdates, 'checkAnswerBoard', () => true);
chai.spy.on(domUpdates, 'toggleSpin', () => true);
chai.spy.on(domUpdates, 'resetNames', () => true);
chai.spy.on(domUpdates, 'resetLetters', () => true);
chai.spy.on(domUpdates, 'resetInputs', () => true);
chai.spy.on(domUpdates, 'appendGuessCard', () => true);

const expect = chai.expect;

describe('Wheel', function (){
    let game;
    let wheel;
    beforeEach(function (){
        game = new Game();
        wheel = new Wheel();
    });
    it('should be an instance of wheel', function (){
        expect(wheel).to.be.an.instanceOf(Wheel);
    });
    it('should have default properties', function (){
        expect(wheel.currentSpinValue).to.equal(null);
        expect(wheel.spunValues).to.deep.equal([]);
    });
    it('should only have three players to start a game', function (){
        game.startGame('Colby', 'Bailey', 'Allen');
        expect(game.players.length).to.deep.equal(3);
    });
});