import { getUserFirstName, showUserFirstName } from "./scripts";

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