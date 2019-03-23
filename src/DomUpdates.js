import $ from 'jquery'

export default {
  createGameBoard(array) {   
    $('main').prepend(
      `<section id="letters-selected-area" class="letters-selected-area">
            <table class="letters-selected">
            <tr>
            <td class="single-letter">${array[0]}</td>
            <td class="single-letter">${array[1]}</td>
            <td class="single-letter">${array[2]}</td>
            <td class="single-letter">${array[3]}</td>
            <td class="single-letter">${array[4]}</td>
            <td class="single-letter">${array[5]}</td>
            <td class="single-letter">${array[6]}</td>
            <td class="single-letter">${array[7]}</td>
            <td class="single-letter">${array[8]}</td>
            <td class="single-letter">${array[9]}</td>
                <td class="single-letter">${array[10]}</td>
                <td class="single-letter">${array[11]}</td>
                <td class="single-letter">${array[12]}</td>
                <td class="single-letter">${array[13]}</td>
                <td class="single-letter">${array[14]}</td>
                <td class="single-letter">${array[15]}</td>
                <td class="single-letter">${array[16]}</td>
                <td class="single-letter">${array[17]}</td>
                <td class="single-letter">${array[18]}</td>
                <td class="single-letter">${array[19]}</td>
                <td class="single-letter">${array[20]}</td>
                <td class="single-letter">${array[21]}</td>
                <td class="single-letter">${array[22]}</td>
                <td class="single-letter">${array[23]}</td>
                <td class="single-letter">${array[24]}</td>
                <td class="single-letter">${array[25]}</td>
            </tr>
        </table>
    </section>
    <section id="puzzle-area" class="puzzle-area">
        <div class="puzzle">
            <table class="puzzle-row row1">
                <tr>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                </tr>
            </table>
            <table class="puzzle-row">
                <tr>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
                        <div class="puzzle-cell" id="puzzle-cell">
                        </div>
                    </td>
                    <td>
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
          <button class="player-action-btn">Spin Wheel</button>
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
            <h2>${player[0].score}</h2>
        </div>
        <div id="player-score" class="player-score">
            <h2>${player[1].name}</h2>
            <h2>${player[0].score}</h2>
        </div>
        <div id="player-score" class="player-score">
            <h2>${player[2].name}</h2>
            <h2>${player[0].score}</h2>
        </div>
    </section>`
    )
  },

  fillGameBoard(clueAnswer) {
    console.log(clueAnswer);
    const puzzleCells = $('.row1 .puzzle-cell').toArray();
    console.log(puzzleCells);
    const map = {};
    puzzleCells.forEach((cell, index) => {
        const letter = clueAnswer[index];
        if(map[letter]) {
            map[letter].push(index);
        } else {
            map[letter] = [index];
        }
        $(cell).text(letter);
    })
    console.log(map);
  },

  createQuitGameBtn() {
    $('main').before(
        `<div class="quit-btn-container"><button></button></div>`
        )
  }
}