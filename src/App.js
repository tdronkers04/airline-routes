import React, { useEffect, useState } from 'react';
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
  const perPage = 25
  const [ airlineFilter, setAirlineFilter ] = useState('all');
  const [ airportFilter, setAirportFilter ] = useState('all');
  const [range, setRange] = useState({start: 0, end: perPage - 1})
  
  const filteredRoutes = filterRoutes(data.routes, airlineFilter, airportFilter)

  useEffect(() => {
    const newRange = {
      start: 0,
      end: filteredRoutes.length < perPage ? filteredRoutes.length - 1 : perPage
    }
    setRange(newRange)
  }, [filteredRoutes.length])
  
  const handleClearFilters = () => {
    setAirlineFilter('all');
    setAirportFilter('all');
    const airlineDefault = document.getElementById('airlines-default');
    const airportDefault = document.getElementById('airports-default');
    airlineDefault.selected = true;
    airportDefault.selected = true;
  }
  
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <div className='filter'>
          Show routes on 
          <Select options='airlines' currentData={filteredRoutes} filter={setAirlineFilter} />
          flying in or out of
          <Select options='airports' currentData={filteredRoutes} filter={setAirportFilter} />
          <button onClick={handleClearFilters}>Show All Routes</button>
        </div>
  
        <Table 
          columns={columns} 
          rows={filteredRoutes} 
          format={formatValue} 
          perPage={perPage}
          range={range}
          setRange={setRange}/>
      </section>
    </div>
  )
}

export default App;