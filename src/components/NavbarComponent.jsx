import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg='light' expand='xl' sticky='top'>
        <Navbar.Brand href='#home'>
          <span className='logo'>Philcob</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='text-center rounded'>
            <Nav.Link className='text-dark navLink mx-4' href='#home'>
              Home
            </Nav.Link>
            <Nav.Link className='text-dark navLink mx-4' href='#link'>
              About
            </Nav.Link>
            <Nav.Link className='text-dark navLink mx-4' href='#link'>
              Works
            </Nav.Link>
            <Nav.Link className='text-dark navLink mx-4' href='#link'>
              Journey
            </Nav.Link>
            <Nav.Link className='text-dark navLink mx-4' href='#link'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
