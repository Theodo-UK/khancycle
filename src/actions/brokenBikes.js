import * as firebase from '../services/firebase';

export function successfulReport(stationId, number) {
  return {
    type: 'BROKEN_REPORT_SUCCESS',
    stationId,
    number,
  };
}
export function reportBrokenBikes(stationId, number) {
  return dispatch => firebase.reportBrokenBikes(stationId, number)
    .then(() => dispatch(successfulReport(stationId, number)));
}

export function brokenBikeReportsUpdated(brokenBikeReports) {
  return {
    type: 'BROKEN_REPORTS_UPDATED',
    brokenBikeReports,
  };
}
