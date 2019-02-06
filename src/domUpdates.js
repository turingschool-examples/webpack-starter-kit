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

};










export default domUpdates;