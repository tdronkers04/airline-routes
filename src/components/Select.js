import React from "react";
import data from "../data";

const Select = ({ options, filter }) => {

  const handleSelect = (event) => {
    const identifier = event.target.value
    filter(identifier)
  }
  
  if (options === 'airports') {
    return (
      <div>
        <select name="select" onChange={handleSelect}>
          <option value=''>All Airports</option>
          {data.airports.map(airport => {
            return <option key={airport.code} value={airport.code}>{airport.name}</option>
          })}
        </select>
      </div>
    )
  }
  
  return (
    <div>
      <select name="select" onChange={handleSelect}>
        <option value=''>All Airlines</option>
        {data.airlines.map(airline => {
          return <option key={airline.id} value={airline.id}>{airline.name}</option>
        })}
      </select>
    </div>
  )
}

export default Select