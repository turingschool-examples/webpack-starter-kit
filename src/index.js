import $ from 'jquery';
import './css/base.scss';
import domUpdates from './domUpdates.js';
import fetch from 'cross-fetch';

let Data;
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
  .then(function (response) {
    return response.json();
  })
  .then(function (dataset) {
    Data = dataset.data;
  });

$( document ).ready(function() {
  






});
