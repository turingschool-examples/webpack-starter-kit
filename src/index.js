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
    $('body').find(e.target).attr('disabled', '').css("background-color", "#00e000");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters, game.wheel.currentSpinValue, game, game.currentPlayer);
    game.checkGuess(e);
    // game.currentPlayer.calculateBank(gamewheel.currentSpinValue, game, game.currentPlayer.name)
});

$('.vowel').on('click', function (e) {
    game.fillVowels(e);
    $('body').find(e.target).attr('disabled', '').css("background-color", "#00e000");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters, game.wheel.currentSpinValue, game, game.currentPlayer);
    game.checkGuess(e);
    // game.currentPlayer.calculateBank(game.wheel.currentSpinValue, game, game.currentPlayer.name)
});

$('.spinButton').on('click', function (e) {
    e.preventDefault();
    game.wheel.spinWheel(game.stage);
    $('.spinButton').prop('disabled', true);
    game.currentPlayer.calculateBank(game.wheel.currentSpinValue, game, game.currentPlayer.name);
    $('.spunValue').text(game.wheel.currentSpinValue)
    $('.instructions').text('Choose a letter!')
    spin += 1000
    $('.boardWheel').css('transform', `rotate(${spin}deg)`)
    console.log(game)
    console.log(game.currentPlayer)
    console.log('is this a number? ' + typeof game.wheel.currentSpinValue)
});

// $('.tester').on('click', function (e) {
//     e.preventDefault();
//     game.incrementStage();
//     domUpdates.resetLetters();
//     domUpdates.highlightBoard(game.round.allCorrectAnswers[game.stage]);
//     if(game.stage <= 3) {
//         $('.roundNumber').text(game.stage + 1);
//     } else {
//         $('.roundNumber').text('Bonus!!');
//     }
//     $('.spinButton').prop('disabled', false);
// });

$('.reset').on('click', function (e) {
    e.preventDefault();
    game.resetGame();
    domUpdates.clearAnswerBoard();
    domUpdates.resetLetters();
    domUpdates.resetInputs();
    console.log(game);
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
    $('.spinButton').prop('disabled', false)
    $('.guessCard').remove()
});

$('.guessPuzzle').on('click', function(e) {
    e.preventDefault()
    domUpdates.appendGuessCard()
});
