
const upcomingTripsSection = document.querySelector(".upcoming-trips-section");
const pendingTripsSection = document.querySelector(".pending-trips-section");
const pastTripsSection = document.querySelector(".past-trips-section");
const bookATripSection = document.querySelector(".book-a-trip-section");
const annualTotalSection = document.querySelector(".annual-total-section");
 const pageContent = document.querySelector(".page-content");
const loginContainer = document.querySelector(".login-container");
const upcomingTrips = document.querySelector('.upcoming-trips')

export const signInUser = () => {
  pageContent.classList.remove("hidden");
    loginContainer.classList.add("hidden"); 
};

export const showAnnualCostSection = () => {
  upcomingTripsSection.classList.add("hidden");
  pendingTripsSection.classList.add("hidden");
  pastTripsSection.classList.add("hidden");
  bookATripSection.classList.add("hidden");
  annualTotalSection.classList.remove("hidden");
};

export const showBookATripSection = () => {
  upcomingTripsSection.classList.add("hidden");
  pendingTripsSection.classList.add("hidden");
  pastTripsSection.classList.add("hidden");
  annualTotalSection.classList.add("hidden");
  bookATripSection.classList.remove("hidden");
};

export const showPastTrips = () => {
  upcomingTripsSection.classList.add("hidden");
  pendingTripsSection.classList.add("hidden");
  bookATripSection.classList.add("hidden");
  annualTotalSection.classList.add("hidden");
  pastTripsSection.classList.remove("hidden");
};

export const showPendingTrips = () => {
  upcomingTripsSection.classList.add("hidden");
  pastTripsSection.classList.add("hidden");
  bookATripSection.classList.add("hidden");
  annualTotalSection.classList.add("hidden");
  pendingTripsSection.classList.remove("hidden");
};

export const showUpcomingTrips = () => {
  pendingTripsSection.classList.add("hidden");
  pastTripsSection.classList.add("hidden");
  bookATripSection.classList.add("hidden");
  annualTotalSection.classList.add("hidden");
  upcomingTripsSection.classList.remove("hidden");
};

export const renderUpcomingTrips = (theUsersTrips) => {
  console.log(theUsersTrips)
  upcomingTripsSection.innerHTML += `
  <p>${theUsersTrips}</p>
  `
}