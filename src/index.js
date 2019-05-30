import $ from 'jquery';
import './css/base.scss';
import Customer from './customer';
import domUpdates from './domupdates'

$(document).ready(function() {
  domUpdates.hideAtStart()
})

$('#main__customer-section').on('click', function() {
  domUpdates.displayCustomerTab()
})



