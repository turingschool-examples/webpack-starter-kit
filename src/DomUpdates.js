import $ from 'jquery'

export default {

  playerBoard(players) {
    $('body').append(`
    <section class="round-title"><h2>Round 1</h2></section>
  `)
    $('footer').append(
      `<section class="playerScoreBoardBox">
        <div class="eachPlayer">
          <h2>${players[0].name}</h2>
          <h3>${players[0].score}</h3>
        </div>
        <div class="eachPlayer">
          <h2>${players[1].name}</h2>
          <h3>${players[1].score}</h3>
        </div>
        <div class="eachPlayer">
            <h2>${players[2].name}</h2>
            <h3>${players[2].score}</h3>
          </div>    
      </section>`  
    )
  }

  // makeWheel(array) {

  //   $('body').prepend(`<section id="theWheel">
  //   <div>
  //     <h3>${game.wheel[5]}</h3>
  //   </div>
  //   <div>
  //       <h3>${game.wheel[4]}</h3>
  //   </div>
  //   <div>
  //       <h3 class="wheelSelection">${game.wheel[3]}</h3>
  //   </div>
  //   <div>
  //       <h3>${game.wheel[2]}</h3>
  //   </div>
  //   <div>
  //       <h3>${game.wheel[1]}</h3>
  //   </div>
  //   <div>
  //       <h3>${game.wheel[0]}</h3>
  //   </div>
  //   <button class="wheelSpin">Spin Wheel</button>
  // </section>`)
  // }
}