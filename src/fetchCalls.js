export const fetchTravelersData = () => {
    return fetch('http://localhost:3001/api/v1/travelers')
       .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
       .then(data => data.travelers) 
       .catch(error => handleError(error)); 
};


export const fetchTripsData = () => {
    return fetch('http://localhost:3001/api/v1/trips')
       .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
       .then(data => data.trips)
       .catch(error => handleError(error));
};

export const fetchDestinationData = () => {
    return fetch('http://localhost:3001/api/v1/destinations')
       .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
       .then(data => data.destinations)
       .catch(error => handleError(error));
};


const handleError = (error) => {
    console.error("An error occurred:", error);
}
