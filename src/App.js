import React from 'react';
import './App.css';
import data from './data'
import Routes from './components/Routes';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Routes routes={data.routes}/>
      </section>
    </div>
  )
}

export default App;