
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
    return { approvedTrips, pendingTrips }
}

const getUserExpenditures = (userID, trips, destinations, targetYear) => {
    const userTrips = getUserTrips(userID, trips);
    if (typeof userTrips === 'string') {
        return userTrips;
    }
    const { approvedTrips } = userTrips
    if (!approvedTrips.length) {
        return 'All your trips are pending approval.';
    }

    let totalExpenditures = 0
    approvedTrips.forEach(trip => {
        const tripYear = new Date(trip.date).getFullYear()
        if (tripYear === targetYear) {
            const destination = destinations.destinations.find(place => place.id === trip.destinationID);
            if (destination) {
                const tripCost = (destination.estimatedLodgingCostPerDay * trip.duration +
                    destination.estimatedFlightCostPerPerson) * trip.travelers;
                totalExpenditures += tripCost
            }
        }
    })
    totalExpenditures += totalExpenditures * 0.1
    return totalExpenditures
}

export { getUserTrips, getUserExpenditures }


