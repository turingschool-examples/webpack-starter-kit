import { getUserFirstName, showUserFirstName } from "./scripts";

export const fetchTavelers = () => {
  fetch("http://localhost:3001/api/v1/travelers")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      } 
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
  };

export const fetchDestinations = () => {
  fetch("http://localhost:3001/api/v1/destinations")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
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