import { trips, travelers, traveler, destinations } from '/js/mockData.js'
import { getUserTrips, getUserExpenditures } from '../js'
import { expect } from 'chai';

before(function () {
  trips, travelers, traveler, destinations
})

describe('Get User Trips', function () {
  it('should return all relevant trips based on user ID', () => {
    const { approvedTrips } = getUserTrips(4, trips)
    expect(approvedTrips).to.deep.equal([
      { date: "2022/09/16", destinationID: 2, duration: 8, id: 1, status: "approved", suggestedActivities: [], travelers: 1, userID: 4 }
    ])
  })

  it('should handle an invalid userID', () => {
    const noTrips = getUserTrips('!', trips)
    expect(noTrips).to.equal('You must enter a valid ID, please.')
  })

  it('should handle no ID', () => {
    const badID = getUserTrips('', trips)
    expect(badID).to.equal('You must enter a valid ID, please.')
  })

  it('should handle a return without any trips', () => {
    const noTrips = getUserTrips(10, trips)
    expect(noTrips).to.equal('You have no trips on the itinerary.')
  })

  it('should handle a return of just one trip', () => {
    const { approvedTrips } = getUserTrips(30, trips);
    expect(approvedTrips).to.deep.equal([{ date: "2023/10/12", destinationID: 27, duration: 4, id: 6, status: "approved", suggestedActivities: ["museum", "theater"], travelers: 2, userID: 30 }])
  })

  it('should handle pending trips', () => {
    const { pendingTrips } = getUserTrips(4, trips)
    const pendingTrip = [
      { date: "2023/08/05", destinationID: 8, duration: 6, id: 5, status: "pending", suggestedActivities: ["diving"], travelers: 1, userID: 4 }
    ]
    expect(pendingTrips).to.deep.equal(pendingTrip)
  })

  describe('Get User Expenditures', function () {
    it('should return total money spent on all approved trips in the target year, plus 10%, based on UserID', () => {
      const totalBill = getUserExpenditures(4, trips, destinations, 2023)
      expect(totalBill).to.equal(0)
    });

    it('should handle user with only pending trips', () => {
      const noTripForYou = getUserExpenditures(2, trips, destinations, 2023)
      expect(noTripForYou).to.equal('All your trips are pending approval.')
    });

    it('should handle trips with undefined status', () => {
      const undefinedStatusTrip = {
        date: "2023/01/20",
        destinationID: 22,
        duration: 5,
        id: 2,
        status: undefined,
        suggestedActivities: ["skiing"],
        travelers: 2,
        userID: 2
      }
      const totalBill = getUserExpenditures(2, { trips: [undefinedStatusTrip] }, destinations, 2023)
      expect(totalBill).to.equal('All your trips are pending approval.')
    })

    it('should calculate expenditures consistently for multiple users', () => {
      const user1Expenditures = getUserExpenditures(4, trips, destinations, 2023)
      const user2Expenditures = getUserExpenditures(2, trips, destinations, 2023)
      expect(user1Expenditures).to.equal(0)
      expect(user2Expenditures).to.equal('All your trips are pending approval.')
    });

    it('should return total money spent on all approved trips in the target year, plus 10%, for a different user', () => {
      const tripsForTest = {
        trips: [
          { date: "2022/09/16", destinationID: 2, duration: 8, id: 1, status: "approved", suggestedActivities: [], travelers: 1, userID: 4 },
          { date: "2023/01/20", destinationID: 22, duration: 5, id: 2, status: "pending", suggestedActivities: ["skiing"], travelers: 2, userID: 4 },
          { date: "2023/03/15", destinationID: 14, duration: 10, id: 3, status: "approved", suggestedActivities: ["hiking", "sightseeing"], travelers: 4, userID: 4 },
          { date: "2023/06/25", destinationID: 9, duration: 7, id: 4, status: "approved", suggestedActivities: ["beach"], travelers: 3, userID: 4 },
          { date: "2023/08/05", destinationID: 8, duration: 6, id: 5, status: "pending", suggestedActivities: ["diving"], travelers: 1, userID: 4 }
        ]
      }
      const totalBill = getUserExpenditures(4, tripsForTest, destinations, 2023)
      expect(totalBill).to.equal(5445)
    })

    it('should handle user with no trips in the target year', () => {
      const noTripsThisYear = getUserExpenditures(4, trips, destinations, 2021)
      expect(noTripsThisYear).to.equal(0)
    })
  })
})


