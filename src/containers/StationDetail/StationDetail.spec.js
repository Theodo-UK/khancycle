import { expect } from 'chai';
import { fromJS } from 'immutable';

import { mapStateToProps } from './StationDetail';

describe('StationDetailContainer', () => {
  describe('mapStateToProps', () => {
    it('maps the most recent broken bikes report correctly', () => {
      const state = {
        stations: {},
        brokenBikes: fromJS({
          brokenBikeReports: {
            randomid: {
              firebaseid1: {
                timestamp: '2016-06-10T17:50:13.603Z',
                number: 3,
              },
              firebaseid2: {
                timestamp: '2016-06-10T10:00:00.000Z',
                number: 2,
              },
            },
            otherid: {
              firebaseid3: {
                timestamp: '2016-06-10T18:00:00.000Z',
                number: 5,
              },
            },
          },
        }),
      };
      const ownProps = { stationId: 'randomid' };
      const props = mapStateToProps(state, ownProps);

      expect(props.brokenBikes.get('number')).to.equal(3);
    });
  });
});
