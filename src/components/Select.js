import React from "react";
import data from "../data";
import { checkAvailable } from "../helpers";

const Select = ({ options, currentData, filter }) => {

  const handleSelect = (event) => {
    const identifier = event.target.value
    filter(identifier)
  }
  
  if (options === 'airports') {
    return (
      <div>
        <select id="select-airports" defaultValue={"all"} onChange={handleSelect}>
          <option id="airports-default" value='all'>All Airports</option>
          {data.airports.map(airport => {
            return <option 
              key={airport.code} 
              value={airport.code}
              disabled={checkAvailable(currentData, 'airports', airport.code) ? "" : "disabled"}
              >{airport.name}</option>
          })}
        </select>
      </div>
    )
  }
  
  return (
    <div>
      <select id="select-airlines" defaultValue={"all"} onChange={handleSelect}>
        <option id="airlines-default" value='all'>All Airlines</option>
        {data.airlines.map(airline => {
          return <option 
            key={airline.id}
            value={airline.id}
            disabled={checkAvailable(currentData, 'airlines', airline.id) ? "" : "disabled"}
            >{airline.name}</option>
        })}
      </select>
    </div>
  )
}

export default Select