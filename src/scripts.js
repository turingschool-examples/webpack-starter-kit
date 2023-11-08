// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

const upcomingTripsSection = document.querySelector('.upcoming-trips-section');
const pendingTripsSection = document.querySelector('.pending-trips-section');
const pastTripsSection = document.querySelector('.past-trips-section');
const bookATripSection = document.querySelector('.book-a-trip-section');

const upcomingTripsButton = document.querySelector('.upcoming-trips-button');
const pendingTripsButton = document.querySelector('.pending-trips-button');
const pastTripsButton = document.querySelector('.past-trips-button');
const bookATripButton = document.querySelector('.book-a-trip-button')
  
window.addEventListener('load', () => {
  showUpcomingTrips();
})

upcomingTripsButton.addEventListener('click', () => {
  showUpcomingTrips()
})

pendingTripsButton.addEventListener('click', () => {
  showPendingTrips()
})

pastTripsButton.addEventListener('click', () => {
  showPastTrips()
})

bookATripButton.addEventListener('click', () => {
  showBookATripSection()
})

const showBookATripSection = () => {
  upcomingTripsSection.classList.add('hidden');
  pendingTripsSection.classList.add('hidden');
  pastTripsSection.classList.add("hidden");
  bookATripSection.classList.remove('hidden')
}

const showPastTrips = () => {
  upcomingTripsSection.classList.add('hidden');
  pendingTripsSection.classList.add('hidden');
  bookATripSection.classList.add("hidden");
  pastTripsSection.classList.remove('hidden');
}

const showPendingTrips = () => {
  upcomingTripsSection.classList.add('hidden');
  pastTripsSection.classList.add('hidden');
  bookATripSection.classList.add('hidden');
  pendingTripsSection.classList.remove('hidden');
}

const showUpcomingTrips = () => {
  pendingTripsSection.classList.add('hidden');
  pastTripsSection.classList.add('hidden');
  bookATripSection.classList.add('hidden');
  upcomingTripsSection.classList.remove('hidden');
}



