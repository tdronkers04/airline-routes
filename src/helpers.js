export const filterRoutes = (routeData, airlineID, airportCode) => {
  airlineID = airlineID === 'all' ? 'all' : parseInt(airlineID)
  return routeData.filter(route => {
    if (airlineID !== 'all' && airportCode === 'all') {
      return route.airline === airlineID;
    } else if (airlineID === 'all' && airportCode !== 'all') {
      return route.src === airportCode || route.dest === airportCode;
    } else if (airlineID !== 'all' && airportCode !== 'all') {
      return route.airline === airlineID && (route.src === airportCode || route.dest === airportCode)
    } else {
      return true;
    }
  });
}