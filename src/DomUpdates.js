import $ from 'jquery';

export default {
  activateLetters() {
    $('td.single-letter').removeClass('disable-selected-letters')
  },
  
  createGameBoard(array) {  
    $('main').prepend(
      `<section id="letters-selected-area" class="letters-selected-area">
            <table class="letters-selected">
            <tr>
            </tr>
            <tr>
                <td role="button" class="single-letter-vowel disable-selected-letters">${array[0]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[1]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[2]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[3]}</td>
                <td role="button" class="single-letter-vowel disable-selected-letters">${array[4]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[5]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[6]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[7]}</td>
                <td role="button" class="single-letter-vowel disable-selected-letters">${array[8]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[9]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[10]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[11]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[12]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[13]}</td>
                <td role="button" class="single-letter-vowel disable-selected-letters">${array[14]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[15]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[16]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[17]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[18]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[19]}</td>
                <td role="button" class="single-letter-vowel disable-selected-letters">${array[20]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[21]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[22]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[23]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[24]}</td>
                <td role="button" class="single-letter disable-selected-letters">${array[25]}</td>
            </tr>
        </table>
    </section>
    <section>
        <h3 class="hint" id="hint">Catagory: <span class="hint-text"></span></h3>
        <h3 class="description" id="description">Description: <span class="description-text"></span></h3>
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
          <button class="player-action-btn spinner">Spin Wheel</button>
      </div>
      <div>
          <button class="player-action-btn">Buy Vowel</button>
      </div>
      <div>
          <input type="text" id="guess-submission" class="guess-submission" placeholder="Submit a guess!">
          <button class="player-action-btn">Submit Guess</button>
      </div>
        </section>
      <section id="player-score-area" class="player-score-area">
        <div id="player-score" class="player-score">
            <h2>${player[0].name}</h2>
            <h2 class="bank-score player-1">${player[0].playerBank}</h2>
        </div>
        <div id="player-score" class="player-score">
            <h2>${player[1].name}</h2>
            <h2 class="bank-score player-2" >${player[1].playerBank}</h2>
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

  createQuitGameBtn() {
    $('main').before(`<div class="quit-btn-container"><button>Quit Game</button></div>`)
  },

  disableLetter(event) {
    $(event.target).attr('id', 'disable-selected-letter')
  },

  deactivateLetters() {
    console.log('deactivate')
    $('td.single-letter').addClass('disable-selected-letter')
  },

  displayHint(clue) {
    const hint = clue.category;
    const description = clue.description;
    $('.hint-text').text(hint);
    $('.description-text').text(description);
  },


  updateRoundScore(playerBankValue, activePlayerValue) {
    let playerScoreElement = $('h2')
    if (activePlayerValue === 0 && playerScoreElement.hasClass('player-1') === true) {
      $('.player-1').text(playerBankValue)
    } else if (activePlayerValue === 0 && playerScoreElement.hasClass('player-2') === true) {
      $('.bank-score.player-2').text(playerBankValue)
    } else if (activePlayerValue === 0 && playerScoreElement.hasClass('player-3') === true) {
      $('.bank-score.player-3').text(playerBankValue)
    }
  },

  noInput() {
      $('.warning').append(
      `<article class="no-answer">
          <h1>Enter A Guess Fam</h1>
        </article>`)
    }
  



  bankrupt() {
    $('footer').prepend(`
    <section class="bankrupt">
      <div class="result"><i class="fas fa-exclamation">BANKRUPT</i></div>
    </section>
  `).fadeOut(9000, function() {
    $('.bankrupt').remove();
  })
},

loseTurn() {
    $('footer').prepend(`
    <section class="lose-turn">
      <div class="result"><i class="fas fa-exclamation">LOSE TURN</i></div>
    </section>
  `).fadeOut(2000, function() {
    $('lose-turn').remove();
  })
}
//   createWheel() {
//       $('main').append(
//     `<section id="theWheel">
//     <div>
//       <h3>${game.wheel[5]}</h3>
//     </div>
//     <div>
//         <h3>${game.wheel[4]}</h3>
//     </div>
//     <div>
//         <h3 class="wheelSelection">${game.wheel[3]}</h3>
//     </div>
//     <div>
//         <h3>${game.wheel[2]}</h3>
//     </div>
//     <div>
//         <h3>${game.wheel[1]}</h3>
//     </div>
//     <div>
//         <h3>${game.wheel[0]}</h3>
//     </div>
//     <button class="wheelSpin">Spin Wheel</button>
//   </section>`
//       )
//   }
}