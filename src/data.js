class Data {
  constructor() {
  }

  fetchData(url) {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          console.log('FETCH ERROR. Status Code: ' + response.status);
          return;
        }
        response.json().then(info => info);
      }
      )
      .catch((err) => console.log('Fetch Error :-S', err));
  }
}

export default Data;