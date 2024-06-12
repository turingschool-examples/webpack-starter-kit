export const calculateTripCost = (destinationValue, guestCount, durationDays, destinationData) => {

    const costPerDestination = destinationData.find(location => location.destination === destinationValue);
    if (!costPerDestination) {
        throw new Error(`Destination "${destinationValue}" not found.`);
    }

    if (durationDays > 0) {
        
        const lodgingCost = costPerDestination.estimatedLodgingCostPerDay * durationDays;
        const flightCost = (costPerDestination.estimatedFlightCostPerPerson * guestCount); 
        const totalCost = (lodgingCost + flightCost * 1.1);
        return totalCost.toFixed(2)
    } else {
        
        const otherTotal = (costPerDestination.estimatedFlightCostPerPerson * guestCount) * 1.1;
        return otherTotal.toFixed(2)
    }
}

export const calculateTotalTripCost = (tripsData, destinationsData, userId) => {
    const threeYearsAgo = new Date();
    threeYearsAgo.setFullYear(threeYearsAgo.getFullYear() - 3);

    const recentTrips = tripsData.filter(trip => {
        const tripDate = new Date(`${trip.date.split('/')[0]}/${trip.date.split('/')[1]}/${trip.date.split('/')[2]}`);
        return tripDate >= threeYearsAgo && trip.userID === userId && trip.status === 'approved';
    });

    const totalCost = recentTrips.reduce((acc, trip) => {
        const matchingDestination = destinationsData.find(destination => destination.id === trip.destinationID);
        if (matchingDestination) {
            const flightCosts = (matchingDestination.estimatedFlightCostPerPerson * trip.travelers) 
            const  lodgingCosts = (matchingDestination.estimatedLodgingCostPerDay * trip.duration) ;
            const totalPlusFee = (flightCosts + lodgingCosts) * 1.1
            return acc + totalPlusFee;
        }
        return acc;
    }, 0);

    return totalCost.toFixed(2);
}
