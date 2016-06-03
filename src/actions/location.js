// update location
export function updateLocation(longitude, latitude) {
  return {
    type: 'UPDATE_LOCATION',
    longitude,
    latitude,
  };
}
