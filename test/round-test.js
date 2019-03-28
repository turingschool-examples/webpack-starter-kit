import chai from 'chai';
const expect = chai.expect;
import Round from '../src/round.js';
import data from '../src/data_wheel-of-fortune.js';
import Puzzle from '../src/puzzle.js';
import DomUpdates from '../src/dom-updates.js';
import spies from 'chai-spies';
import GameEngine from '../src/game-engine.js';
import Player from '../src/player.js';
chai.use(spies);

chai.spy.on(DomUpdates, 'updatePlayerScore', () => true);
chai.spy.on(DomUpdates, 'updateRoundHintCategory', () => true);
chai.spy.on(DomUpdates, 'appendAns', () => true);
chai.spy.on(DomUpdates, 'appendPuzzle', () => true);
chai.spy.on(DomUpdates, 'showCurrentPlayer', () => 1);
chai.spy.on(DomUpdates, 'clearInput', () => true);
chai.spy.on(DomUpdates, 'toggleButtons', () => true);
chai.spy.on(DomUpdates, 'appendIncorrect', () => true);
chai.spy.on(DomUpdates, 'createPuzzleClassArr', () => true);
chai.spy.on(DomUpdates, 'appendCorrect', () => true);
chai.spy.on(DomUpdates, 'appendWinner', () => true);


describe('Round', ()=>{
    it('Should be a function', ()=>{
        expect(Round).to.be.a('function');
    })
    it('Should instantiate a new instance of Round', ()=>{
        const round = new Round();
        expect(round).to.be.a('object');
    })
    it('Should instantiate a new instance of Puzzle', ()=>{
        const puzzle = new Puzzle();
        expect(puzzle).to.be.a('object');
    })
    it('Should have a property roundNumber that can have a value passed in', ()=>{
        const round = new Round(1);
        expect(round.roundNumber).to.equal(1);
    })
    it('Should have a random roundPuzzle' , ()=>{
        const round1A = new Round(1);
        round1A.determinePuzzleLength();
        const round1B = new Round(1);
        round1B.determinePuzzleLength();
        expect(round1A.roundPuzzle).to.not.equal(round1B.roundpuzzle);
    })
    it('Should instantiate a new instance of puzzle in the propery puzzle of round when getPuzzle() is invoked', ()=>{
        const round = new Round(1);
        let puzzleBank = data.puzzles.one_word_answers.puzzle_bank[0];
        round.getPuzzle(puzzleBank.category, puzzleBank.number_of_words, puzzleBank.total_number_of_letters, puzzleBank.first_word, puzzleBank.description, puzzleBank.correct_answer);
        expect(round.roundPuzzle.cat).to.equal('Around The House');
        expect(round.roundPuzzle.numOfWords).to.equal(1);
        expect(round.roundPuzzle.numOfLtr).to.equal(8);
        expect(round.roundPuzzle.numLtrFirstWord).to.equal(8);
        expect(round.roundPuzzle.description).to.equal('Location or object(s) found within a typical house.');
        expect(round.roundPuzzle.ans).to.equal('Armchair');
    })
    it('Should split the puzzle answer into an array of letters', ()=>{
        const round = new Round(1);
        let puzzleBank = data.puzzles.one_word_answers.puzzle_bank[0];
        round.getPuzzle(puzzleBank.category, puzzleBank.number_of_words, puzzleBank.total_number_of_letters, puzzleBank.first_word,     puzzleBank.description, puzzleBank.correct_answer);
        expect(round.answer).to.deep.equal(['A', 'R', 'M', 'C', 'H', 'A', 'I', 'R'])
    })
    it('Should accept an object and return two uppercase array of the answer', () =>{
        const round = new Round(1);
        round.storePuzzle(  {  
            category: 'The 90s',
            number_of_words: 1,
            total_number_of_letters: 10,
            first_word: 10, 
            description: 'Puzzles pertaining to the decade in question.',
            correct_answer: 'Tamagotchi',
          })
          expect(round.answer).to.deep.equal(['T','A','M','A','G','O','T','C','H','I']);
          expect(round.wholeWord).to.deep.equal(['T','A','M','A','G','O','T','C','H','I'])
    })
    it('Should increase currentRound by 1 everytime that newRound() is invoked', ()=>{
        let game = new GameEngine();
        let player1 = new Player(game);
        let player2 = new Player(game);
        let player3 = new Player(game);
        game.players = [player1, player2, player3];
        game.currentRound.newRound(game);
        expect(game.currentRound.roundNumber).to.equal(1);
        game.currentRound.newRound(game);
        game.currentRound.newRound(game);
        expect(game.currentRound.roundNumber).to.equal(3);
        expect(DomUpdates.updatePlayerScore).to.have.been.called(6);
    })
    it('Should return true when compareAns is invoked', ()=>{
        let round = new Round();
        round.answer = ['A'];
        round.currentPlayer = {}
        round.currentPlayer.ans = 'A';
        expect(round.compareAns()).to.equal(true);
    })
    it('Should be able to skip a puzzle', () => {
        let game = new GameEngine();
        let player1 = new Player(game);
        let player2 = new Player(game);
        let player3 = new Player(game);
        game.players = [player1, player2, player3];
        game.currentRound.newRound(game);
        let puzzle = game.currentRound.answer;
        game.currentRound.skipPuzzle(game);
        let skipPuzzle = game.currentRound.answer;
        expect(puzzle).to.not.deep.equal(skipPuzzle);
        expect(DomUpdates.updatePlayerScore).to.have.been.called(10);
    })
    it('Should be able to determine the puzzle length') {

    }
})
export default Round;