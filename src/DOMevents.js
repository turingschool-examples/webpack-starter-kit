import $ from "jquery";
import Game from "./Game.js";
import Player from "./Player.js";
const game = new Game();
const player1 = new Player();
const player2 = new Player();

game.startGame();

$("#submit-names").on("click", () => {
  if (
    $("#player1-name-input").val() === "" ||
    $("#player2-name-input").val() === ""
  ) {
    return;
  } else {
    player1.name = $("#player1-name-input").val();
    player2.name = $("#player2-name-input").val();
    $(".player-1-name").html(player1.name);
    $(".player-2-name").html(player2.name);
    $(".current-turn").html(`${player1.name}'s turn!`);
    $(".main-content").slideDown();
    $(".user-inputs").hide();
  }
});

//capture value from guess input
$("#submit-guess").on("click", event => {
  event.preventDefault();

  if (game.currentRound !== 3) {
    game.whoseTurn();

    //let player 1 guess first
    if (game.currentPlayerTurn === "player1") {
      $(".current-turn").html(`${player2.name}'s turn!`);
      let userInput = $("#player-guess").val();
      player1.score += game.checkUserGuess(userInput, game.currentAnswers);
      $(".player-1-score").html(`Score: ${player1.score}`);
    } else if (game.currentPlayerTurn === "player2") {
      $(".current-turn").html(`${player1.name}'s turn!`);
      let userInput = $("#player-guess").val();
      player2.score += game.checkUserGuess(userInput, game.currentAnswers);
      $(".player-2-score").html(`Score: ${player2.score}`);
    }
  } else {
    $(".current-turn").html(`${player1.name}'s turn!`);
    let userInput = $("#player-guess").val();
    player1.score += game.checkUserGuess(userInput, game.currentAnswers);
    $(".player-1-score").html(`Score: ${player1.score}`);
  }
});

$(".multiplier-form").on("click", ".multiplier-radio", event => {
  const radioValue = parseInt(event.currentTarget.defaultValue);
  game.multiplyValues(radioValue);
  game.timer(3);
  $(".countdown-timer").removeClass("hidden");
  $(".multiplier-form").fadeOut();
  $(".multiplying-by").html(`${radioValue}X POINTS`);
});

$(".player-cards").on("click", () => {
  $(".restart-game").slideDown(300);
});
