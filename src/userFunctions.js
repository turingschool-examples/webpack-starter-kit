import { allTripsData,  } from "./domUpdates"


export const locateUsersTrips = (loggedInUser, trips) => {
    if(loggedInUser === trips.userId){
        return trips
    }
}

export const pastTrips = () => {

}