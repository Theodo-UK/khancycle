// update location
export function updateLocation(latitude, longitude) {
  return {
    type: 'UPDATE_LOCATION',
    latitude,
    longitude,
  };
}
