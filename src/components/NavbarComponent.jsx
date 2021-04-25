import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
const NavbarComponent = () => {
  return (
    <div className='user-select-none'>
      <Navbar.Brand className='col-5 p-0 mx-auto position-absolute'>
        <h1 className='my-portfolio'>my portfolio</h1>
      </Navbar.Brand>
      <Navbar expand='xl' className='main-navbar fixed-top p-3'>
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        ></Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='text-center mainNav rounded ml-auto'>
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
              className='mainLinkItem'
              to='projects'
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
            >
              <Nav.Link className='navLink mx-4'>Projects</Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className='mainLinkItem'
              to='about'
              spy={true}
              smooth={true}
              offset={300}
              duration={500}
            >
              <Nav.Link className='navLink mx-4'>About</Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className='mainLinkItem'
              to='skills'
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              <Nav.Link className='navLink mx-4'>Skill</Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className='mainLinkItem'
              to='contact'
              spy={true}
              smooth={true}
              offset={200}
              duration={500}
            >
              <Nav.Link className='navLink mx-4'>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
