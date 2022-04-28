import React, { useState } from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table';
import Select from './components/Select';
import { filterRoutes } from './helpers';

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
  const [ airlineFilter, setAirlineFilter ] = useState('all')
  const [ airportFilter, setAirportFilter ] = useState('all')
  
  const filteredRoutes = filterRoutes(data.routes, airlineFilter, airportFilter)
  
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <div className='filter'>
          Show routes on 
          <Select options='airlines' filter={setAirlineFilter}/>
          flying in or out of
          <Select options='airports' filter={setAirportFilter} />
        </div>
  
        <Table columns={columns} rows={filteredRoutes} format={formatValue} perPage={25}/>
      </section>
    </div>
  )
}

export default App;