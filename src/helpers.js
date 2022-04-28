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

export const checkAvailable = (filteredRoutes, options, value) => {
  if (options === 'airlines') {
    const found = !!filteredRoutes.find(route => route.airline === value)
    return found
  } 
  const found =  !!filteredRoutes.find(route => route.src === value) || 
    !!filteredRoutes.find(route => route.dest === value)
  return found
}