import $ from 'jquery';
import './css/base.scss';
import Customer from './customer';
import domUpdates from './domupdates'
import './images/breakfast.svg'
import './images/specialist-user.svg'
import './images/open-book.svg'

$(document).ready(function() {
	
  $('.nav-list__tab').click(function() {
    var tab_id = $(this).attr('data-tab');

    $('.nav-list__tab').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })

})



