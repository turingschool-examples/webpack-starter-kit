// jQuery goes here and anything that minipulates the dom
const domUpdates = {
  hideElement() {
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
    if (letter === " ") {
      $(`.piece-${i}`).fadeTo(0, 0.1);
    }
  },

  appendWheel(element) {
    $('.wheel').append('<p class="wheel-element">' + element + '</p>');
  },

  disableKeyboard() {
    if (!$('.vowel').is(':disabled')) {
      $('.vowel').attr('disabled', true);
      $('.vowel').addClass('disabled');
    }
    if (!$('.consonant').is(':disabled')) {
      $('.consonant').attr('disabled', true);
      $('.consonant').addClass('disabled');
    }
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

  displayCorrectLetter(letter, i) {
    $(`.piece-${i}`).removeClass('hidden')
  },

  scoreUpdate(player, score) {
    $(`#score-player${player}`).text(score);
  },

  updateRound(oldRound, newRound) {
    console.log("updating round highlights")
    $(`.round-${oldRound}`).removeClass('highlight');
    $(`.round-${newRound}`).addClass('highlight');  
  },

  displayDetails(difficulty, category) {
    $('.difficulty').text(`DIFFICULTY: ${difficulty} out of 4`);
    $('.category').text(`CATEGORY: ${category}`);
  }

};










export default domUpdates;