import Game from './Game.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js';
import './css/base.css';
import './images/wheel.png';
import './images/Color_Wheel.png';

let game =  new Game();

$('.spinButton').prop('disabled', true);

$('.startGame').on('click', function (e) {
    e.preventDefault();
    domUpdates.startGame(game);
    domUpdates.changeNames();
    $('.nameInput').hide('slow');
    $('.startGame').hide('slow');
    $('.spinButton').prop('disabled', false);
    console.log(game)
});

$('.letters').on('click', function(e) {
    e.target.innerText
    game.fillUseLetters(e);
    $('body').find(e.target).attr('disabled', '').css("background-color", "grey");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters, game,e);
    game.checkGuess(e);
});

$('.vowel').on('click', function (e){
    e.target.innerText;
    game.fillVowels(e);
    $('body').find(e.target).attr('disabled', '').css("background-color", "grey");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters);
    game.checkGuess(e);
});

$('.spinButton').on('click', function (e) {
    e.preventDefault();
    game.wheel.spinWheel(game.stage);
    game.currentPlayer.calculateBank(game.wheel.currentSpinValue, game);
    $('.spinButton').prop('disabled', true);
});

$('.tester').on('click', function (e){
    e.preventDefault();
    game.incrementStage();
    domUpdates.resetLetters();
    if(game.stage <= 3) {
        $('.roundNumber').text(game.stage + 1)
    } else {
        $('.roundNumber').text('Bonus!!')
    }
    $('.spinButton').prop('disabled', false);
});

$('.reset').on('click', function (e){
    e.preventDefault();
    game.resetGame();
    domUpdates.clearAnswerBoard();
    domUpdates.resetLetters();
    domUpdates.resetInputs();
    console.log(game);
});
