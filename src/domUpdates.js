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
        $('#aside__tabs-main').append('<h2>Total Outstanding Balance: <span class="total-outstanding-balance"></span></h2>')
        $('.total-outstanding-balance').text(`${balance}`)
    }
}

export default domUpdates;