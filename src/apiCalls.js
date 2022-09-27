function fetchData(fileName) {
  return fetch(`http://localhost:3001/api/v1/${fileName}`)
  .then(response => response.json())
  .catch(error =>
    console.log(
      'There was a problem loading your data. Please try again.',
      error
    )
  );
};

function postData(fileName, bodyData) {
  return fetch(`http://localhost:3001/api/v1/${fileName}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  })
  .then((response) => response.json())
  .catch((error) => 
    alert(
      'Something went wrong! Your booking could not be processed at this time.', 
      error
    )
  );
};

export { fetchData, postData };