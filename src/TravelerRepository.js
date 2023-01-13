import Traveler from './Traveler';

class TravelerRepository {
	constructor(travelerData) {
		this.travelers = travelerData.map((travelerObj) => { return new Traveler(travelerObj) });
	}

}

export default TravelerRepository;