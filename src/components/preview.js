import React from 'react'
import { getSource } from '../utils/get-source'

export default function Preview({signature, template, social}) {
  return (
    <div className='pt-6 px-3'>
      <div className='stage mx-auto'>
        <div className='bg-white p-4 shadow-sm'>
          <div className='dummy mb-6'>
            <div className='line w-25' />
            <div className='line mt-4'/>
            <div className='line w-75'/>
            <div className='line'/>
            <div className='line w-75'/>
            <div className='line'/>
          </div>
          <div dangerouslySetInnerHTML={{__html: getSource(signature, template, social)}} />
        </div>
      </div>
    </div>
  )
}