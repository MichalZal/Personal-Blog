import React from 'react'
import '../../styles/scss/Nav.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {

  const hamMenu = document.querySelector('.hamMenu')

  const toggleHamMenu = () => {
    hamMenu.classList.toggle('hamMenu-active')
  }


  return (
    <>
      <nav className='navbar'>
        <div className='navbarLogo'>
          <a href="../../App.js">
          <div className='name'>Michał</div><div className='secondName'>Zalewski</div>
          </a>
        </div>
        <div className='navbarLinks'>
          <ul class='ul'>
            <li className='navbarLink' > <a href='../../App.js'> Strona Główna</a></li>
            <li className='navbarLink' > <a href='../../Projects.js'> Projekty </a></li>
            <li className='navbarLink' > <a href='../../About.js'> O mnie </a></li>
            <li className='navbarLink' > <a href='../../Contact.js'> Kontakt </a></li>
          </ul>
        </div>
        <div className='hamMenu' onClick={toggleHamMenu}>
          <span className="bar" id="bar1"></span>
          <span className="bar" id="bar2"></span>
          <span className="bar" id="bar3"></span>
        </div>
      </nav>
    </>
  )
}

export default Nav