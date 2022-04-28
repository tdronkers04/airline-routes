import React from 'react'

const Table = ({ columns, rows, format, range, setRange, perPage }) => {

  const handleClick = (event) => {
    const newRange = {}
    if (event.target.id === 'prev-btn') {
      newRange.start = range.end - (perPage * 2) >= 0 ? range.end - (perPage * 2) : 0
      newRange.end = range.end - perPage
    } else if (event.target.id === 'next-btn') {
      newRange.start = range.start + perPage
      newRange.end = range.start + (perPage * 2) <= rows.length - 1 ? range.start + (perPage * 2) : rows.length - 1
    }
    setRange(newRange)
  }

  const rangeFilteredRows = rows.filter((_, index) => index >= range.start && index <= range.end)

  return (
    <div>
      <table className='routes-table'>
        <thead>
          <tr>
            {columns.map(column => <th key={column.name}>{column.name}</th>)}
          </tr>
        </thead>
        <tbody>
          {rangeFilteredRows.map(row => {
            return (
              <tr key={JSON.stringify(row)}>
                <td>{format('airline', row.airline)}</td>
                <td>{format('src', row.src)}</td>
                <td>{format('dest', row.dest)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='page-control'>
        <p>{`Displaying Routes ${range.start + 1} - ${range.end + 1} of ${rows.length} routes`}</p>
        <div className='pagination'>
          <button disabled={range.start === 0 ? true : false} id="prev-btn" onClick={handleClick}>prev</button>
          <button disabled={range.end === rows.length - 1 ? true : false} id="next-btn" onClick={handleClick}>next</button>
        </div>
      </div>
    </div>
  )
}

export default Table