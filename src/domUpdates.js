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
  
};










export default domUpdates;