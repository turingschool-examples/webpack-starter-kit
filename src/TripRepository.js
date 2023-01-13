import Trip from './Trip';

class TripRepository {
	constructor(tripData) {
		this.trips = tripData.map((tripObj) => { return new Trip(tripObj) });
	}



}



export default TripRepository;