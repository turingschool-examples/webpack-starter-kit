import $ from 'jquery';
import Game from './Game.js';

 // $('.submitBtn').on('click', round.getAnswer());

 

export default {

  popUp() {
  $('.gamePopUp').append( `<section class="startGamePopUp">
     <h2>Welcome to Family Feud!</h2>
     <div class='playerNames'>
     <p>Please enter player names.</p>
      <label for="">Player 1 Name</label>
     <input class="nameOne"></input>
     <label for="">Player 2 Name</label>
     <input class="nameTwo"></input>
     </div>
     <button id="startBtn">Start Game</button>
    </section>`
)
},

  
}


//update scores
//update questions
//update answers


