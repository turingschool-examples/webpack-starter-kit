import $ from "jquery";
import Game from "./Game.js";
import Player from "./Player.js";
import domObject from "./DOMupdates.js";
const player1 = new Player();
const player2 = new Player();
const game = new Game(player1, player2);

game.startGame();

$("#submit-names").on("click", () => {
  if (
    $("#player1-name-input").val() === "" ||
    $("#player2-name-input").val() === ""
  ) {
    return;
  } else {
    game.player1.name = $("#player1-name-input").val();
    game.player2.name = $("#player2-name-input").val();
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

  if (game.currentRound < 3) {
    game.whoseTurn();

    //let player 1 guess first
    if (game.currentPlayerTurn === "player1") {
      rotatePlayer(player2);
      checkInputOf(player1);
      updateTheScoreOf(player1, 1);
    } else if (game.currentPlayerTurn === "player2") {
      rotatePlayer(player1);
      checkInputOf(player2);
      updateTheScoreOf(player2, 2);
    }
  } else if (game.currentRound < 5) {
    if (game.currentPlayerTurn === "player2") {
      checkInputOf(player1);
      updateTheScoreOf(player1, 1);
    } else if (game.currentPlayerTurn === "player1") {
      checkInputOf(player2);
      updateTheScoreOf(player2, 2);
    }
  } else {
    console.log("|| It's over anakin, i have the high ground! ||");
  }

  function rotatePlayer(player) {
    $(".current-turn").html(`${player.name}'s turn!`);
  }

  function checkInputOf(player) {
    let userInput = $("#player-guess").val();
    player.score += game.checkUserGuess(userInput, game.currentAnswers);
    // updateTheScoreOf(player, domElementId);
  }

  function updateTheScoreOf(player, domElementId) {
    $(`.player-${domElementId}-score`).html(`Score: ${player.score}`);
  }
});

$(".multiplier-form").on("click", ".multiplier-radio", event => {
  const radioValue = parseInt(event.currentTarget.defaultValue);
  game.multiplyValues(radioValue);
  game.timer(10);
  $(".countdown-timer").removeClass("hidden");
  $(".multiplier-form").fadeOut();
  $(".multiplying-by").html(`${radioValue}X POINTS`);
});

$(".player-cards").on("click", () => {
  $(".restart-game").removeClass("hidden");
});
