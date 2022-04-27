import React from 'react';
import './App.css';
import data, { getAirlineById, getAirportByCode } from './data'
import Table from './components/Table';

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
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Table columns={columns} rows={data.routes} format={formatValue}/>
      </section>
    </div>
  )
}

export default App;