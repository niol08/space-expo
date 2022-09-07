import React from "react"
import { useState, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"
import "../css/navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleOpen = useRef(null)
  const toggleClose = useRef(null)
  const overLay = useRef(null)
  const showMenu = useRef(null)

  useEffect(() => {
    if (isMenuOpen) {
      toggleOpen.current.classList.remove("unclicked")
      toggleOpen.current.classList.add("clicked")
      toggleClose.current.classList.add("unclicked")
      overLay.current.classList.add("unclicked")
      showMenu.current.classList.add("show-menu")
    } else {
      toggleClose.current.classList.remove("unclicked")
      toggleClose.current.classList.add("clicked")
      overLay.current.classList.remove("unclicked")
      overLay.current.classList.add("clicked")
      toggleOpen.current.classList.add("unclicked")
      showMenu.current.classList.remove("show-menu")
    }
  }, [isMenuOpen])

  const setTrue = () => {
    setIsMenuOpen(true)
  }
  const setFalse = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav>
      <div className='logo'>
        <img
          src={process.env.PUBLIC_URL + `./assets/shared/logo.svg`}
          alt='logo'
        />
      </div>
      <div className='overlay clicked' onClick={setFalse} ref={overLay}></div>
      <div className='nav-content' ref={showMenu}>
        <ul className='links' id='navigation'>
          <li>
            <span aria-hidden='true'>00</span>
            <NavLink
              to='/'
              onClick={() => {
                setFalse()
              }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <span aria-hidden='true'>01</span>
            <NavLink
              to='/destination'
              onClick={() => {
                setFalse()
              }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Destination
            </NavLink>
          </li>
          <li>
            <span aria-hidden='true'>02</span>
            <NavLink
              to='/crew'
              onClick={() => {
                setFalse()
              }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Crew
            </NavLink>
          </li>
          <li>
            <span aria-hidden='true'>03</span>
            <NavLink
              to='/technology'
              onClick={() => {
                setFalse()
              }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Technology
            </NavLink>
          </li>
        </ul>
      </div>
      <div className='toggle'>
        <img
          aria-controls='navigation'
          src={process.env.PUBLIC_URL + `./assets/shared/icon-hamburger.svg`}
          alt='menu-icon'
          className='icon unclicked open'
          onClick={() => {
            setTrue()
          }}
          ref={toggleOpen}
        />
        <img
          aria-controls='navigation'
          src={process.env.PUBLIC_URL + `./assets/shared/icon-close.svg`}
          alt='close-icon'
          className='icon clicked close'
          onClick={() => {
            setFalse()
          }}
          ref={toggleClose}
        />
      </div>
    </nav>
  )
}

export default Navbar
