import $ from 'jquery'


let domUpdates = {

    displayTodaysDate(date) {
        $('h1').append(`Today\'s date is: ${date}`);
    },

    displayTodaysAvailability(number) {
        $('#aside__tabs-main').append('<h2>Rooms Available This Evening: <span class="total-rooms-available"></span></h2>')
        $('.total-rooms-available').text(`${number}`)
    },

    displayOutstandingBalances(balance) {
        $('#aside__tabs-main').append('<h2>Total Outstanding Balance: $<span class="total-outstanding-balance"></span></h2>')
        $('.total-outstanding-balance').text(`${balance}`)
    },

    displayPercentageAvailable(percent) {
        $('#aside__tabs-main').append('<div class="pie-percentage"><h4>Percentage Rooms Available: <span class="percentage-rooms-available"></span> %</h4><svg width="100" height="100" viewBox="0 0 32 32"><circle r="16" cx="16" cy="16" fill="black" stroke="white" stroke-width="32" stroke-dasharray="98.5 100" /></svg></div>')
        $('.percentage-rooms-available').text(percent)
    },

    displayCurrentCustomer() {
        $('#aside__tabs-guests').append(`<h1>${firstName} ${lastName}</h1>`)
    },

    displayMostPopBookingDate(date) {
        $('#aside__tabs-room-service').append('<h2>Most Popular Booking Date(s): <span class="most-pop-date"></span></h2>')
        $('.most-pop-date').text(date)
    }


}

export default domUpdates;