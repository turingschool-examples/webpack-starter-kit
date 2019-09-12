
import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates'


domUpdates.startOnMainTab();

$('.main__section--tabs a').on('click', function(event) {
let _this = this;
domUpdates.changeTabs(event, _this);
})