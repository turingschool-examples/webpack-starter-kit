// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import fetch from 'cross-fetch';
import MainRepo from './mainRepo';
import domUpdates from './domUpdates';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/svg/001-credit-card.svg';
// import './images/svg/002-food.svg';
// import './images/svg/003-food-1.svg';
// import './images/svg/004-bedroom.svg';
import Customers from './customersRepo';
import RoomsRepo from './roomsRepo';

console.log('This is the JavaScript entry file - your code begins here.');

let dataFile1 = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users').then(function(response){
    return response.json()});
let dataFile2 = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms').then(function(response){
    return response.json()});
let dataFile3 = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings').then(function(response){ 
    return response.json()})
let dataFile4 = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices').then(function(response){ 
    return response.json()});
let allData = {'users':{}, 'rooms':{}, 'bookings':{}, 'roomServices':{}}

Promise.all([dataFile1, dataFile2, dataFile3, dataFile4])
    .then(function(values) {
        allData['users'] = values[0];
        allData['rooms'] = values[1];
        allData['bookings'] = values[2];
        allData['roomServices'] = values[3];
        return allData;
    })

let mainRepo = new MainRepo(allData);
let customers = new Customers(allData);
let bookings = new RoomsRepo(allData);


$(document).ready(() => {

    setTimeout(function() {
        $('.splash__page').fadeOut()
        domUpdates.displayTodaysDate(mainRepo.date);
        domUpdates.displayTodaysAvailability(mainRepo.findTotalRoomsAvailableToday(mainRepo.date));
        domUpdates.displayOutstandingBalances(mainRepo.findOutstandingBalance(mainRepo.date));
        domUpdates.displayPercentageAvailable(mainRepo.findPercentageOfRoomsAvailable(mainRepo.date));
        domUpdates.displayMostPopBookingDate(bookings.findMostPopBookingDate())
    }, 1500)


    $('#submit-guest-info').on('click', function(e) {
        e.preventDefault()
        domUpdates.displayCurrentCustomer(customers.addNewGuest($('#first-name-input').val(), $('#last-name-input').val()))
        customers.currentGuest = customers.newGuests[0]
        console.log(customers.currentGuest)

    })

    $('.aside__tabs li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('.aside__tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})