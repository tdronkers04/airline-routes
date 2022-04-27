import React from 'react'

const Route = ({ route }) => {
  return (
    <tr>
      <td>{route.airline}</td>
      <td>{route.src}</td>
      <td>{route.dest}</td>
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