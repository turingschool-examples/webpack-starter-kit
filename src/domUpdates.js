import $ from 'jquery'

let domUpdates = {

  displayTodaysDate(date) {
    $('h1').append(`Today's date is: ${date}`).hide().fadeIn(1000);
  },

  displayTodaysAvailability(number) {
    $('.main-styling').append('<h2>Rooms Available This Evening: <span class="total-rooms-available"></span></h2>')
    $('.total-rooms-available').text(`${number}`).hide().fadeIn(1000)
  },

  displayOutstandingBalances(balance) {
    $('.main-styling').append('<h2>Total Outstanding Balance: $<span class="total-outstanding-balance"></span></h2>')
    $('.total-outstanding-balance').text(`${balance}`).hide().fadeIn(1000)
  },

  displayPercentageAvailable(percent) {
    $('.main-styling').append('<div class="pie-percentage"><h4>Percentage Rooms Available: <span class="percentage-rooms-available"></span> %</h4><svg width="100" height="100" viewBox="0 0 32 32"><circle r="16" cx="16" cy="16" fill="black" stroke="white" stroke-width="32" stroke-dasharray="98.5 100" /></svg></div>')
    $('.percentage-rooms-available').text(percent)
  },

  displayNewCustomer() {
    $('.display-new-guest-info').append('<h3><span id="first-name-display"></span> <span id="last-name-display"></span></h3>')
    $('#first-name-display').text($('#first-name-input').val())
    $('#last-name-display').text($('#last-name-input').val())
  },

  displayMostPopBookingDate(date) {
    $('.all-rooms-display').append('<h2>Most Popular Booking Date(s): <span class="most-pop-date"></span></h2>')
    $('.most-pop-date').text(date)
  },
    
  displayMostAvailableDate(date) {
    $('.all-rooms-display').append('<h2>Date With Most Availability: <span class="most-available-date"></span></h2>')
    $('.most-available-date').text(date)
  },

  findCustomers(customer) {
    const search = $('#search-guests-input').val();
    customer.findGuestByName(search).forEach(guest => {
      $('.display-guest-info').append(`<h3>Name: ${guest.name}</h3>`)
    })
  },

  selectCustomer(name) {
    $('.current-guest-name-heading').append(`<h1>${name[0].name}</h1>`)
  },

  displayRoomServiceBreakDown(customer) {
    customer.forEach(item => {
      $('.customer-orders').append(` Order date: ${item.date}, Total cost: ${item.totalCost} `)
    })
  },

  displayTotalOrdersByDate(cost) {
    $('.customer-order').append(` Total for date: ${cost} `)
  },

  displayTotalOrders(cost) {
    $('.customer-order').append(` Total for all orders: ${cost} `)
  },

  displaySummaryOfBookings(customer) {
      $('.customer-bookings').html('')
    customer.forEach(item => {
      $('.customer-bookings').append(` Summary of all bookings for: Date: ${item.date},  Room Number: ${item.roomNumber}`)
    })
  },

  displayRoomsByType(rooms) {
    $('.room-types-display').html('')
    $('.all-rooms-display').html('');
    rooms.forEach(room => {
      $('.room-types-display').append(` 
            <tr>
            <th>Room Type</th>
            <th>Bidet Avail</th>
            <th>Bed Size</th>
            <th>Num of Beds</th>
            <th>Cost</th>
            <th>Book Room</th>
            </tr>
            <tr>
            <td>${room.roomType}</td>
            <td>${room.bidet}</td>
            <td>${room.bedSize}</td>
            <td>${room.numBeds}</td>
            <td>${room.costPerNight}</td>
            <td><button class="btn-book-room" id="${room.number}">Select</button>
            </tr> `)
    })
  },

  displayErrorNoCustomer() {
    $('.display-guest-info').append(`<h3>No results match your criteria. Please try another search or add a new guest.`)
  },

  displayErrorNoRooms() {
    $('.customer-bookings').append(`<h3>No results match your criteria. Please try another search or make a new reservation.`)
  },

  displayErrorNoOrder()  {
    $('.customer-orders').append(`<h3>No results match your criteria. Please try another search or place an new order.`)
  },

  displayTodaysOrders(order) {
    order.forEach(item => {
      $('.all-orders').append(`<h2>Orders For Today</h2> Food item: ${item.food}, Total: ${item.totalCost}, Date: ${item.date} `)
    })
  },

  displayOrdersForSpecificDate(order) {
    order.forEach(item => {
      $('.all-orders').append(` Food item: ${item.food}, Total: ${item.date}, Date: ${item.date} `)
    })
  }, 

  displayNewBooking(customer, room, date) {
    $('.room-types-display').html('')
    $('.all-rooms-display').html('')
    $('.room-types-display').append(`<h3>Success! ${customer.name} is booked in room number ${room} on ${date}.`)
  }

}

export default domUpdates;