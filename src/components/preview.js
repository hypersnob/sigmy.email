import React from 'react';

export default function Preview({data}) {

  return (
    <div className='p-5 bg-light flex-grow-1'>
      <div className='card shadow-sm mb-4'>
        <div className='card-header bg-dark pt-3' />
        <ul className='list-group list-group-flush' id="source">
          {Object.values(data).map((value, index) => (
            <li key={index} className='list-group-item'>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}