// update location
export function updateLocation(latitude, longitude, isUpToDate) {
  return {
    type: 'UPDATE_LOCATION',
    latitude,
    longitude,
    isUpToDate,
  };
}
