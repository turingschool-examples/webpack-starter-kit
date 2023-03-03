const fetchAPI = (url) => {
  return fetch(`http://localhost:3001/api/v1/${url}`).then(
    response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('No Such Path');
      }
  });
}

const fetchAllData = () => {
  return Promise.all([
    fetchAPI('customers'),
    fetchAPI('rooms'),
    fetchAPI('bookings')
  ]).catch(
    error => handleError(error)
  );
}

const postBooking = (booking) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  ).catch(
    err => handleError(err)
  );
}

export {fetchAPI, fetchAllData, postBooking};