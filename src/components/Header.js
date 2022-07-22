import React from 'react'
import { Link } from 'gatsby'
import { Nav, Navbar } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'

const Header = () => {
  return (
    <header>
        <Navbar>
          <Navbar.Brand>
            <h3>Jeff C. Salter</h3>
            <p>Cybersecurity & Information Design</p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <NavbarCollapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Item>
                <Link to='about' className='nav-link' activeClassName='active'>About</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='blog' className='nav-link' activeClassName='active'>My Blog</Link>
              </Nav.Item>
              <Nav.Item>
                <Link to='contact' className='nav-link' activeClassName='active'>Contact Me</Link>
              </Nav.Item>
            </Nav>
          </NavbarCollapse>
        </Navbar>
    </header>
  )
}

export default Header