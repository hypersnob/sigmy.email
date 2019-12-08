import React from 'react';

export default function Preview({data}) {

  return (
    <div className='p-5 flex-grow-1'>
      <div className='stage bg-white p-4 shadow-sm mb-4 mx-auto'>
        <ul className='list-group list-group-flush' id="source">
          {Object.values(data).map((value, index) => (
            <li key={index} className='list-group-item'>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}