import React from 'react'
import navbarStyle from "../navbar/navbar.module.css"

const Navbar = () => {
  return (
    <nav className={navbarStyle.navbbar}>
        <ul>
            <li>ABOUT US</li>
            <li>FOR YOU</li>
            <li>SERVİCES</li>
            <li>BLOG</li>
            <li>VLOG</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar