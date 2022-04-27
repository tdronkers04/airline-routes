import React from 'react'

const Table = ({ columns, rows, format }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => <th key={column.name}>{column.name}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => {
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
  )
}

export default Table