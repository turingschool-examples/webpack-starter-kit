import Traveler from './Traveler';

class TravelerRepository {
	constructor(travelerData) {
	this.travelers = []
	}

	travelerDataLoad(travelersData) {
		this.travelers = travelersData.map((travelerObj) => { return new Traveler(travelerObj) });
	}

}

export default TravelerRepository;