import request from 'superagent';
const API_URL = 'http://api.citybik.es/v2/';

// networks/barclays-cycle-hire?fields=stations";

function handleResponse(resolve, reject, err, res) {
  if (err) {
    reject(err);
  } else {
    resolve(res.body);
  }
}

class Api {
  static get(uri, queries = '') {
    // Retrieve full url
    var fullUrl = `${API_URL}${uri}`;
    if (queries !== '') {
      fullUrl = `${fullUrl}?${queries}`;
    }

    // Make request
    return new Promise((resolve, reject) => {
      request
        .get(`${API_URL}${uri}?${queries}`)
        .end(handleResponse.bind(this, resolve, reject));
    });
  }
}

export default Api;
