import { getUserFirstName } from "./scripts";
import { showUserFirstName } from "./domUpdates";
import { newTrip } from "./scripts";

export const fetchTrips = () => {
  return fetch("http://localhost:3001/api/v1/trips")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.trips);
      return data.trips;
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
  };

export const fetchDestinations = () => {
  return fetch("http://localhost:3001/api/v1/destinations")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.destinations);
      return data.destinations;
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
  }; 

export const fetchLoginInfo = (user) => {
  let endpoint = user.endpoint;
   fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let name = getUserFirstName(data)
      console.log(name)
      showUserFirstName(name)
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
};

// export const postTripBooking = (newTrip) => {
//   return fetch("http://localhost:3001/api/v1/trips", {
//     method: "POST",
//     body: JSON.stringify(newTrip),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((json) => {
//       // Do something with the JSON response
//       console.log("Response:", json);
//     })
//     .catch((error) => {
//       // Handle errors here
//       console.error("Error:", error);
//     });
// };

// export const postTripBooking = (newTrip) => {
//   fetch("http://localhost:3001/api/v1/trips", {
//     method: "POST",
//     body: JSON.stringify(newTrip),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => {
//       if (!response.ok && response.status !== 422) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("New activity data:", data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// };

export const postTripBooking = (newTrip) => {
  // Step 1: Post Data to Server
  fetch("http://localhost:3001/api/v1/trips", {
    method: "POST",
    body: JSON.stringify(newTrip),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok && response.status !== 422) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("New activity data:", data);

      // Step 2: Fetch Updated Data
      return fetch("http://localhost:3001/api/v1/trips"); // Assuming this is the endpoint to retrieve data
    })
    .then((response) => response.json())
    .then((updatedData) => {
      // Step 3: Update Client-Side UI with Updated Data
      console.log("Updated data:", updatedData);
      // Update your UI here
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
