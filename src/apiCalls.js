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

const postData = (url, bodyData) => {
  const requestData = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  };
  
  fetch(url, requestData)
    .then((response) => response.json())
    .then((data) => {
      if (data.message) {
        alert(data.message);
      } else {
        return data;
      }
    })
    .catch((error) => alert(error));
};

export { fetchData, postData };