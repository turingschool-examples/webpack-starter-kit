
let domUpdates = {

  displayPlayerNames() {
  let $playerOneInput = $('.js-player-one-input').val();
  let $playerTwoInput = $('.js-player-two-input').val();
  let $playerThreeInput = $('.js-player-three-input').val();

  $('.js-player-name-display-one').text($playerOneInput);
  $('.js-player-name-display-two').text($playerTwoInput);
  $('.js-player-name-display-three').text($playerThreeInput);


  }
}

export default domUpdates;