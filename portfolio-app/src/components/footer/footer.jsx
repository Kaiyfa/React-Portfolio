import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';



const footer = () => {
  return (
    <footer>
      <a href="#l" classeName='footer_logo'>Adama</a>
      
      <Nav className="ml-auto">
        <a href="/portfolio"><Nav.Link as="div">Portfolio</Nav.Link></a>
        <a href="/about"><Nav.Link as="div">About</Nav.Link></a>
        <a href="/resume"><Nav.Link as="div">Resume</Nav.Link></a>
      </Nav>
      {/* <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Resume</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul> */}

      <div className="footer_socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>

    </footer>
  )
}

export default footer