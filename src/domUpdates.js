import $ from 'jquery';

export default {
    updatePlayersDom: function(player1Name, player2Name) {
        $(".player-1-name").text(player1Name);
        $(".player-2-name").text(player2Name);
        $(".welcome-screen").addClass("hidden");
    },

    displayRoundQuestion: function(question, answer) {
        $(".survey").text(question);
    }
}
