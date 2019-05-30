import $ from 'jquery'

const domUpdates = {
  hideAtStart() {
    $('#main__customer-section').hide()
    $('#main__orders-section').hide()
    $('#main__rooms-section').hide()
  },

  displayCustomerTab() {
    $('#main__orders-section').hide()
    $('#main__rooms-section').hide()
    $('#main__dashboard-section').hide()
  }
}

export default domUpdates;