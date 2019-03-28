import chai from 'chai';
import Round from '../src/Round.js';
const expect = chai.expect;

describe('Round', function(){
    let round;
    beforeEach(function (){
        round = new Round();
    });
    it('should be an instance of round', function (){
        expect(round).to.be.an.instanceOf(Round);
    })
    it('should have default properties', function(){
        expect(round.rounds).to.deep.equal(['one', 'two', 'three', 'four', 'four']);
        expect(round.allCorrectAnswers).to.deep.equal([]);
        expect(round.answerClues).to.deep.equal([]);
        expect(round.answerCategories).to.deep.equal([]);
    })
    it('should reset the properties when resetRound is invoke', () => {
        round.allCorrectAnswers = [1,2,3]
        round.answerClues = [1,2,3]
        round.answerCategories = [1,2,3]
        round.resetRound()
        expect(round.allCorrectAnswers).to.deep.equal([]);
        expect(round.answerClues).to.deep.equal([]);
        expect(round.answerCategories).to.deep.equal([]);
    })
})