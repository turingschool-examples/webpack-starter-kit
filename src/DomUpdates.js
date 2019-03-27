import $ from 'jquery';

export default {
  activateLetters() {
    $('td.single-letter').removeClass('disable-selected-letters')
  },

  activateVowels() {
    $('td.single-letter-vowel').removeClass('disable-selected-letters');
  },
  
  createGameBoard() {  
    $('main').prepend(
      `<section id="letters-selected-area" class="letters-selected-area">
            <table class="letters-selected">
            <tr>
            </tr>
            <tr>
                <td role="button" class="single-letter-vowel disable-selected-letters">A</td>
                <td role="button" class="single-letter disable-selected-letters">B</td>
                <td role="button" class="single-letter disable-selected-letters">C</td>
                <td role="button" class="single-letter disable-selected-letters">D</td>
                <td role="button" class="single-letter-vowel disable-selected-letters">E</td>
                <td role="button" class="single-letter disable-selected-letters">F</td>
                <td role="button" class="single-letter disable-selected-letters">G</td>
                <td role="button" class="single-letter disable-selected-letters">H</td>
                <td role="button" class="single-letter-vowel disable-selected-letters">I</td>
                <td role="button" class="single-letter disable-selected-letters">J</td>
                <td role="button" class="single-letter disable-selected-letters">K</td>
                <td role="button" class="single-letter disable-selected-letters">L</td>
                <td role="button" class="single-letter disable-selected-letters">M</td>
                <td role="button" class="single-letter disable-selected-letters">N</td>
                <td role="button" class="single-letter-vowel disable-selected-letters">O</td>
                <td role="button" class="single-letter disable-selected-letters">P</td>
                <td role="button" class="single-letter disable-selected-letters">Q</td>
                <td role="button" class="single-letter disable-selected-letters">R</td>
                <td role="button" class="single-letter disable-selected-letters">S</td>
                <td role="button" class="single-letter disable-selected-letters">T</td>
                <td role="button" class="single-letter-vowel disable-selected-letters">U</td>
                <td role="button" class="single-letter disable-selected-letters">V</td>
                <td role="button" class="single-letter disable-selected-letters">W</td>
                <td role="button" class="single-letter disable-selected-letters">X</td>
                <td role="button" class="single-letter disable-selected-letters">Y</td>
                <td role="button" class="single-letter disable-selected-letters">Z</td>
            </tr>
        </table>
    </section>
    <section class="game-info">
        <div class="game-info-containers hint-container">
            <p class="hint-" id="hint">Catagory: <span class="hint-text"></span></p>
        </div>
        <div class="game-info-containers description-container">
            <p class="description" id="description">Description: <span class="description-text"></span></p>
        </div>
        <div class="game-info-containers active-player-container">
            <p class="active-player"><span class="active-player-text">Player 1</span>, you're up!</p>
        </div>
        <div class="game-info-containers round-container">
            <p class="round">Round: <span class="round-text">1</span</p>
        </div>
    </section>
    <section id="puzzle-area" class="puzzle-area">
        <div class="puzzle">
            <table class="puzzle-row row1">
                <tr>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td class="puzzle-cell-container" class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td class="puzzle-cell-container">
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </section>
    `)
  },

  createPlayerBox(player) {
    $('main').append(
      `<section id="player-actions" class="player-actions">
      <div>
          <button class="player-action-btn spinner game-buttons">Wheel: <span class="wheel-value">Spin me!</span></button>
      </div>
      <div>
          <button class="player-action-btn game-buttons vowel">Buy Vowel</button>
      </div>
      <div>
          <input for="player-guess" type="text" id="guess-submission" class="guess-submission" placeholder="Submit a guess!">
          <button id="player-guess" class="player-action-btn game-buttons">Submit Guess</button>
      </div>
        </section>
      <section id="player-score-area" class="player-score-area">
        <div id="player-score" class="player-score">
            <h2>${player[0].name}</h2>
            <h2 class="bank-score player-1">${player[0].playerBank}</h2>
            <h4>${player[0].score}</h4>
        </div>
        <div id="player-score" class="player-score">
            <h2>${player[1].name}</h2>
            <h2 class="bank-score player-2" >${player[1].playerBank}</h2>
            <h4>
        </div>
        <div id="player-score" class="player-score">
            <h2>${player[2].name}</h2>
            <h2 class="bank-score player-3">${player[2].playerBank}</h2>
        </div>
    </section>`
    )
  },

  fillGameBoard(clueAnswer) {
    const puzzleCells = $('.puzzle-cell').toArray();
    const cellMap = {};
    
    puzzleCells.forEach((cell, index) => {
      const letter = clueAnswer[index];
      if (cellMap[letter]) {
        cellMap[letter].push(index);
      } else {
        cellMap[letter] = [index];
      }
      if (letter === " ") {
        $(cell).append(`<p class="puzzle-text">${letter}</p>`);
        $(cell).parent().has('p').removeClass('puzzle-cell-container').addClass('spaces-not-displayed');
      } else if (letter === "-" || letter === "'") {
        $(cell).append(`<p class="puzzle-text">${letter}</p>`);
      } else if (letter !== undefined && letter !== " ") {
        $(cell).append(`<p class="puzzle-text">${letter}</p>`);
        $(cell).parent().has('p').removeClass('puzzle-cell-container').addClass('letters-not-displayed');
      }
    })
    return (cellMap);
  },

  disableLetter(event) {
    $(event.target).removeClass('single-letter-vowel').removeClass('single-letter').addClass('disable-selected-letters')
  },

  deactivateLetters() {
    $('.single-letter, .single-letter-vowel').addClass('disable-selected-letters')
  },

  displayHint(clue) {
    const hint = clue.category;
    const description = clue.description;
    $('.hint-text').text(hint);
    $('.description-text').text(description);
  },

  displayWheelValue(wheelValue) {
    console.log(wheelValue);
    $('.wheel-value').text(wheelValue);
  },


  updateRoundScore(playerBankValue, activePlayerValue) {
    let playerScoreElement = $('h2')
    if (activePlayerValue === 0 && playerScoreElement.hasClass('player-1') === true) {
      $('.player-1').text(playerBankValue)
    } else if (activePlayerValue === 1 && playerScoreElement.hasClass('player-2') === true) {
      $('.bank-score.player-2').text(playerBankValue)
      console.log('else if 2')
    } else if (activePlayerValue === 2 && playerScoreElement.hasClass('player-3') === true) {
      $('.bank-score.player-3').text(playerBankValue)
      console.log('else if 3')
    }
  },


  gameMessage(message) {
    let className = message.split(' ').join('-');
    $('footer').prepend(`
    <section class="${className}">
      <h1 class="result"><i class="fas fa-exclamation">${message.toUpperCase()}</i></h1>
    </section>
  `).fadeOut(2000, function() {
      $(`.${className}`).remove();
      $('footer').removeAttr("style")
    })
  },

  clearGameBoard() {
    $('.letters-selected-area').remove();
    $('.game-info').remove();
    $('.puzzle-area').remove();

  },
  
  displayActivePlayer(activePlayer) {
    console.log("Active Player: ", activePlayer.name)
    $('.active-player-text').text(activePlayer.name);
  }
}