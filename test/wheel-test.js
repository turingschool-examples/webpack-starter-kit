import chai from 'chai';
import Wheel from '../src/Wheel.js';
import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, 'showCurrentPlayer', () => true);
chai.spy.on(domUpdates, 'startGame', () => true);
chai.spy.on(domUpdates, 'changeNames', () => true);
chai.spy.on(domUpdates, 'changeCategory', () => true);
chai.spy.on(domUpdates, 'changeClue', () => true);

const expect = chai.expect;

describe('Wheel', function (){
    let wheel;
    beforeEach(function (){
        wheel = new Wheel();
    });
    it('should be an instance of wheel', function (){
        expect(wheel).to.be.an.instanceOf(Wheel);
    });
    it('should have default properties', function (){
        expect(wheel.currentSpinValue).to.equal(null);
        expect(wheel.spunValues).to.deep.equal([]);
    });
    it('should add six elements to spunValues', function (){
        expect(wheel.spunValues).to.deep.equal([])
        wheel.getWheelValues();
        expect(wheel.spunValues.length).to.deep.equal(4)
    });
});