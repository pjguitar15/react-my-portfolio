import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import {
  ThemeToggler,
  TogglerHandler,
  DarkTheme,
  LightTheme,
} from '../GlobalState'
const NavbarComponent = () => {
  const [isDark] = useContext(ThemeToggler)
  const darktheme = useContext(DarkTheme)

  return (
    <div className='user-select-none'>
      <Navbar.Brand className='col-5 p-0 mx-auto position-absolute'>
        <h1 className='my-portfolio'>my portfolio</h1>
      </Navbar.Brand>
      <Navbar expand='xl' className='main-navbar fixed-top'>
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
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                Home
              </Nav.Link>
            </Link>
            <Link
              activeClass='active'
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              to='projects'
              spy={true}
              smooth={true}
              offset={70}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                {/* <i
                  style={{ fontSize: '15px', marginRight: '8px' }}
                  className='fas fa-laptop-code'
                ></i> */}
                Projects
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              to='about'
              spy={true}
              smooth={true}
              offset={300}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                About
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              to='skills'
              spy={true}
              smooth={true}
              offset={130}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                {/* <i className='fas fa-code'></i> */}
                Skill
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              className={`${isDark ? 'mainLinkItemDark' : 'mainLinkItem'}`}
              to='contact'
              spy={true}
              smooth={true}
              offset={200}
              duration={500}
            >
              <Nav.Link
                style={{ color: isDark && darktheme.color }}
                className='navLink mx-4'
              >
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* <h6
          className='d-none toggle-icon d-xl-block'
          style={{ color: isDark && darktheme.color }}
        >
          {isDark ? (
            <i class='fas fa-moon'></i>
          ) : (
            <i className='far text-light font-weight-bolder fa-sun'></i>
          )}
        </h6>
        <div className='d-none d-xl-block'>
          <Switch
            checked={isDark}
            onChange={handleChange}
            name='checkedA'
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div> */}
      </Navbar>
    </div>
  )
}

export default NavbarComponent
