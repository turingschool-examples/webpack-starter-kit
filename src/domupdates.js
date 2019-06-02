import $ from 'jquery'
import Room from './rooms';

const domUpdates = {
  displayCurrentDate(date) {
    $('#tab-1__date').text(date)
  },

  displayTodaysAvailableRooms(date, data, room) {
    let numRooms = room.availableByDate(date, data).length
    $('#tab-1__insert-data').text(numRooms)
  },

  totalDailyDebts(date, dashboard) {
    $('#tab-1__debts').text(dashboard.totalDebtsByDay(date))
  },

  searchForCustomer(customer) {
    let name = $('#tab-2__customer-search').val()
    $('#header__customer-name').text(customer.findByName(name).name)
  }
}

export default domUpdates;