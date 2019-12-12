import React from 'react'
import { getSource } from '../utils/get-source'

export default function Preview({signature, template}) {

  return (
    <div className='pt-6 px-3'>
      <div className='stage bg-white p-4 shadow-sm mx-auto'>
        <div className='dummy mb-6'>
          <div className='line w-25' />
          <div className='line mt-4'/>
          <div className='line w-75'/>
          <div className='line'/>
          <div className='line w-75'/>
          <div className='line'/>
        </div>
        <div dangerouslySetInnerHTML={{__html: getSource(signature, template)}} />
      </div>
    </div>
  )
}