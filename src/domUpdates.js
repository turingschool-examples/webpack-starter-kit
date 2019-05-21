import $ from 'jquery';
import User from './User';
import Round from './Round';
import Game from './Game';


const domUpdates = {

  // displayWords: function(string){
  //   $('#words').text(string)
  // }

  displayScore: function(score){
    $('.player-one-score').text(score)
  }


};


export default domUpdates;