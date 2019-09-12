// This fucks with the DOM. ONLY THIS FILE FUCKS WITH THE DOM
import $ from 'jquery';
// Tab shit
export default {
  startOnMainTab() {
$('.section__display article').hide();
$('.section__display article:first').show();
$('.main__section--tabs li:first').addClass('tab-active');
},

  changeTabs(event, _this) {
  event.preventDefault();
  $('.section__display li').removeClass('tab-active');
  $(_this).parent().addClass('tab-active');
  $('.section__display article').hide();
  $($(_this).attr('href')).show();
  }
}