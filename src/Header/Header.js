import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header className='header'>
      <div className='headerInfo'></div>
      <Nav />
    </header>
  )
}

export default Header