// jQuery goes here and anything that minipulates the dom
const domUpdates = {
  hideElement() {
    console.log('fire');
    $('.hidden-popup').fadeOut();
    $('.hidden-popup').html('');
  },

  fadeNameInput() {
    $(".name-input").fadeOut(1000);
  },

  displayPlayerNames() {
    $('#player1-output').text($('#player1')[0].value);
    $('#player2-output').text($('#player2')[0].value);
    $('#player3-output').text($('#player3')[0].value);
  },

  displayElement(currentSpin) {
    $('.hidden-popup').fadeIn();
    $('.hidden-popup').append('<p>' + currentSpin + '</p>');
    $('.hidden-popup').append('<button class="remove-popup">OK</button>');
    $(".remove-popup").on("click", () => {
      domUpdates.hideElement();
    });
  },

  appendPuzzle(letter, i) {
    $('.puzzle-box').append(`<p class="puzzle-pieces piece-${i} hidden"> ${letter} </p>`);
  },

  appendWheel(element) {
    $('.wheel').append('<p class="wheel-element">' + element + '</p>');
  },

  toggleKeyboard() {
    if (!$('.vowel').is(':disabled')) {
      $('.vowel').attr('disabled', true);
      $('.vowel').addClass('disabled');
      $('.consonant').attr('disabled', false);
      $('.consonant').removeClass('disabled');
    } else {
      $('.vowel').attr('disabled', false);
      $('.vowel').removeClass('disabled');
      $('.consonant').attr('disabled', true);
      $('.consonant').addClass('disabled');
    }
  },

  displayCorrectLetter(e, letter, i) {
    if (letter === e.currentTarget.innerText) {
      $(`.piece-${i}`).removeClass('hidden')
    }
  },

  scoreUpdate() {
    $('#score-player1').text(game.players[0].roundScore);
    $('#score-player2').text(game.players[1].roundScore);
    $('#score-player3').text(game.players[2].roundScore);
  },

};










export default domUpdates;