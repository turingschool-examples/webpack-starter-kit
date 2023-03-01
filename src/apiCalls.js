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

export {fetchAPI, fetchAllData};