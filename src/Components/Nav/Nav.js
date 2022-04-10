import React from 'react'
import './Nav.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
  
  const toggleHamMenu = (e) => {
    const hamMenu = document.querySelector('.hamMenu')
    const navbarLinks = document.querySelector('.navbarLinks')

    hamMenu.classList.toggle('hamMenu-active')
    navbarLinks.classList.toggle('navbarLinks-active')
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
          <div className='socialLinks'>
            <div className='facebook'>facebook</div>
            <div className='github'>github</div>
          </div>
          <ul className='ul'>
            <li className='navbarLink'> <a href='../../App.js'> Strona Główna</a></li>
            <li className='navbarLink'> <a href='../../Projects.js'> Projekty </a></li>
            <li className='navbarLink'> <a href='../../About.js'> O mnie </a></li>
            <li className='navbarLink'> <a href='../../Contact.js'> Kontakt </a></li>
          </ul>
        </div>
        <div className='hamMenu' onClick={toggleHamMenu}>
          <span className="bar" id="bar1"></span>
          <span className="bar" id="bar2"></span>
          <span className="bar" id="bar3"></span>
        </div>
        <div className='info'>
          <p> Hello. My name is <span>Michał Zalewski</span>. I really like front-end development, but I can also do back-end.
            My favourite technologies are React and NodeJS 
          </p>
        </div>
      </nav>
    </>
  )
}

export default Nav
