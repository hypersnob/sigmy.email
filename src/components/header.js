import React from 'react'
import Logo from '../icons/js/Logo'

export default function Header() {
  return (
    <header className='page-header text-light d-flex'>
      <div className="brand border-right border-dark p-4">
        <Logo />
      </div>
      <div className='d-flex justify-content-between flex-grow-1 align-items-center px-4 text-muted'>
        <span className=''>Email signature generator</span>
        <div>
          <span>by</span>{' '}
          <a href='https://github.com/hypersnob' target='_blank' rel="noopener noreferrer">hypersnob</a>
        </div>
      </div>
    </header>
  )
}