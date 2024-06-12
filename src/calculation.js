export const calculateTripCost = (destinationValue, guestCount, durationDays, destinationData) => {

    const costPerDestination = destinationData.find(location => location.destination === destinationValue);
    if (!costPerDestination) {
        throw new Error(`Destination "${destinationValue}" not found.`);
    }

    if (durationDays > 0) {
        // Calculate cost based on both estimatedFlightCostPerPerson and estimatedLodgingCostPerDay for the given destination
        const lodgingCost = costPerDestination.estimatedLodgingCostPerDay * durationDays;
        const flightCost = (costPerDestination.estimatedFlightCostPerPerson * guestCount) ; // Adjusting by 110%
        const totalCost = (lodgingCost + flightCost * 1.1);
        return totalCost.toFixed(2)
    } else {
        // Calculate cost for zero duration days based on estimatedFlightCostPerPerson
        const otherTotal = (costPerDestination.estimatedFlightCostPerPerson * guestCount) * 1.1;
        return otherTotal.toFixed(2)
    }
}