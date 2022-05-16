import React from 'react'
import './Nav.css'
import NavLinks from './NavLinks/NavLinks'
import HamMenu from './HamMenu/HamMenu'
import NavLogo from './NavLogo/NavLogo'
import NavInfo from './NavInfo/NavInfo'

const Nav = () => {
  const toggleHamMenu = () => {
    const hamMenu = document.querySelector('.hamMenu')
    const navbarLinks = document.querySelector('.navbarLinks')
    hamMenu.classList.toggle('hamMenu-active')
    navbarLinks.classList.toggle('navbarLinks-active')
  }

  return (
    <div className='color'>
      <nav className='navbar'>
        <NavLogo />
        <NavLinks />
        <HamMenu onToggleHamMenu={toggleHamMenu}/>
        <NavInfo />
      </nav>
    </div>
  )
}

export default Nav