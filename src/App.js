import React, { useState } from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table';
import Select from './components/Select';

const columns = [
  {name: 'Airline', property: 'airline'},
  {name: 'Source Airport', property: 'src'},
  {name: 'Destination Airport', property: 'dest'},
];

const formatValue = (property, name) => {
  switch(property) {
    case 'airline':
      return getAirlineById(name);
    default:
      return getAirportByCode(name);
  }
}

const App = () => {
  const [ airlineFilter, setAirlineFilter ] = useState('')

  const filteredRoutesByAirline = data.routes.filter(route => {
    if (airlineFilter === '') {
      return true
    } else {
      return route.airline === airlineFilter
    }
  })
  
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Select setAirlineFilter={setAirlineFilter}/>
        <Table columns={columns} rows={filteredRoutesByAirline} format={formatValue} perPage={25}/>
      </section>
    </div>
  )
}

export default App;