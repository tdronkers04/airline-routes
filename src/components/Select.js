import React from "react";
import data from "../data";

const Select = ({ setAirlineFilter }) => {

  const handleSelect = (event) => {
    const id = Number(event.target.value)
    setAirlineFilter(id)
  }
  
  return (
    <div className="filter">
      <label htmlFor="airline-select">Filter by airline:</label>
      <select name="airline-select" id="airline-select" onChange={handleSelect}>
        <option value=''>All Airlines</option>
        {data.airlines.map(airline => {
          return <option key={airline.id} value={airline.id}>{airline.name}</option>
        })}
      </select>
    </div>
  )
}

export default Select