
const getUserTrips = (userID, trips) => {
    if (typeof userID !== 'number') {
        return 'You must enter a valid ID, please.'
    }
    const userTrips = trips.trips.filter(trip => trip.userID === userID)
    if (!userTrips.length) {
        return 'You have no trips on the itinerary.'
    }

    const approvedTrips = userTrips.filter(trip => trip.status === 'approved')
    const pendingTrips = userTrips.filter(trip => trip.status === 'pending')

    if (!approvedTrips.length && pendingTrips.length) {
        return 'All your trips are pending approval.'
    }

    const tripsByYear = approvedTrips.reduce((obj, trip) => {
        const tripYear = new Date(trip.date).getFullYear()
        if (!obj[tripYear]) {
            obj[tripYear] = []
        }
        obj[tripYear].push(trip)
        return obj
    }, {})
    return { tripsByYear, pendingTrips }
}

const getUserExpenditures = (tripsByYear, destinations) => {
    const expendituresByYear = {};

    for (const [year, trips] of Object.entries(tripsByYear)) {
        expendituresByYear[year] = trips.reduce((total, trip) => {
            const destination = destinations.destinations.find(place => place.id === trip.destinationID)
            if (destination) {
                const tripCost = (destination.estimatedLodgingCostPerDay * trip.duration +
                    destination.estimatedFlightCostPerPerson) * trip.travelers
                const totalTripCost = tripCost + tripCost * 0.1
                total += totalTripCost
            }
            return total
        }, 0)
    }

    return expendituresByYear;
}

function calculateEstimate(trip, destination) {
    const tripCost = (destination.estimatedLodgingCostPerDay * trip.duration +
        destination.estimatedFlightCostPerPerson) * trip.travelers;
    return tripCost * 1.1
}

const getDestinationName = (id, destinations) => {
    if (!id) {
        return 'No destination found';
    }
    const destination = destinations.destinations.find(destination => id === destination.id);
    return destination ? destination.destination : 'Unknown destination'
}

export { getUserTrips, getUserExpenditures, getDestinationName, calculateEstimate }


