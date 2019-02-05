import $ from 'jquery';

const domUpdates = {

  toggleSplash: () => {
    $('.splash--container').toggleClass('hide--container');
    $('.game--container').toggleClass('game--inactive');
  },

  displayPlayers: (a, b, c) => {
    $('.player--one').text(a);
    $('.player--two').text(b);
    $('.player--three').text(c);
  },

  displayPlayerScore: (currentplayer, game) => {
    if (currentplayer === game.players[0]) {
      $('.player--one--score').text(currentplayer.score);
    } else if (currentplayer === game.players[1]) {
      $('.player--two--score').text(currentplayer.score);
    } else {
      $('.player--three--score').text(currentplayer.score);
    }
  },

  resetPlayersScores: () => {
    $('.player--one--score').text(0);
    $('.player--two--score').text(0);
    $('.player--three--score').text(0);
  },

  displayRound: () => {
    $('.game--round').text('Round: 2')
  },

  enableReset: () => {
    $('.game--exit').prop( "disabled", false);
  },

  disableReset: () => {
    $('.game--exit').prop( "disabled", true);
  },

  setClues: (clues) => {
    $('.game--board').empty();
    clues.forEach(clue => {
      $('.game--board').append(`
        <h4
        data-categoryid="${clue.categoryId}" 
        data-pointvalue="${clue.pointValue}"
        disabled="false">
        ${clue.pointValue}
        </h4>`)
    });
  },

  displayCategories: (array) => {
    $('.category--one').text(array[0]);
    $('.category--two').text(array[1]);
    $('.category--three').text(array[2]);
    $('.category--four').text(array[3]);
  },
  
  displayClue: (question) => {
    $('.game--container').toggleClass('game--inactive');
    $('body').append(`
    <div class="popup--container clue--container">
      <h2 class="popup--question">${question}</h2>
      <input class="popup--input" type="text" placeholder="Place Answer Here"/>
      <button class="submit--guess">Submit Guess</button>
    </div>
    `);
  },
  
  hidePopUp: () => {
    $('.game--container').toggleClass('game--inactive');
    $('.clue--container').remove();
  },

  removeTile: (tile) => {
    if ($(tile).is('h4')) {
      $(tile).text('');
      $(tile).addClass('used--tile');
    }
  },

  changePrompt: (answer) => {
    $('.popup--question').text(`the answer is "${answer}"`);
    $('.popup--input').css('display', 'none');
    $('.submit--guess').css('display', 'none');
  }
  
}

export default domUpdates;