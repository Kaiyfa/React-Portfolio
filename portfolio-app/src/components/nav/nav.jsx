import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css";
import { Link } from 'react-router-dom';
import {AiFillLinkedin} from  'react-icons/ai'
import {DiGithubAlt} from 'react-icons/di'


function MyNav() {
    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="space">
            <Link to="/"><Navbar.Brand as="div">Adama Sall</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to="/portfolio"><Nav.Link as="div">Portfolio</Nav.Link></Link>
                    <Link to="/about"><Nav.Link as="div">About</Nav.Link></Link>
                    <Link to="/resume"><Nav.Link as="div">Resume</Nav.Link></Link>
                    <NavDropdown title="Social Media" id="collapsible-nav-dropdown">
                        <NavDropdown.Item href="https://github.com/kaiyfa" target={"_blank"} rel={"noopener noreferrer"}><i
                            className="fab fa-github"></i><DiGithubAlt /> GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/adsall" target={"_blank"} rel={"noopener noreferrer"}><i className="fab fa-linkedin"></i> <AiFillLinkedin />LinkedIn</NavDropdown.Item>
                        <NavDropdown.Divider />
                    </NavDropdown>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNav;