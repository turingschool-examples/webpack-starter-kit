import $ from 'jquery';
import data from './data-set.js';
import Player from './Player.js';
import DailyDouble from './DailyDouble.js';
import Round from './Round.js';
import Game from './Game.js';


export default {
  updateNames(names) {
    $('.player-one-name').text(names[0].name).show();
    $('.player-two-name').text(names[1].name).show();
    $('.player-three-name').text(names[2].name).show();
    $('#player-one-input').hide(500);
    $('#player-two-input').hide(500);
    $('#player-three-input').hide(500);
  },

  displayCategories(categoryIds, categoryTitles) {
    categoryIds.forEach((category, index) => {
      $(`.cat-title-${index}`).text(`${categoryTitles[category - 1]}`);
      $(`.col.${index}`).attr('id', category);
    });
  },

  displayRound(currentRound) {
    $('#round').text(currentRound);
  },

  notifyPlayerOneTurn(game) {
    if (game.playerTurn === 0) {
      $('#player-one-name').attr('style', 'color:#02F4E5;');
      $('#player-three-name').removeAttr('style', 'color:#02F4E5;');
    } 
  },

  showClue(game, clue, event, categoryTitles) {
    game.round.cluesRemaining--;
    console.log(game.round.cluesRemaining);
    console.log(game.round.dailyDoubleClue);
    $('.question-prompt').show()
    $('.question').text(clue.question);
    $(event.target).text('');
    $('#category').text(`${categoryTitles[event.target.id - 1]}`)
    if (game.round.cluesRemaining === game.round.dailyDoubleClue) {
      $('.question-box').hide();
      this.dailyDouble(game, clue);
    } 
  },

  dailyDouble(game, clue) {
    $('.question-prompt').show();
    $('.style-daily-double').show();
    let dailyDouble;
    $('.daily-double-btn').click(function (e) {
      e.preventDefault();
      dailyDouble = new DailyDouble(clue.question, clue.answer, clue.pointValue);
      dailyDouble.updatePointValue($('#daily-double').val());
      clue.pointValue = parseInt(dailyDouble.pointValue);
      $('.style-daily-double').hide();
      $('.question-box').show()
      console.log(dailyDouble);
      console.log(clue.pointValue);
    });
  },

  answerQuestion(game) {
    let currentPlayer = game.players[game.playerTurn];
    if (game.round.cluesRemaining === 0 && game.roundCounter < 2) {
      game.roundCounter++;
      this.newCluePoints(game);
      this.displayRound(game.roundCounter);
      this.newCategoryValues();
      game.createRound();
    } else {
      game.createFinalRound();
    }
    let answerMatch = data.clues.reduce((acc, currentClue) => {
      if ($(".question").text() === currentClue.question) {
        acc += currentClue.answer;
      }
      return acc;
    }, '');
    if (answerMatch.toLowerCase() === $('#question-input').val().toLowerCase()) {
      this.rightAnswer(currentPlayer, answerMatch, game);
    } else {
      this.wrongAnswer(currentPlayer, answerMatch, game);
    }
    $('#question-input').val('');
  },

  newCategoryValues() {
    let roundTwoValues = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
    let result = roundTwoValues.map(number => {
        return number * 200;
      })
    $('h3').each(function(i) {
      $(this).text(result[i]);
    })
  },

  rightAnswer(currentPlayer, answerMatch, game) {
     $('.game-board').show();
     $('.question-prompt').hide();
     $('.result-prompt').show(500);
     $('.result').text('Correct Answer!');
     currentPlayer.increaseScore(answerMatch, game);
     $(`.player-${game.playerTurn}-points`).text(currentPlayer.score);
     $('.result-prompt').hide(100);

  },

  wrongAnswer(currentPlayer, answerMatch, game) {
    $('.game-board').show();
    $('.question-prompt').hide();
    $('.result-prompt').show(500);
    $('.result').text('Incorrect Answer!');
    currentPlayer.decreaseScore(answerMatch, game);
    $(`.player-${game.playerTurn}-points`).text(currentPlayer.score);
    game.changePlayerTurn();
    $('.result-prompt').hide(100);
  },

  notifyNextTurn(game) {
    if (game.playerTurn === 0) {
      $('#player-one-name').attr('style', 'color:#02F4E5;');
      $('#player-three-name').removeAttr('style', 'color:#02F4E5;');
    } 
    if (game.playerTurn === 1) {
      $('#player-two-name').attr('style', 'color:#02F4E5;');
      $('#player-one-name').removeAttr('style', 'color:#02F4E5;');
    }
    if (game.playerTurn === 2) {
      $('#player-three-name').attr('style', 'color:#02F4E5;');
      $('#player-one-name').removeAttr('style', 'color:#02F4E5;');
      $('#player-two-name').removeAttr('style', 'color:#02F4E5;');
    }
  },

  newCluePoints(game) {
    let doubleValueClues = data.clues.map(clue => {
     return {
             question: clue.question,
             pointValue: clue.pointValue * 2,
             answer: clue.answer,
             categoryId: clue.categoryId
           }
    });
    game.clues = doubleValueClues;
  },

  displayFinalClue(finalClue, categoryTitles) {
    $('.display-final-clue-category').text(`${categoryTitles[finalClue.categoryId - 1]}`)
    console.log(finalClue)
    console.log('test');
  }

}