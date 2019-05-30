// import fetch from '../node_modules/fetch'

class Data {
  constructor() {
    this.data;
  }

  fetchData(url) {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          console.log('FETCH ERROR. Status Code: ' + response.status);
          return;
        }
        response.json().then(info => {
          console.log(info)
        });
      }
      )
      .catch((err) => console.log('Fetch Error :-S', err));
  }
}

export default Data;