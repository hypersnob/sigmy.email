import React from 'react';

export default function Preview({data}) {

  return (
    <div className='py-5 py-lg-7 px-3'>
      <div className='stage bg-white p-4 shadow-sm mb-4 mx-auto'>
        <div className='dummy'>
          <div className='line w-25' />
          <div className='line mt-4'/>
          <div className='line w-75'/>
          <div className='line'/>
          <div className='line w-75'/>
          <div className='line'/>
        </div>
        <ul className='list-group list-group-flush' id="source">
          {Object.values(data).map((value, index) => (
            <li key={index} className='list-group-item'>{value}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}