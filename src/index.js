import Game from './Game.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js';
import './css/base.css';
import './images/8bit.png';
import './images/Color_Wheel.png';
import './images/background.jpg';
import './images/back.gif'

let game = new Game();

let spin = 0

$('.spinButton').prop('disabled', true);

$('.startGame').on('click', function (e) {
    e.preventDefault();
    domUpdates.startGame(game);
    domUpdates.changeNames();
    $('.nameInput').hide('slow');
    $('.startGame').hide('slow');
    domUpdates.enableButton();
    domUpdates.highlightBoard(game.round.allCorrectAnswers[game.stage])
});

$('.letters').on('click', function(e) {
    game.fillUseLetters(e);
    $('body').find(e.target).attr('disabled', '').css("background-color", "#00e000");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters);
    game.checkGuess(e);
});

$('.vowel').on('click', function (e) {
    game.fillVowels(e);
    $('body').find(e.target).attr('disabled', '').css("background-color", "#00e000");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters);
    game.checkGuess(e);
});

$('.spinButton').on('click', function (e) {
    e.preventDefault();
    game.wheel.spinWheel(game.stage);
    game.currentPlayer.calculateBank(game.wheel.currentSpinValue, game);
    $('.spunValue').text(game.wheel.currentSpinValue)
    $('.spinButton').prop('disabled', true);
    $('.instructions').text('Choose a letter!')
    spin += 1000
    $('.boardWheel').css('transform', `rotate(${spin}deg)`)
});

$('.tester').on('click', function (e) {
    e.preventDefault();
    game.incrementStage();
    domUpdates.resetLetters();
    domUpdates.highlightBoard(game.round.allCorrectAnswers[game.stage]);
    if(game.stage <= 3) {
        $('.roundNumber').text(game.stage + 1);
    } else {
        $('.roundNumber').text('Bonus!!');
    }
    $('.spinButton').prop('disabled', false);
});

$('.reset').on('click', function (e) {
    e.preventDefault();
    game.resetGame();
    domUpdates.clearAnswerBoard();
    domUpdates.resetLetters();
    domUpdates.resetInputs();
    console.log(game);
});

$('body').on('click', '.guessSubmit', function () {
    $('.guessCard').remove()
});

$('.guessPuzzle').on('click', function(e) {
    e.preventDefault()
    domUpdates.appendGuessCard()
});
