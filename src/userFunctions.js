import { allTripsData,  } from "./domUpdates"


// export const locateUsersTrips = (loggedInUser, trips) => {
//     if(loggedInUser === trips.userId){
//         return trips
//     }
// }

export const pastTrips = (travelerId) => {
    const trips = allTripsData.filter(user => user.userID === travelerId);
travelerPastTrips(trips)
}