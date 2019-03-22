import $ from 'jquery'

export default {


    

  createGameBoard() {    
    $('main').prepend(
      `<section id="letters-selected-area" class="letters-selected-area">
            <table class="letters-selected">
            <tr>
                <td>A</td>
                <td>B</td>
                <td>C</td>
                <td>D</td>
                <td>E</td>
                <td>F</td>
                <td>G</td>
                <td>H</td>
                <td>I</td>
                <td>J</td>
                <td>K</td>
                <td>L</td>
                <td>M</td>
                <td>N</td>
                <td>O</td>
                <td>P</td>
                <td>Q</td>
                <td>R</td>
                <td>S</td>
                <td>T</td>
                <td>U</td>
                <td>V</td>
                <td>W</td>
                <td>X</td>
                <td>Y</td>
                <td>Z</td>
            </tr>
        </table>
    </section>
    <section id="puzzle-area" class="puzzle-area">
        <div class="puzzle">
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

  fillGameBoard() {

  }
}