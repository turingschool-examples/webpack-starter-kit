import $ from 'jquery'


let domUpdates = {

    displayTodaysDate(date) {
        $('h1').append(date);
    }

    // displayTodaysAvailability(total) {
    //     $('.main__dashboard-display').append('<h2>Rooms Available This Evening:<span class="total-rooms-available"></span></h2>')
    //     $('.total-rooms-available').text(${total})
    // }
}

export default domUpdates;