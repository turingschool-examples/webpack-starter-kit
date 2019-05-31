import $ from 'jquery'


let domUpdates = {

    displayTodaysDate(date) {
        $('h1').append(date);
    },

    displayTodaysAvailability() {
        $('.main__dashboard-display').append('<h2>Rooms Available This Evening:<span class="total-rooms-available"></span></h2>')
       $
    }
}

export default domUpdates;