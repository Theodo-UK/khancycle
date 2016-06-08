// update stations
export function updateStations(stations) {
  return {
    type: 'UPDATE_STATIONS',
    stations,
  };
}
// nearest stations updated
export function nearestStationsUpdated(nearestStations) {
  return {
    type: 'NEAREST_STATIONS_UPDATED',
    nearestStations,
  };
}
