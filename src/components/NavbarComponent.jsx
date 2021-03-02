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
            <img
              className='logoImg'
              style={{ height: '100%', width: '100%' }}
              src={logo}
            />
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
                <i
                  style={{ fontSize: '19px', marginRight: '8px' }}
                  class='fa fa-home'
                ></i>
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
                <i
                  style={{ fontSize: '15px', marginRight: '8px' }}
                  class='fas fa-laptop-code'
                ></i>
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
                <i style={{ marginRight: '8px' }} class='fas fa-user'></i>
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
                <i class='fas fa-code'></i> Skill
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
                <i
                  style={{ fontSize: '15px', marginRight: '8px' }}
                  class='fas fa-mobile'
                ></i>
                Contact
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <h6
          className='d-none d-md-block'
          style={
            isDark ? { color: darktheme.color } : { color: lighttheme.color }
          }
        >
          {isDark ? 'Dark theme' : 'Light theme'}
        </h6>
        <div>
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
