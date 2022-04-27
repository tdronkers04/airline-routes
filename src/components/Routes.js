import React from 'react'
import { getAirlineById, getAirportByCode } from '../data'

const Route = ({ route }) => {
  return (
    <tr>
      <td>{getAirlineById(route.airline)}</td>
      <td>{getAirportByCode(route.src)}</td>
      <td>{getAirportByCode(route.dest)}</td>
    </tr>
  )
}

const Routes = ({ routes }) => {
  
  return (
    <table>
      <thead>
        <tr>
          <td>Airline</td>
          <td>Source</td>
          <td>Destination</td>
        </tr>
      </thead>
      <tbody>
        {routes.map(route => <Route key={JSON.stringify(route)} route={route} />)}
      </tbody>
    </table>
  )
}

export default Routes