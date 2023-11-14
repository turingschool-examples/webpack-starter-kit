
const upcomingTripsSection = document.querySelector(".upcoming-trips-section");
const pendingTripsSection = document.querySelector(".pending-trips-section");
const pastTripsSection = document.querySelector(".past-trips-section");
const bookATripSection = document.querySelector(".book-a-trip-section");
const annualTotalSection = document.querySelector(".annual-total-section");
const pageContent = document.querySelector(".page-content");
const loginContainer = document.querySelector(".login-container");
const upcomingTrips = document.querySelector('.upcoming-trips');
const destination = document.querySelector('.destination');
const welcomeName = document.querySelector(".welcome-name");
const bookingError = document.querySelector('.booking-error');
const annualTotal = document.querySelector(".annual-cost");

// const pastTrips = document.querySelector('.past-trips')

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


export const showUserFirstName = (name) => {
  welcomeName.innerHTML += `Welcome ${name}`;
};

export const renderUpcomingTrips = (theUsersTrips) => {
  console.log(theUsersTrips)
  if (typeof theUsersTrips !== "string") {
    theUsersTrips.forEach(trip => {
      upcomingTrips.remove()
      upcomingTrips.innerHTML = ''
      upcomingTripsSection.innerHTML += `
    <div tabindex="1" class="trip-wrapper">
      <p tabindex="1" class="location"> ${trip.destination}</p>
      <image tabindex="1" class="trip-images" src="${trip.image}" alt="${trip.alt}">
      <p tabindex="1" class="flight-cost"> Flight Cost ${trip.estimatedFlightCostPerPerson}</p>
      <p tabindex="1" class="hotel"> Hotel ${trip.estimatedLodgingCostPerDay}<span class="per-night">per night</span></p>
    </div>
    `;
    }) 
  } 
}


export const renderPastTrips = (theUsersTrips) => {

  theUsersTrips.forEach(trip => {
    pastTripsSection.innerHTML = ''
    pastTripsSection.innerHTML += `
    <div tabindex="0" class= "trip-wrapper">
      <p class="location"> Location  ${trip.destination}</p>
      <image class="trip-images" src="${trip.image}" alt="${trip.alt}">
      <p class="flight-cost"> Flight Cost ${trip.estimatedFlightCostPerPerson.toLocaleString()}</p>
      <p class="hotel"> Hotel Daily ${trip.estimatedLodgingCostPerDay}</p>
    </div>
    `;
  })
}

export const renderCost = (cost) => {
  console.log("COST", cost)
  if (typeof cost === 'string') {
    annualTotal.innerHTML += `
    <p>${cost}</p>
    `
  } else {
    annualTotalSection.innerHTML = '';
    annualTotalSection.innerHTML += `
  <p tabindex="0">Flight - $${cost.totalFlightPrice.toLocaleString()}</p>
  <p tabindex="1" >Hotel - $${cost.totalLodgingPrice.toLocaleString()}</p>
  <p tabindex="2" >Subtotal - $${cost.subTotal.toLocaleString()}</p>
  <p tabindex="3" >Agent Fee - $${cost.agentFee.toLocaleString()}</p>
  <p tabindex="4" class="total">Total $${cost.total.toLocaleString()}</p>
  `;
  } 
}

export const createDropDown = (places) => {
  places.forEach((place) => {
    const option = document.createElement("option");
    option.textContent = place;
    destination.appendChild(option);
  });
};

export const showErrorMessage = (trip) => {
  if (typeof trip === 'string') {
    bookingError.innerText = `${trip}`;
  }
}

export const clearErrorMessage = (tripCost) => {
  if (bookingError.innerText ="You're booking is complete. It should appear in Upcoming Trips!") {
      bookingError.innerHTML += `
      <section tabindex="0" class="trip-cost">
        <h3 tabindex="1" >Trip Cost</h3>
        <ptabindex="2" > Flight - $${tripCost.totalFlightPrice.toLocaleString()}</p>
        <ptabindex="3" >Lodging - $${tripCost.totalLodgingPrice.toLocaleString()}</p>
        <p tabindex="4" >Subtotal - $${tripCost.subTotal.toLocaleString()}</p>
        <p tabindex="5" >Agent Fee - $${tripCost.agentFee.toLocaleString()}</p>
        <p tabindex="6" class="total">Total - $${tripCost.total.toLocaleString()}</p>
      </section>
      `;
  }
}