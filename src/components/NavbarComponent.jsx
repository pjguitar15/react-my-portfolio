import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg='light' expand='xl' fixed='top'>
        <Navbar.Brand href='#home'>
          <span className='logo'>Philcob</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='text-center rounded mainNav'>
            <Link
              activeClass='active'
              to='home'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link className='navLink mx-4'>Home</Nav.Link>
            </Link>

            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link className='navLink mx-4'>About</Nav.Link>
            </Link>

            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link className='navLink mx-4'>Skill</Nav.Link>
            </Link>

            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link className='navLink mx-4'>Contact</Nav.Link>
            </Link>
            {/* <Link
              activeClass='active'
              to='test'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            > */}
            {/* <Nav.Link className='text-dark navLink mx-4'>Journey</Nav.Link> */}
            {/* </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
