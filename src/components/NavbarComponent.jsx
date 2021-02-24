import React, { useContext } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Switch from '@material-ui/core/Switch'
import logo from '../Assets/favicon.png'
import {
  ThemeToggler,
  TogglerHandler,
  DarkTheme,
  LightTheme,
} from '../GlobalState'
const NavbarComponent = () => {
  const handleChange = useContext(TogglerHandler)
  const [isDark, setIsDark] = useContext(ThemeToggler)
  const darktheme = useContext(DarkTheme)
  const lighttheme = useContext(LightTheme)
  return (
    <div>
      <Navbar
        style={isDark ? darktheme.dark : lighttheme.dark}
        expand='xl'
        fixed='top'
      >
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Navbar.Brand className='col-5 p-0 mx-auto'>
            <img style={{ height: '100%', width: '100%' }} src={logo} />
          </Navbar.Brand>
        </Link>
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
              <Nav.Link
                style={
                  isDark
                    ? { color: darktheme.color }
                    : { color: lighttheme.color }
                }
                className='navLink mx-4'
              >
                Home
              </Nav.Link>
            </Link>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link
                style={
                  isDark
                    ? { color: darktheme.color }
                    : { color: lighttheme.color }
                }
                className='navLink mx-4'
              >
                Projects
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link
                style={
                  isDark
                    ? { color: darktheme.color }
                    : { color: lighttheme.color }
                }
                className='navLink mx-4'
              >
                About
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              to='skills'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link
                style={
                  isDark
                    ? { color: darktheme.color }
                    : { color: lighttheme.color }
                }
                className='navLink mx-4'
              >
                Skill
              </Nav.Link>
            </Link>

            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <Nav.Link
                style={
                  isDark
                    ? { color: darktheme.color }
                    : { color: lighttheme.color }
                }
                className='navLink mx-4'
              >
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <h6
          style={
            isDark ? { color: darktheme.color } : { color: lighttheme.color }
          }
        >
          {isDark ? 'Dark theme' : 'Light theme'}
        </h6>
        <div className='d-none d-md-block'>
          <Switch
            checked={isDark}
            onChange={handleChange}
            name='checkedA'
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </div>
      </Navbar>
    </div>
  )
}

export default NavbarComponent
