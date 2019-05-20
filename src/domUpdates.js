import $ from 'jquery';
import Data from './Data';
import Game from './Game';
import Player from './Player'

export default {
  displayNames (players) {
    players.forEach((player, index) => {
      $(`.player-${index + 1}`).text(player.name)
    });
  }
}
