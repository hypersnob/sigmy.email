import React from 'react'
import Logo from '../icons/js/Logo'

export default function Header() {
  return (
    <header className='page-header text-light d-flex'>
      <div className="brand border-right border-dark">
        <Logo />
      </div>
      <div className='d-none d-md-flex justify-content-between flex-grow-1 align-items-center px-4 text-muted'>
        <span className=''>Email signature generator</span>
      </div>
    </header>
  )
}