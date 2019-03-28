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
    console.log(game)
});

$('.letters').on('click', function(e) {
    game.fillUseLetters(e);
    $('body').find(e.target).prop('disabled', true).css("background-color", "#00e000");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters, game.wheel.currentSpinValue, game, game.currentPlayer);
    game.checkGuess(e);
});

$('.vowel').on('click', function (e) {
    if(game.currentPlayer.score > 99) {
        game.currentPlayer.score -= 100;
        game.fillVowels(e);
        $('body').find(e.target).prop('disabled', true)
        $('body').find(e.target).css("background-color", "#00e000");
        domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters, game.wheel.currentSpinValue, game, game.currentPlayer);
        game.checkGuess(e);
    } else {
        $('.instructions').text('Not enough moneys/cheddar...Choose a letter')
    }
});

$('.spinButton').on('click', function (e) {
    e.preventDefault();
    game.wheel.spinWheel(game.stage);
    game.currentPlayer.calculateBank(game.wheel.currentSpinValue, game, game.currentPlayer.name)
    $('.spunValue').text(game.wheel.currentSpinValue)
    spin += 1000
    $('.boardWheel').css('transform', `rotate(${spin}deg)`)
});

$('.reset').on('click', function (e) {
    e.preventDefault();
    game.resetGame();
    domUpdates.clearAnswerBoard();
    domUpdates.resetLetters();
    domUpdates.resetInputs();
});

$('body').on('click', '.guessSubmit', function (e) {
    e.preventDefault()
    if($('#guessInput').val().toUpperCase() === game.round.answers[game.stage]){
        console.log($('#guessInput').val().toUpperCase())
        game.incrementStage();
        domUpdates.resetLetters();
        domUpdates.highlightBoard(game.round.allCorrectAnswers[game.stage]);
        game.currentPlayer.calculateScore()
        domUpdates.showPlayerScore(game.currentPlayer.id, game.currentPlayer.score)
        if(game.stage <= 3) {
            $('.roundNumber').text(game.stage + 1);
        } else {
            $('.roundNumber').text('Bonus!!');
        }
    }
    console.log(game)
    $('.instructions').text('Spin the wheel!')
    $('.spinButton').prop('disabled', false)
    $('.guessCard').remove()
});

$('.guessPuzzle').on('click', function(e) {
    e.preventDefault()
    domUpdates.appendGuessCard()
});
