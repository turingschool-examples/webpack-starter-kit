function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No data found or data format incorrect`);
            }
            console.log(response)
            return response.json()
        })
        .then(data => {
            return data;
        })
        .catch(error => console.error(`Error fetching data`, error));
}

const basePostRequest = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
}
function postTrip(url, { userId, destinationId, travelers, date, duration, status }) {
    const postTripRequest = {
        ...basePostRequest,
        body: JSON.stringify({
            id: Date.now(),
            userID: userId,
            destinationID: parseInt(destinationId),
            travelers: travelers,
            date: date,
            duration: duration,
            status: 'pending',
            suggestedActivities: []
        })
    }

    return fetch(url, postTripRequest)
        .then(response => {
            if (!response.ok) {
                throw new Error('There was a problem posting your data.')
            }
            return response.json()
        })
        .then(data => {
            console.log('Posted Trip:', data)
            return fetchData('http://localhost:3001/api/v1/trips/')

        })
        .catch(error => tripDetails.innerText = error.message)

}

function postDestination(url, { destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, image, alt }) {
    const destinationPostRequest = {
        ...basePostRequest,
        body: JSON.stringify({
            destination: destination,
            estimatedLodgingCostPerDay: estimatedLodgingCostPerDay,
            estimatedFlightCostPerPerson: estimatedFlightCostPerPerson,
            image: image,
            alt: alt
        })
    }

    .then(response => {
        if(!response.ok) {
            throw new Error('There was a problem posting your data.')
        }
        return response.json()
    })
    .then(data => {
        console.log('Posted Destination:', data)
        return fetchData('http://localhost:3001/api/v1/trips/')
    })
    .catch(error => console.error('Error posting destination:', error))
}

export { fetchData, postTrip, postDestination }