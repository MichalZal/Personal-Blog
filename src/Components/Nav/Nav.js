import React from 'react'
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai'
import './Nav.css'

const Nav = () => {
  function toggleHamMenu(e) {
    const hamMenu = document.querySelector('.hamMenu')
    const navbarLinks = document.querySelector('.navbarLinks')
    hamMenu.classList.toggle('hamMenu-active')
    navbarLinks.classList.toggle('navbarLinks-active')
  }

  return (
    <div className='color'>
      <nav className='navbar'>
        <div className='navbarLogo'>
          <a href="../../App.js">
          <div className='name'>Michał</div><div className='secondName'>Zalewski</div>
          </a>
        </div>
        <div className='navbarLinks'>
          <div className='socialLinks'>
            <div className='facebook'>
              <a href="https://www.facebook.com/Michalzalewsk">
                <BsFacebook className='face-logo'/>
              </a>
            </div>
            <div className='github'>
              <a href="https://github.com/MichalZal">
                <BsGithub className='git-logo'/>
              </a>
            </div>
            <div className='instagram'>
              <a href="https://www.instagram.com/chraabaszcz/">
                <AiFillInstagram className='insta-logo'/>
              </a>
            </div>
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
          <p className='about'> <span className='link'>Hello. My name is Michał Zalewski. I really like front-end development, but I can also do back-end.
            My favourite technologies are <span>React</span> and <span>NodeJS</span></span>
          </p>
        </div>
      </nav>
    </div>
  )
}

export default Nav