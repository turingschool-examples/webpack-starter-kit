import chai from 'chai';
import Wheel from '../src/Wheel.js';
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
        expect(wheel.disabled).to.equal(false);
    });
});