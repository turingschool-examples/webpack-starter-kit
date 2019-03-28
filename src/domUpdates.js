import $ from 'jquery';

let domUpdates = {

    startGame (game) {
        game.startGame($('.nameInput').eq(0).val(), $('.nameInput').eq(1).val(), $('.nameInput').eq(2).val());
    },

    changeNames() {
        $('.player').eq(0).text($('.nameInput').eq(0).val()).css('color', '#00e000');
        $('.player').eq(1).text($('.nameInput').eq(1).val()).css('color', '#00e000');
        $('.player').eq(2).text($('.nameInput').eq(2).val()).css('color', '#00e000');
    },

    changeCategory(category) {
        $('.category').text(category);
    },
    
    changeClue(clue) {
        $('.clue').text(clue);
    },

    highlightBoard(splitAnswer) {
        splitAnswer.forEach((cur, idx) => {
            if(cur === '-') {
                $('.clueLetter').eq(idx).text('-')
                $('.clueLetter').eq(idx).css("background-color", "#03a9f4")
            } else {
                $('.clueLetter').eq(idx).css("background-color", "white")
                
            }
        });
    },

    checkLetterGuess(splitAnswer, usedArray, value, game, player) {
        splitAnswer.forEach((letter, index) => {
            if(usedArray.includes(letter) && !usedArray.includes('') ) {
                $('.clueLetter').eq(index).text(letter);
                $('.clueLetter').eq(index).css("background-color", "#03a9f4");
                player.calculateBank(value, game, player);
            } else {
                $('.clueLetter').eq(index).css("background-color", "white");
            }
            splitAnswer.forEach((cur, idx) => {
                if(cur === '-') {
                    $('.clueLetter').eq(idx).text('-')
                    $('.clueLetter').eq(idx).css("background-color", "#03a9f4")
                }})
        })
    },

    enableButton() {
        $('.spinButton').prop('disabled', false);
        $('.instructions').text('Spin the wheel!')
    },

    clearAnswerBoard() {
        $('.clueLetter').empty().css('background-color', '#673ab7');
    },

    resetNames() {
        $('.player').eq(0).text('Player 1');
        $('.player').eq(1).text('Player 2');
        $('.player').eq(2).text('Player 3');
    },

    resetLetters() {
        $('.letters').removeAttr('disabled').css('background-color', '#673ab7');
        $('.vowel').removeAttr('disabled').css('background-color', '#673ab7');
    },

    resetInputs() {
        $('.nameInput').show('slow');
        $('.nameInput').val('');
        $('.startGame').show('slow');
        $('.spinButton').prop('disabled', true);
    },

    appendGuessCard() {
        let newDiv = $(
            `<div class="guessCard">
                <h1 class='guessHeading'>Take A Guess</h1>
                <div>
                    <input placeholder="Guess..." id="guessInput"/>
                    <button class="guessSubmit">Submit Guess</button>
                </div>
            </div>`
        )
        $('.roundSection').append(newDiv)
    },

    showCurrentPlayer(player) {
        $('.currentPlayer').text(player)
    },

    showPlayerScore(id, score) {
        $('.playerScore').eq(id).text(score)
    },

    spinMessage(player) {
        $('.instructions').text(`${player} lost your turn, next player spin the wheel!`)
    },

    disableSpin() {
        $('.spinButton').prop('disabled', true)
        $('.instructions').text('Choose a letter!')

    },

    continueMsg() {
        $('.instructions').text('Correct! Keep going!')
    }
}

export default domUpdates;