import request from 'superagent';
const API_URL = 'http://api.citybik.es/v2/';

function handleResponse(resolve, reject, err, res) {
  if (err) {
    reject(err);
  } else {
    resolve(res.body);
  }
}

class CityBikes {
  static get(uri, queries = '') {
    // Retrieve full url
    var fullUrl = `${API_URL}${uri}`;
    if (queries !== '') {
      fullUrl = `${fullUrl}?${queries}`;
    }
    // Make request
    return new Promise((resolve, reject) => {
      request
        .get(fullUrl)
        .end(handleResponse.bind(this, resolve, reject));
    });
  }

  static getStationsList(latitude, longitude) {
    if (!latitude || latitude > 50) {
      return this.get('networks/barclays-cycle-hire', 'fields=stations');
    } else {
      return this.get('networks/velib', 'fields=stations');
    }
  }
}

export default CityBikes;
