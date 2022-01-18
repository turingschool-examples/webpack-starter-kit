const fetchData = (api) =>
  fetch(`http://localhost:3001/api/v1/${api}`)
    .then(response => response.json())

const customersData = () => fetchData('customers')

const userData = (id) => {
  return fetchData(`customers/${id}`);
}

const roomsData = () =>  fetchData('rooms')

const bookingsData = () => fetchData('bookings')

const postBooking = (data) => {

return fetch(`http://localhost:3001/api/v1/bookings`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => {
    return errorHandling(response);
  })
}

const errorHandling = (response) => {
  if(!response.ok){
    throw "response"
  }
  return response.json()
}


export {customersData, userData, roomsData, bookingsData, postBooking};
