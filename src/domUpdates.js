import $ from 'jquery';

export default {
  updateNames() {
    $('#player-one-name').text('hello')
    $('#player-two-name').text('hello')
    $('#player-three-name').text('hello')
    $('#player-one-input').slideUp(500);
    $('#player-two-input').slideUp(500);
    $('#player-three-input').slideUp(500);
    console.log('updateNames test!')
  }
}