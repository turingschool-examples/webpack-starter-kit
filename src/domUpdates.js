
import $ from 'jquery';
import Hotel from './hotel.js';
const domUpdates = {
  startOnMainTab() {
$('.section__display article').hide();
$('.section__display article:first').show();
$('.main__section--tabs li:first').addClass('tab-active');
},

  changeTabs(event, _this) {
  event.preventDefault();
  $('.section__display li').removeClass('tab-active a');
  $(_this).parent().addClass('tab-active');
  $('.section__display article').hide();
  $($(_this).attr('href')).show();
  },

  getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
  
    today = `${yyyy}/${mm}/${dd}`;
    $('.span__date').html(today);
  },

  displayDate() {
    $('.main__today--date').html($('.span__date').val());
  },

  displayRoomsAvailable(obj) {
    $('.main__available--rooms').html(obj.roomsAvailable('2019/09/13'));
  },

  displayRoomsOccupied(obj) {
    $('.main__occupied--percent').text(` ${obj.percentOccupied('2019/09/13')}%`);
  },

  displaySearchResults(matches) {
    $('.search__list').empty();
    if(matches.length > 0 && matches.length < 100) {
      let searchHtml = matches.slice(0, 10).map(match => `
      <article  class="search__customer">
      <h4>${match.name}</h4>
      </article>
      `).join('');
      $('.search__list').append(searchHtml);
    }
  },
}

export default domUpdates;