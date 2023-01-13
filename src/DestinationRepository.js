import Destination from './Destination';

class DestinationRepository {
	constructor(destinationData) {
		this.destinations = destinationData.map((destinationObj) => { return new Destination(destinationObj) });
	}

	findById(destinationId) {
		return this.destinations.find((destination) => {
			return destination.id === destinationId;
		})
	}
}

export default DestinationRepository;