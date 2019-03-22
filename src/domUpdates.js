import $ from 'jquery';

export default {
  getPlayerNames() {
    $(".start").click(function() {
      let inputPlayerOne = $(".player-one-input").val();
      $(".player-one-name").text(inputPlayerOne);
      let inputPlayerTwo = $(".player-two-input").val();
      $(".player-two-name").text(inputPlayerTwo);
      let inputPlayerThree = $(".player-three-input").val();
      $(".player-three-name").text(inputPlayerThree);
      $("input").remove();
      game.startGame();
    });
  }

}