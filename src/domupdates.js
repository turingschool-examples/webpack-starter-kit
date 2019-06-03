import $ from 'jquery'
import Room from './rooms';
import Booking from './bookings';

const domUpdates = {
  displayCurrentDate(date) {
    $('#tab-1__date').text(date)
  },

  displayTodaysAvailableRooms(date, data, room) {
    let numRooms = room.availableByDate(date, data).length
    $('#tab-1__insert-data').text(numRooms)
  },

  totalDailyDebts(date, dashboard) {
    $('#tab-1__debts').text(dashboard.totalDebtsByDay(date).toFixed(2))
  },

  percentageAvailableRooms(date, booking) {
    $('#tab-1__percentage').text(booking.percentageByDate(date))
  },

  searchForCustomer(customer) {
    let name = $('#tab-2__customer-search').val()
    $('.customer-name').text(customer.findByName(name).name)
  },

  addNewCustomer(data) {
    let name = $('#tab-2__customer-search').val()
    data.addCustomer(name)
  },

  showDailyOrders(order, date) {
    let dailyOrders = order.findByDate(date)
    $('#daily-order__no-order').remove()
    $('.daily-order__order-item').remove()
    if (dailyOrders.length === 0) {
      $('#tab-4__daily-orders').append('<p id="daily-order__no-order">No Orders Today</p>')
    } else {
      dailyOrders.forEach(order => {
        $('#tab-4__daily-orders').append(`<p class="daily-order__order-item">${order.food}</p>`)
      })
    }
  },

  customerTotalSpent(id, order) {
    $('#customer-order__total').text(order.customerTotalSpent(id))
  },

  customerDailySpent(date, order, id) {
    $('#customer-order__daily').text(order.customerDailySpent(id, date))
  },

  breakdownByDate(id, order) {
    let orders = order.findById(id)
    $('.order-tab__no-data').remove()
    $('.order-tab__breakdown-list-item').remove()
    if (orders.length === 0) {
      $('#order-tab__yes-customer').append('<p class="order-tab__no-data">No Valid Data Exists</p>')
    } else {
      orders.forEach(order => {
        $('#order-tab__yes-customer').append(`
        <p class="order-tab__breakdown-list-item">${order.date}: $${order.totalCost} for ${order.food}
        `)
      })
    }
  },

  mostPopularBookingDate(booking) {
    $('#booking-tab__popular-date').text(booking.mostPopularDate())
  },

  allCustomerBookings(id, booking) {
    let allBookings = booking.findById(id)
    $('.all-bookings__list-item').remove()
    allBookings.forEach(booking => {
      $('#booking-tab__all-bookings').append(`
        <p class="all-bookings__list-item">Date: ${booking.date} Room Number: ${booking.roomNumber}
      `)
    })
  },

  availableTypeByDate(date, type, data, room) {
    $('#booking-table').append(`
    <tr id="room-table__header">
    <th>Room Type</th>
    <th># of Beds</th>
    <th>Bed Size</th>
    <th>Bidet Available</th>
    </tr>
    `)
    room.availableAlternate(date, type, data).forEach(roomObj => {
      $('#booking-table').append(`
        <tr data_id="${roomObj.roomNumber}">
          <td>${roomObj.roomType}</td>
          <td>${roomObj.numBeds}</td>
          <td>${roomObj.bedSize}</td>
          <td>${roomObj.bidet}</td>
          <td><button class="book-it-btn">Book Now!</button></td>
        </tr>
      `)
    }) 
  },
}

export default domUpdates;