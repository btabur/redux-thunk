import React from 'react'
import {NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='d-flex justify-content-between align-items-center px-5 py-2 fixed-top bg-light'>
      <p className='fs-3 fw-bold'>Redux Thunk Commerce</p>

      <nav>
        <NavLink className={'btn btn-primary me-4'} to={'/'} >Anasayfa</NavLink>
        <NavLink className={'btn btn-warning'} to={'/basket'}>Sepet</NavLink>
      </nav>
    </header>
  )
}

export default Header
