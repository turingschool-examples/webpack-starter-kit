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
import "./images/001-credit-card.svg";
import "./images/003-food-1.svg";
import "./images/004-bedroom.svg";
import Customer from './customer';
import RoomsRepo from './roomsRepo';


let dataFile1 = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users').then(function(response){
    return response.json()});
let dataFile2 = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms').then(function(response){
    return response.json()});
let dataFile3 = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings').then(function(response){ 
    return response.json()})
let dataFile4 = fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices').then(function(response){ 
    return response.json()});
let allData = {'users':[], 'rooms':[], 'bookings':[], 'roomServices':[]}

Promise.all([dataFile1, dataFile2, dataFile3, dataFile4])
    .then(function(values) {
        allData['users'] = values[0];
        allData['rooms'] = values[1];
        allData['bookings'] = values[2];
        allData['roomServices'] = values[3];
        allData['users'].users.map(user => {
            user.clicked = false;
        })
        return allData;
    })

let mainRepo = new MainRepo(allData);
let customer = new Customer(allData);
let bookings = new RoomsRepo(allData);
let currentGuest;


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
        domUpdates.displayCurrentCustomer(customer.addNewGuest($('#first-name-input').val(), $('#last-name-input').val()))
        currentGuest = customer.newGuests[0]
        // console.log(currentGuest)
    })
    
    $('.aside__tabs li').click(function(){
		let tab_id = $(this).attr('data-tab');

		$('.aside__tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
    })

    $('.display-guest-info').on('click', function() {
        const guest = customer.findGuestByName($('#search-guests-input').val())
        const clickChange = allData.users.users.map(user => {
            if(user.id === guest[0].id) {
                user.clicked = true;
            }
            return user;
        })

        allData.users.users = clickChange;
        updateTabs();
    })
    
    function searchGuests(e) {
        e.preventDefault();
        if($('#search-guests-input').val() !== '') {
             domUpdates.findCustomers(customer)
        currentGuest = customer.findGuestByName($('#search-guests-input').val())
        updateTabs(currentGuest)
        }
    }
  
    function updateTabs() {
        const verifyClick = allData.users.users.find(user => {
            if(user.clicked) {
                domUpdates.displayRoomServiceBreakDown(customer.findOrderBreakDown(user))
                domUpdates.displayTotalOrdersByDate(customer.findRoomServiceTotalByDate('06/02/2020', user))
                domUpdates.displayTotalOrders(customer.findAllTimeOrderTotal(user))
                domUpdates.displaySummaryOfBookings(customer.findBookingsSummary(user))
            }
        })
        return verifyClick;
    }

    $('#residential-suite-option').on('click', function() {
        domUpdates.displayRoomsByType(bookings.filterRoomType('residential suite'))
    })

    $('#single-option').on('click', function() {
        domUpdates.displayRoomsByType(bookings.filterRoomType('single room'))
    })

    $('#junior-option').on('click', function() {
        domUpdates.displayRoomsByType(bookings.filterRoomType('junior suite'))
    })

    $('#suite-option').on('click', function() {
        domUpdates.displayRoomsByType(bookings.filterRoomType('suite'))
    })

  

    $('#search-guests-input').on('input', searchGuests)


})