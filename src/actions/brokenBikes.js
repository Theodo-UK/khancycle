export function reportBrokenBikes(stationId, number) {
  return {
    type: 'REPORT_BROKEN',
    stationId,
    number,
  };
}
