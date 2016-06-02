/* eslint-disable quotes */
/* eslint-disable quote-props */
/* eslint-disable comma-dangle */

const jsonData = {
  "network": {
    "stations": [
      {
        "empty_slots": 4,
        "extra": {
          "installDate": "1279383300000",
          "installed": true,
          "locked": false,
          "name": "Wardour Street, Soho",
          "removalDate": "",
          "temporary": false,
          "terminalName": "001163",
          "uid": 192
        },
        "free_bikes": 11,
        "id": "4d67a81d9d7aae8a8bef68b05d7fce74",
        "latitude": 51.51251523,
        "longitude": -0.133201961,
        "name": "001163 - Wardour Street, Soho",
        "timestamp": "2016-06-02T10:52:14.991000Z"
      },
      {
        "empty_slots": 1,
        "extra": {
          "installDate": "1382084340000",
          "installed": true,
          "locked": false,
          "name": "Buckingham Gate, Westminster",
          "removalDate": "",
          "temporary": false,
          "terminalName": "200178",
          "uid": 646
        },
        "free_bikes": 14,
        "id": "d79e95513c3b5e1d3c78a65874054481",
        "latitude": 51.49886563,
        "longitude": -0.137424571,
        "name": "200178 - Buckingham Gate, Westminster",
        "timestamp": "2016-06-02T10:52:15.816000Z"
      },
      {
        "empty_slots": 8,
        "extra": {
          "installDate": "1278947280000",
          "installed": true,
          "locked": false,
          "name": "River Street , Clerkenwell",
          "removalDate": "",
          "temporary": false,
          "terminalName": "001023",
          "uid": 1
        },
        "free_bikes": 11,
        "id": "7f3020118e56165ed8b2f61899edb971",
        "latitude": 51.52916347,
        "longitude": -0.109970527,
        "name": "001023 - River Street , Clerkenwell",
        "timestamp": "2016-06-02T10:52:14.710000Z"
      },
      {
        "empty_slots": 19,
        "extra": {
          "installDate": "1278585780000",
          "installed": true,
          "locked": false,
          "name": "Phillimore Gardens, Kensington",
          "removalDate": "",
          "temporary": false,
          "terminalName": "001018",
          "uid": 2
        },
        "free_bikes": 18,
        "id": "67e6c16bce05410ba4b1f0f5000726ea",
        "latitude": 51.49960695,
        "longitude": -0.197574246,
        "name": "001018 - Phillimore Gardens, Kensington",
        "timestamp": "2016-06-02T10:52:14.714000Z"
      },
      {
        "empty_slots": 0,
        "extra": {
          "installDate": "1278240360000",
          "installed": true,
          "locked": false,
          "name": "Christopher Street, Liverpool Street",
          "removalDate": "",
          "temporary": false,
          "terminalName": "001012",
          "uid": 3
        },
        "free_bikes": 31,
        "id": "2d1fd6bf5426f3dc34fae06f43f76f69",
        "latitude": 51.52128377,
        "longitude": -0.084605692,
        "name": "001012 - Christopher Street, Liverpool Street",
        "timestamp": "2016-06-02T10:52:14.715000Z"
      },
      {
        "empty_slots": 0,
        "extra": {
          "installDate": "1278241080000",
          "installed": true,
          "locked": false,
          "name": "St. Chad's Street, King's Cross",
          "removalDate": "",
          "temporary": false,
          "terminalName": "001013",
          "uid": 4
        },
        "free_bikes": 23,
        "id": "d0ca154129878ce71261d563d8da9238",
        "latitude": 51.53005939,
        "longitude": -0.120973687,
        "name": "001013 - St. Chad's Street, King's Cross",
        "timestamp": "2016-06-02T10:52:14.717000Z"
      }
    ]
  }
};

/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-enable quotes */

const stations = jsonData.network.stations;
export default stations;
