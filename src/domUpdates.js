import $ from 'jquery';

const domUpdates = {
  updateNames(name1, name2) {
    $(".player1-name > h4").text(name1);
    $(".player2-name > h4").text(name2);
  }
}

export default domUpdates;