import Game from './Game.js';
import $ from 'jquery';
import domUpdates from './domUpdates.js';
import './css/base.css';
import './images/wheel.png';
import './images/Color_Wheel.png';



let game =  new Game();

$('.startGame').on('click', function (e) {
    e.preventDefault()
    domUpdates.startGame(game)
    domUpdates.changeNames()
    $('.nameInput').hide('slow');
    $('.startGame').hide('slow');

    console.log(game)
});

$('.letters').on('click', function(e) {
    e.target.innerText
    game.fillUseLetters(e);
    $('body').find(e.target).off().css("background-color", "grey");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters)
    console.log(e.target.innerText)
})

$('.vowel').on('click', function (e){
    e.target.innerText;
    game.fillVowels(e);
    $('body').find(e.target).off().css("background-color", "grey");
    domUpdates.checkLetterGuess(game.round.allCorrectAnswers[game.stage], game.usedLetters)
    console.log(e.target.innerText)
})

$('.spinButton').on('click', function (e) {
    e.preventDefault()
    game.wheel.spinWheel()
});

